import { NextResponse } from 'next/server';

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: 'Missing required fields.' },
      { status: 400 }
    );
  }

  // Keep this non-destructive and lightweight. Replace with CRM/email integration when available.
  console.log('New contact lead', {
    name,
    email,
    company: payload.company?.trim() ?? '',
    message,
  });

  return NextResponse.json({ ok: true });
}
