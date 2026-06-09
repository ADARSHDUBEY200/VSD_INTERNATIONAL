import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Enquiry from '@/lib/models/Enquiry';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, source = 'home_form', company, city, service, budget, message } = body;

    if (!name?.trim() || !email?.trim() || !phone?.trim()) {
      return Response.json({ error: 'Name, email and phone are required' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: 'Invalid email address' }, { status: 400 });
    }

    await connectDB();

    const enquiry = await Enquiry.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      source,
      company: company?.trim(),
      city: city?.trim(),
      service: service?.trim(),
      budget: budget?.trim(),
      message: message?.trim(),
    });

    return Response.json({ ok: true, id: enquiry._id }, { status: 201 });
  } catch {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
