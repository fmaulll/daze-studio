import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure with your SMTP settings
const smtpConfig = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "dazesh1treal@gmail.com", // your email
    pass: "eocf coxd ehjy roxg" // your password or app-specific password
  }
};

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const { name, email, subject, message } = await req.json();

    // Create transporter
    const transporter = nodemailer.createTransport(smtpConfig);

    // Send mail
    await transporter.sendMail({
      from: smtpConfig.auth.user,
      to: "support@doingabsolutezeroeffort.com",
      subject: `New Contact Form Message: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #333;">New Contact Form Message</h2>
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 