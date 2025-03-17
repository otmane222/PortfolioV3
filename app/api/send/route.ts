// /app/api/send-email/route.ts

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  try {
    // Send email using Resend
    await resend.emails.send({
      from: 'otmaneaboulghit@gmail.com', // Replace with your email address
      to: 'otmaneaboulghit@gmail.com', // Your email to receive messages
      subject: `New Message from ${name}`,
      html: `
        <h1>New Message from ${name}</h1>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    });

    return NextResponse.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
