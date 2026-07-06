'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Save, Globe, FileText, ArrowLeft, Loader2, Plus, Trash2, ArrowUp, ArrowDown, Upload, History } from 'lucide-react';
import RichEditor from './RichEditor';
import ImageUpload from './ImageUpload';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { useToast } from './Toast';
import { blogDraftKey, loadDraft, saveDraft, clearDraft } from '@/lib/blogDraft';

const CATEGORIES = [
  'Cloud Kitchen Guides', 'Hotel Kitchen Guides', 'Hospital Kitchen Guides',
  'Restaurant Kitchen Guides', 'Commercial Kitchen Guides',
  'Bakery & Confectionery', 'Industry News',
];

interface Faq { question: string; answer: string; }
interface Recommendation { image: string; title: string; url: string; }

interface BlogData {
  title: string; slug: string; category: string; excerpt: string;
  content: string; quickAnswer: string; keyTakeaways: string[];
  mainImage: string; mainImageAlt: string;
  faqs: Faq[]; recommendations: Recommendation[];
  metaTitle: string; metaDescription: string;
  schemaTitle: string; schemaDescription: string;
  author: string; status: 'draft' | 'published';
}

const EMPTY: BlogData = {
  title: '', slug: '', category: '', excerpt: '',
  content: '', quickAnswer: '', keyTakeaways: [],
  mainImage: '', mainImageAlt: '',
  faqs: [], recommendations: [],
  metaTitle: '', metaDescription: '',
  schemaTitle: '', schemaDescription: '',
  author: 'VSD International', status: 'draft',
};

function slugify(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '0.625rem 0.875rem',
  border: '1px solid #CBD5E1', borderRadius: 8,
  fontSize: 14, color: '#1E293B', background: 'white',
  outline: 'none', boxSizing: 'border-box',
};
const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: 13, fontWeight: 600,
  color: '#374151', marginBottom: '0.375rem',
};
const cardStyle: React.CSSProperties = {
  background: 'white', borderRadius: 12,
  padding: '1.125rem', border: '1px solid #E2E8F0',
};
const smallBtn: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
  padding: '0.4rem 0.75rem', borderRadius: 7, fontSize: 12.5, fontWeight: 600,
  cursor: 'pointer', border: '1px solid #E2E8F0', background: '#F8FAFC', color: '#374151',
};

