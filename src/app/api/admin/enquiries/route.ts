import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Enquiry from '@/lib/models/Enquiry';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = request.nextUrl;
    const status = searchParams.get('status');
    const source = searchParams.get('source');
    const page   = Math.max(1, parseInt(searchParams.get('page') ?? '1'));
    const limit  = 20;

    const filter: Record<string, string> = {};
    if (status && status !== 'all') filter.status = status;
    if (source && source !== 'all') filter.source = source;

    const [enquiries, total] = await Promise.all([
      Enquiry.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit).lean(),
      Enquiry.countDocuments(filter),
    ]);

    return Response.json({ enquiries, total, page, pages: Math.ceil(total / limit) });
  } catch {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
