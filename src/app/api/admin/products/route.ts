import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Product from '@/lib/models/Product';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = request.nextUrl;
    const status   = searchParams.get('status');
    const category = searchParams.get('category');
    const page     = Math.max(1, parseInt(searchParams.get('page') ?? '1'));
    const limit    = Math.min(200, Math.max(1, parseInt(searchParams.get('limit') ?? '20')));

    const filter: Record<string, string> = {};
    if (status   && status   !== 'all') filter.status   = status;
    if (category && category !== 'all') filter.category = category;

    const [products, total] = await Promise.all([
      Product.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit)
        .select('fullName slug category brand status featured mainImage createdAt').lean(),
      Product.countDocuments(filter),
    ]);

    return Response.json({ products, total, page, pages: Math.ceil(total / limit) });
  } catch {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (!body.fullName?.trim() || !body.slug?.trim() || !body.category?.trim()) {
      return Response.json({ error: 'Name, slug and category are required' }, { status: 400 });
    }

    await connectDB();
    const product = await Product.create(body);
    return Response.json({ product }, { status: 201 });
  } catch (err: unknown) {
    if ((err as { code?: number }).code === 11000) {
      return Response.json({ error: 'A product with this slug already exists' }, { status: 409 });
    }
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