export default function BlogForm({ id }: { id?: string }) {
  const router = useRouter();
  const isEdit = Boolean(id);
  const { isMobileTablet, isMobile } = useBreakpoint();

  const toast = useToast();
  const [data, setData]       = useState<BlogData>(EMPTY);
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving]   = useState(false);
  const [importing, setImporting] = useState(false);
  const [error, setError]     = useState('');
  const [slugManual, setSlugManual] = useState(false);
  const faqFileRef = useRef<HTMLInputElement>(null);

  /* ── Local Storage draft state ── */
  const draftKey = blogDraftKey(id);
  const baseRef = useRef<string>(JSON.stringify(EMPTY)); // published/empty snapshot for diffing + discard
  const draftDisabled = useRef(false);                   // stop autosave once a save succeeds
  const [draftRestored, setDraftRestored] = useState(false);
  const [draftSavedAt, setDraftSavedAt] = useState<number | null>(null);
  const dataRef = useRef(data);                          // latest data for the unload flush
  const loadedRef = useRef(false);                       // becomes true once initial load finishes

  const normalizeArrays = (d: Partial<BlogData>): Pick<BlogData, 'keyTakeaways' | 'faqs' | 'recommendations'> => ({
    keyTakeaways: Array.isArray(d.keyTakeaways) ? d.keyTakeaways : [],
    faqs: Array.isArray(d.faqs) ? d.faqs : [],
    recommendations: Array.isArray(d.recommendations) ? d.recommendations : [],
  });

  // Load: fetch existing blog (edit) / start empty (create), then restore any
  // Local Storage draft on top — without touching the published DB record.
  useEffect(() => {
    let cancelled = false;

    async function init() {
      if (!isEdit) {
        const draft = loadDraft<BlogData>(draftKey);
        if (draft?.data && !cancelled) {
          setData({ ...EMPTY, ...draft.data, ...normalizeArrays(draft.data) });
          setSlugManual(Boolean(draft.data.slug));
          setDraftRestored(true);
          setDraftSavedAt(draft.savedAt);
        }
        loadedRef.current = true;
        return;
      }

      try {
        const res = await fetch(`/api/admin/blogs/${id}`);
        const { blog } = await res.json();
        if (cancelled || !blog) return;

        const loaded: BlogData = { ...EMPTY, ...blog, ...normalizeArrays(blog) };
        baseRef.current = JSON.stringify(loaded);
        setSlugManual(true);

        const draft = loadDraft<BlogData>(draftKey);
        if (draft?.data && JSON.stringify(draft.data) !== baseRef.current) {
          setData(draft.data);
          setDraftRestored(true);
          setDraftSavedAt(draft.savedAt);
        } else {
          setData(loaded);
        }
      } finally {
        if (!cancelled) { loadedRef.current = true; setLoading(false); }
      }
    }

    init();
    return () => { cancelled = true; };
  }, [id, isEdit, draftKey]);

  // Track the latest form state in a ref for the unload flush handler.
  useEffect(() => { dataRef.current = data; }, [data]);

  // Safety net: flush the current form to Local Storage synchronously when the
  // page is hidden or unloaded, so edits made within the debounce window aren't
  // lost on a quick refresh/close. Uses refs so we subscribe only once.
  useEffect(() => {
    const flush = () => {
      if (!loadedRef.current || draftDisabled.current) return;
      if (JSON.stringify(dataRef.current) !== baseRef.current) {
        saveDraft(draftKey, dataRef.current);
      }
    };
    const onVisibility = () => { if (document.visibilityState === 'hidden') flush(); };
    window.addEventListener('beforeunload', flush);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      window.removeEventListener('beforeunload', flush);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [draftKey]);

  // Debounced autosave: persist the whole form ~2.5s after the last change,
  // but only when it actually differs from the published/empty base.
  useEffect(() => {
    if (loading || draftDisabled.current) return;
    const serialized = JSON.stringify(data);
    if (serialized === baseRef.current) {
      clearDraft(draftKey);
      setDraftSavedAt(null);
      return;
    }
    const t = setTimeout(() => {
      if (saveDraft(draftKey, data)) setDraftSavedAt(Date.now());
    }, 2500);
    return () => clearTimeout(t);
  }, [data, loading, draftKey]);

  function discardDraft() {
    const base = JSON.parse(baseRef.current) as BlogData;
    setData(base);
    clearDraft(draftKey);
    setDraftRestored(false);
    setDraftSavedAt(null);
    setSlugManual(isEdit ? true : Boolean(base.slug));
  }

  function set<K extends keyof BlogData>(key: K, val: BlogData[K]) {
    setData(prev => {
      const next = { ...prev, [key]: val };
      if (key === 'title' && !slugManual) {
        next.slug = slugify(val as string);
        if (!next.metaTitle) next.metaTitle = val as string;
      }
      return next;
    });
  }

  /* ── Key Takeaway handlers ── */
  const addTakeaway = () => set('keyTakeaways', [...data.keyTakeaways, '']);
  const updateTakeaway = (i: number, val: string) =>
    set('keyTakeaways', data.keyTakeaways.map((t, idx) => (idx === i ? val : t)));
  const removeTakeaway = (i: number) => set('keyTakeaways', data.keyTakeaways.filter((_, idx) => idx !== i));

  /* ── FAQ handlers ── */
  const addFaq = () => set('faqs', [...data.faqs, { question: '', answer: '' }]);
  const updateFaq = (i: number, field: keyof Faq, val: string) =>
    set('faqs', data.faqs.map((f, idx) => (idx === i ? { ...f, [field]: val } : f)));
  const removeFaq = (i: number) => set('faqs', data.faqs.filter((_, idx) => idx !== i));

  async function handleImportFaqs(file: File) {
    setImporting(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch('/api/admin/blogs/parse-faqs', { method: 'POST', body: fd });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? 'Import failed');
      const existing = data.faqs.filter(f => f.question.trim() || f.answer.trim());
      set('faqs', [...existing, ...json.faqs]);
      toast.success(`Imported ${json.faqs.length} FAQ${json.faqs.length === 1 ? '' : 's'}`, 'Review and edit them below.');
    } catch (err) {
      toast.error('Import failed', err instanceof Error ? err.message : 'Import failed');
    } finally {
      setImporting(false);
    }
  }

  /* ── Recommendation handlers ── */
  const addRec = () => set('recommendations', [...data.recommendations, { image: '', title: '', url: '' }]);
  const updateRec = (i: number, field: keyof Recommendation, val: string) =>
    set('recommendations', data.recommendations.map((r, idx) => (idx === i ? { ...r, [field]: val } : r)));
  const removeRec = (i: number) => set('recommendations', data.recommendations.filter((_, idx) => idx !== i));
  const moveRec = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= data.recommendations.length) return;
    const n = [...data.recommendations];
    [n[i], n[j]] = [n[j], n[i]];
    set('recommendations', n);
  };

  async function handleSave(publish = false) {
    if (!data.title.trim() || !data.slug.trim() || !data.content.trim()) {
      setError('Title, slug and content are required.'); return;
    }
    setSaving(true); setError('');
    const payload = {
      ...data,
      keyTakeaways: data.keyTakeaways.map(t => t.trim()).filter(Boolean),
      faqs: data.faqs.filter(f => f.question.trim() && f.answer.trim()),
      recommendations: data.recommendations.filter(r => r.title.trim() && r.url.trim()),
      status: publish ? 'published' : data.status,
    };
    try {
      const url    = isEdit ? `/api/admin/blogs/${id}` : '/api/admin/blogs';
      const method = isEdit ? 'PUT' : 'POST';
      const res    = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const json   = await res.json();
      if (!res.ok) throw new Error(json.error ?? 'Save failed');
      // Persisted to the DB — drop the local draft and stop autosaving.
      draftDisabled.current = true;
      clearDraft(draftKey);
      toast.success(publish ? 'Blog post published!' : 'Draft saved.', isEdit ? 'Your changes have been saved.' : 'New blog post created.');
      router.push('/admin/blogs');
      router.refresh();
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Save failed';
      setError(msg);
      toast.error('Save failed', msg);
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 300 }}>
        <Loader2 size={28} color="#2563EB" style={{ animation: 'spin 1s linear infinite' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  const p = isMobile ? '0.875rem' : '1.25rem';

  return (
    <div style={{ padding: p }}>

      {/* Top bar */}
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1.25rem',
        flexWrap: 'wrap', gap: '0.625rem',
      }}>
        <button
          onClick={() => router.push('/admin/blogs')}
          style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', background: 'none', border: 'none', cursor: 'pointer', color: '#64748B', fontSize: 13 }}
        >
          <ArrowLeft size={15} /> Back
        </button>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          {draftSavedAt && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: 12, color: '#94A3B8', whiteSpace: 'nowrap' }}>
              <History size={12} /> Draft saved locally · {new Date(draftSavedAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
            </span>
          )}
          <button onClick={() => handleSave(false)} disabled={saving} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.5rem 0.875rem', borderRadius: 8, background: '#F1F5F9', border: '1px solid #E2E8F0', fontSize: 13, fontWeight: 600, color: '#374151', cursor: 'pointer' }}>
            <Save size={14} /> {saving ? 'Saving…' : 'Draft'}
          </button>
          <button onClick={() => handleSave(true)} disabled={saving} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.5rem 1rem', borderRadius: 8, background: '#2563EB', border: 'none', fontSize: 13, fontWeight: 600, color: 'white', cursor: 'pointer' }}>
            <Globe size={14} /> {saving ? 'Publishing…' : 'Publish'}
          </button>
        </div>
      </div>

      {error && (
        <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 8, padding: '0.75rem 1rem', color: '#DC2626', fontSize: 13, marginBottom: '1rem' }}>
          {error}
        </div>
      )}

      {draftRestored && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 8, padding: '0.75rem 1rem', marginBottom: '1rem' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: 13, color: '#1E40AF' }}>
            <History size={15} />
            Restored an unsaved draft{draftSavedAt ? ` from ${new Date(draftSavedAt).toLocaleString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}` : ''}. {isEdit ? 'Published content is unchanged until you save.' : ''}
          </span>
          <button
            type="button"
            onClick={discardDraft}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.35rem 0.75rem', borderRadius: 7, background: 'white', border: '1px solid #BFDBFE', fontSize: 12.5, fontWeight: 600, color: '#2563EB', cursor: 'pointer', whiteSpace: 'nowrap' }}
          >
            <Trash2 size={13} /> Discard draft
          </button>
        </div>
      )}

      {/* Responsive two-column → single-column */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobileTablet ? '1fr' : '1fr 310px',
        gap: '1.125rem',
        alignItems: 'start',
      }}>

        {/* ── Main column ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          {/* Title + Slug */}
          <div style={cardStyle}>
            <label style={labelStyle}>Title *</label>
            <input
              value={data.title}
              onChange={e => set('title', e.target.value)}
              placeholder="Enter blog title…"
              style={{ ...inputStyle, fontSize: 16, fontWeight: 600, marginBottom: '0.875rem' }}
            />
            <label style={labelStyle}>Slug *</label>
            <div style={{ display: 'flex', gap: 0 }}>
              <span style={{ padding: '0.625rem 0.75rem', background: '#F1F5F9', borderRadius: '8px 0 0 8px', border: '1px solid #CBD5E1', borderRight: 'none', fontSize: 12, color: '#64748B', whiteSpace: 'nowrap' }}>
                /blog/
              </span>
              <input
                value={data.slug}
                onChange={e => { setSlugManual(true); set('slug', slugify(e.target.value)); }}
                placeholder="post-slug"
                style={{ ...inputStyle, borderRadius: '0 8px 8px 0', flex: 1 }}
              />
            </div>
          </div>

          {/* Quick Answer */}
          <div style={cardStyle}>
            <label style={labelStyle}>Quick Answer</label>
            <p style={{ fontSize: 12, color: '#64748B', margin: '0 0 0.625rem' }}>
              A concise, answer-first summary shown in a highlighted box near the top of the post. Leave blank to hide the section.
            </p>
            <textarea
              value={data.quickAnswer}
              onChange={e => set('quickAnswer', e.target.value)}
              rows={4}
              placeholder="Directly answer the main question of this post in 2–4 sentences…"
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>

          {/* Key Takeaways */}
          <div style={cardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.375rem' }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', margin: 0 }}>Key Takeaways</p>
              <button type="button" onClick={addTakeaway} style={{ ...smallBtn, background: '#EFF6FF', borderColor: '#BFDBFE', color: '#2563EB' }}>
                <Plus size={13} /> Add Takeaway
              </button>
            </div>
            <p style={{ fontSize: 12, color: '#64748B', margin: '0 0 0.875rem' }}>
              Bulleted highlights shown in a box near the top of the post. Leave empty to hide the section.
            </p>

            {data.keyTakeaways.length === 0 ? (
              <p style={{ fontSize: 13, color: '#94A3B8', margin: 0, padding: '0.75rem 0' }}>No takeaways yet.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {data.keyTakeaways.map((point, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <span style={{ flexShrink: 0, width: 24, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#64748B' }}>{i + 1}</span>
                    <textarea
                      value={point}
                      onChange={e => updateTakeaway(i, e.target.value)}
                      placeholder="A concise, high-value takeaway…"
                      rows={2}
                      style={{ ...inputStyle, resize: 'vertical', flex: 1 }}
                    />
                    <button type="button" onClick={() => removeTakeaway(i)} aria-label="Remove takeaway" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#EF4444', display: 'flex', padding: '0.5rem 0' }}>
                      <Trash2 size={15} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Content editor */}
          <div style={cardStyle}>
            <label style={{ ...labelStyle, marginBottom: '0.75rem' }}>Content *</label>
            <RichEditor value={data.content} onChange={v => set('content', v)} placeholder="Write your blog post here…" minHeight={isMobile ? 300 : 400} />
          </div>

          {/* FAQs */}
          <div style={cardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.375rem' }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', margin: 0 }}>FAQs</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <button type="button" onClick={() => faqFileRef.current?.click()} disabled={importing} style={smallBtn}>
                  {importing ? <Loader2 size={13} style={{ animation: 'spin 1s linear infinite' }} /> : <Upload size={13} />}
                  {importing ? 'Importing…' : 'Import from .docx'}
                </button>
                <button type="button" onClick={addFaq} style={{ ...smallBtn, background: '#EFF6FF', borderColor: '#BFDBFE', color: '#2563EB' }}>
                  <Plus size={13} /> Add FAQ
                </button>
              </div>
            </div>
            <p style={{ fontSize: 12, color: '#64748B', margin: '0 0 0.875rem' }}>
              Shown as a dedicated section and emitted as FAQ structured data. Import accepts a Word doc with “Q: / A:”, numbered, or “question?” + answer formatting.
            </p>

            {data.faqs.length === 0 ? (
              <p style={{ fontSize: 13, color: '#94A3B8', margin: 0, padding: '0.75rem 0' }}>No FAQs yet. Add one or import a .docx.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {data.faqs.map((faq, i) => (
                  <div key={i} style={{ border: '1px solid #E2E8F0', borderRadius: 10, padding: '0.875rem', background: '#F8FAFC' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: '#64748B' }}>FAQ {i + 1}</span>
                      <button type="button" onClick={() => removeFaq(i)} aria-label="Remove FAQ" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#EF4444', display: 'flex' }}>
                        <Trash2 size={15} />
                      </button>
                    </div>
                    <input
                      value={faq.question}
                      onChange={e => updateFaq(i, 'question', e.target.value)}
                      placeholder="Question"
                      style={{ ...inputStyle, fontWeight: 600, marginBottom: '0.5rem' }}
                    />
                    <textarea
                      value={faq.answer}
                      onChange={e => updateFaq(i, 'answer', e.target.value)}
                      placeholder="Answer"
                      rows={3}
                      style={{ ...inputStyle, resize: 'vertical' }}
                    />
                  </div>
                ))}
              </div>
            )}
            <input
              ref={faqFileRef}
              type="file"
              accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={e => { const f = e.target.files?.[0]; if (f) handleImportFaqs(f); e.target.value = ''; }}
              style={{ display: 'none' }}
            />
          </div>

          {/* Our Recommendations */}
          <div style={cardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.375rem' }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', margin: 0 }}>Our Recommendations</p>
              <button type="button" onClick={addRec} style={{ ...smallBtn, background: '#EFF6FF', borderColor: '#BFDBFE', color: '#2563EB' }}>
                <Plus size={13} /> Add Recommendation
              </button>
            </div>
            <p style={{ fontSize: 12, color: '#64748B', margin: '0 0 0.875rem' }}>
              Product cards shown after the content. Each card links to the product URL. Leave empty to hide the section.
            </p>

            {data.recommendations.length === 0 ? (
              <p style={{ fontSize: 13, color: '#94A3B8', margin: 0, padding: '0.75rem 0' }}>No recommendations yet.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {data.recommendations.map((rec, i) => (
                  <div key={i} style={{ border: '1px solid #E2E8F0', borderRadius: 10, padding: '0.875rem', background: '#F8FAFC' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.625rem' }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: '#64748B' }}>Recommendation {i + 1}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <button type="button" onClick={() => moveRec(i, -1)} disabled={i === 0} aria-label="Move up" style={{ background: 'none', border: 'none', cursor: i === 0 ? 'default' : 'pointer', color: i === 0 ? '#CBD5E1' : '#64748B', display: 'flex' }}>
                          <ArrowUp size={15} />
                        </button>
                        <button type="button" onClick={() => moveRec(i, 1)} disabled={i === data.recommendations.length - 1} aria-label="Move down" style={{ background: 'none', border: 'none', cursor: i === data.recommendations.length - 1 ? 'default' : 'pointer', color: i === data.recommendations.length - 1 ? '#CBD5E1' : '#64748B', display: 'flex' }}>
                          <ArrowDown size={15} />
                        </button>
                        <button type="button" onClick={() => removeRec(i)} aria-label="Remove recommendation" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#EF4444', display: 'flex', marginLeft: '0.25rem' }}>
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                    <div style={{ marginBottom: '0.625rem' }}>
                      <ImageUpload value={rec.image} onChange={url => updateRec(i, 'image', url)} folder="vsd-international/blogs/recommendations" label="Product Image" />
                    </div>
                    <input
                      value={rec.title}
                      onChange={e => updateRec(i, 'title', e.target.value)}
                      placeholder="Product title"
                      style={{ ...inputStyle, fontWeight: 600, marginBottom: '0.5rem' }}
                    />
                    <input
                      value={rec.url}
                      onChange={e => updateRec(i, 'url', e.target.value)}
                      placeholder="https://product-url.com"
                      style={inputStyle}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* SEO */}
          <div style={cardStyle}>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', margin: '0 0 0.875rem' }}>SEO Settings — Meta Tags</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>
                <label style={labelStyle}>Meta Title</label>
                <input value={data.metaTitle} onChange={e => set('metaTitle', e.target.value)} style={inputStyle} placeholder="SEO title — falls back to post title if left blank" />
                <p style={{ fontSize: 11, color: '#94A3B8', margin: '0.25rem 0 0' }}>{data.metaTitle.length}/60</p>
              </div>
              <div>
                <label style={labelStyle}>Meta Description</label>
                <textarea value={data.metaDescription} onChange={e => set('metaDescription', e.target.value)} rows={3} placeholder="150–160 chars ideal. Falls back to excerpt if left blank." style={{ ...inputStyle, resize: 'vertical' }} />
                <p style={{ fontSize: 11, color: '#94A3B8', margin: '0.25rem 0 0' }}>{data.metaDescription.length}/160</p>
              </div>
            </div>
          </div>

          {/* Schema.org overrides */}
          <div style={cardStyle}>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', margin: '0 0 0.375rem' }}>Schema.org (JSON-LD) Overrides</p>
            <p style={{ fontSize: 12, color: '#64748B', margin: '0 0 0.875rem' }}>
              Controls the <code>headline</code> and <code>description</code> fields in the structured data read by search engines and AI crawlers.
              The rest of the markup (author, breadcrumbs, dates, FAQs) is generated automatically.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>
                <label style={labelStyle}>Schema Title</label>
                <input value={data.schemaTitle} onChange={e => set('schemaTitle', e.target.value)} style={inputStyle} placeholder="Falls back to post title if left blank" />
              </div>
              <div>
                <label style={labelStyle}>Schema Description</label>
                <textarea value={data.schemaDescription} onChange={e => set('schemaDescription', e.target.value)} rows={3} placeholder="Falls back to excerpt if left blank." style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
            </div>
          </div>

          {/* Main Image + Alt */}
          <div style={cardStyle}>
            <ImageUpload value={data.mainImage} onChange={url => set('mainImage', url)} folder="vsd-international/blogs" label="Main Image *" />
            <div style={{ marginTop: '0.875rem' }}>
              <label style={labelStyle}>Main Image Alt Text</label>
              <input
                value={data.mainImageAlt}
                onChange={e => set('mainImageAlt', e.target.value)}
                placeholder="Describe the image for accessibility & SEO — falls back to the title if blank"
                style={inputStyle}
              />
            </div>
          </div>
        </div>

        {/* ── Sidebar column ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          {/* Publish settings */}
          <div style={cardStyle}>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', margin: '0 0 0.75rem' }}>Publish Settings</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <div>
                <label style={labelStyle}>Status</label>
                <select value={data.status} onChange={e => set('status', e.target.value as 'draft' | 'published')} style={inputStyle}>
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Author</label>
                <input value={data.author} onChange={e => set('author', e.target.value)} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Category</label>
                <select value={data.category} onChange={e => set('category', e.target.value)} style={inputStyle}>
                  <option value="">Select category…</option>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Excerpt */}
          <div style={cardStyle}>
            <label style={labelStyle}>Excerpt *</label>
            <textarea value={data.excerpt} onChange={e => set('excerpt', e.target.value)} rows={4} placeholder="Short description for listings…" style={{ ...inputStyle, resize: 'vertical' }} />
          </div>

          {/* Status badge */}
          <div style={{ ...cardStyle, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <p style={{ fontSize: 12, color: '#64748B', margin: 0, fontWeight: 500 }}>Current status:</p>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
              padding: '0.25rem 0.75rem', borderRadius: 999, fontSize: 12, fontWeight: 600,
              background: data.status === 'published' ? '#DCFCE7' : '#FEF9C3',
              color: data.status === 'published' ? '#16A34A' : '#CA8A04',
            }}>
              {data.status === 'published' ? <Globe size={11} /> : <FileText size={11} />}
              {data.status === 'published' ? 'Published' : 'Draft'}
            </span>
          </div>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
