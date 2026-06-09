import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Enquiry from '@/lib/models/Enquiry';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await connectDB();
    const enquiry = await Enquiry.findById(id).lean();
    if (!enquiry) return Response.json({ error: 'Not found' }, { status: 404 });
    return Response.json({ enquiry });
  } catch {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { status } = await request.json();
    await connectDB();
    const enquiry = await Enquiry.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    ).lean();
    if (!enquiry) return Response.json({ error: 'Not found' }, { status: 404 });
    return Response.json({ enquiry });
  } catch {
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
    const enquiry = await Enquiry.findByIdAndDelete(id);
    if (!enquiry) return Response.json({ error: 'Not found' }, { status: 404 });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
