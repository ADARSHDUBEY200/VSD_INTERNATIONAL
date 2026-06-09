import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Blog from '@/lib/models/Blog';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = request.nextUrl;
    const status = searchParams.get('status');
    const page   = Math.max(1, parseInt(searchParams.get('page') ?? '1'));
    const limit  = 20;

    const filter: Record<string, string> = {};
    if (status && status !== 'all') filter.status = status;

    const [blogs, total] = await Promise.all([
      Blog.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit)
        .select('title slug category status author createdAt publishedAt').lean(),
      Blog.countDocuments(filter),
    ]);

    return Response.json({ blogs, total, page, pages: Math.ceil(total / limit) });
  } catch {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (!body.title?.trim() || !body.slug?.trim() || !body.content?.trim()) {
      return Response.json({ error: 'Title, slug and content are required' }, { status: 400 });
    }

    await connectDB();

    if (body.status === 'published' && !body.publishedAt) {
      body.publishedAt = new Date();
    }

    const blog = await Blog.create(body);
    return Response.json({ blog }, { status: 201 });
  } catch (err: unknown) {
    if ((err as { code?: number }).code === 11000) {
      return Response.json({ error: 'A blog with this slug already exists' }, { status: 409 });
    }
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
