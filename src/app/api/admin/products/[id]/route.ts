import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Product from '@/lib/models/Product';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await connectDB();
    const product = await Product.findById(id).lean();
    if (!product) return Response.json({ error: 'Not found' }, { status: 404 });
    return Response.json({ product });
  } catch {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    if (!body.fullName?.trim() || !body.slug?.trim() || !body.category?.trim()) {
      return Response.json({ error: 'Name, slug and category are required' }, { status: 400 });
    }

    await connectDB();
    const product = await Product.findByIdAndUpdate(id, body, { new: true, runValidators: true }).lean();
    if (!product) return Response.json({ error: 'Not found' }, { status: 404 });
    return Response.json({ product });
  } catch (err: unknown) {
    if ((err as { code?: number }).code === 11000) {
      return Response.json({ error: 'A product with this slug already exists' }, { status: 409 });
    }
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await connectDB();
    const product = await Product.findByIdAndDelete(id);
    if (!product) return Response.json({ error: 'Not found' }, { status: 404 });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
