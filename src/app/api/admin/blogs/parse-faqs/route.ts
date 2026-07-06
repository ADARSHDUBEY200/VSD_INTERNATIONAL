import { NextRequest } from 'next/server';
import mammoth from 'mammoth';

// mammoth needs the Node runtime (Buffer, zlib) — it can't run on the edge.
export const runtime = 'nodejs';

interface Faq {
  question: string;
  answer: string;
}

const Q_PREFIX = /^Q(?:uestion)?\s*\d*\s*[.:)\-]\s*/i;
const A_PREFIX = /^A(?:ns(?:wer)?)?\s*\d*\s*[.:)\-]\s*/i;
const NUM_PREFIX = /^\d+[.)]\s*/;

/**
 * Parse raw text extracted from a .docx into FAQ pairs. Handles the common
 * layouts editors use: "Q:/A:" markers, numbered questions, and plain
 * "question ending in ?" followed by the answer on the next line(s).
 */
function parseFaqs(text: string): Faq[] {
  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const faqs: Faq[] = [];
  let current: Faq | null = null;

  const pushCurrent = () => {
    if (current && current.question.trim() && current.answer.trim()) faqs.push(current);
  };

  for (const raw of lines) {
    const explicitAnswer = A_PREFIX.test(raw) && !Q_PREFIX.test(raw);
    if (explicitAnswer && current) {
      const ans = raw.replace(A_PREFIX, '').trim();
      current.answer = current.answer ? `${current.answer}\n${ans}` : ans;
      continue;
    }

    const explicitQuestion = Q_PREFIX.test(raw);
    // A bare "…?" line starts a new question only once we're not mid-question
    // (i.e. no current question yet, or the current one already has an answer).
    const bareQuestion = raw.endsWith('?') && (!current || current.answer.trim().length > 0);

    if (explicitQuestion || bareQuestion) {
      pushCurrent();
      const question = raw.replace(Q_PREFIX, '').replace(NUM_PREFIX, '').trim();
      current = { question, answer: '' };
      continue;
    }

    // Otherwise it's answer text (or continuation) for the current question.
    if (current) {
      current.answer = current.answer ? `${current.answer}\n${raw}` : raw;
    }
  }
  pushCurrent();

  return faqs;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return Response.json({ error: 'No file provided' }, { status: 400 });
    }

    const isDocx =
      file.name.toLowerCase().endsWith('.docx') ||
      file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    if (!isDocx) {
      return Response.json({ error: 'Please upload a .docx file' }, { status: 400 });
    }

    if (file.size > 5 * 1024 * 1024) {
      return Response.json({ error: 'File size must be under 5 MB' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const { value } = await mammoth.extractRawText({ buffer });
    const faqs = parseFaqs(value);

    if (faqs.length === 0) {
      return Response.json(
        { error: 'No FAQs found. Use “Q: … / A: …”, numbered questions, or a question ending in “?” followed by its answer.' },
        { status: 422 }
      );
    }

    return Response.json({ faqs });
  } catch {
    return Response.json({ error: 'Could not read the document' }, { status: 500 });
  }
}
