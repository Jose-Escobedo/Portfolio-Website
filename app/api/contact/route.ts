import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Jose Escobedo <contact@escobedojose.dev>',
      to: 'jose@escobedojose.dev',
      replyTo: email,
      subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8fafc; border-radius: 12px;">
          <h2 style="color: #1e293b; margin-bottom: 8px;">New message from your portfolio</h2>
          <p style="color: #64748b; margin-bottom: 24px; font-size: 14px;">Someone reached out through your contact form.</p>

          <div style="background: white; border-radius: 8px; padding: 20px; border: 1px solid #e2e8f0; margin-bottom: 16px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; width: 80px;">Name</td>
                <td style="padding: 8px 0; color: #1e293b; font-size: 15px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                <td style="padding: 8px 0; color: #3b82f6; font-size: 15px;"><a href="mailto:${email}" style="color: #3b82f6;">${email}</a></td>
              </tr>
              ${subject ? `
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Subject</td>
                <td style="padding: 8px 0; color: #1e293b; font-size: 15px;">${subject}</td>
              </tr>` : ''}
            </table>
          </div>

          <div style="background: white; border-radius: 8px; padding: 20px; border: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px;">Message</p>
            <p style="color: #1e293b; font-size: 15px; line-height: 1.6; white-space: pre-wrap; margin: 0;">${message}</p>
          </div>

          <p style="color: #94a3b8; font-size: 12px; margin-top: 24px; text-align: center;">
            Sent from escobedojose.dev · Reply directly to this email to respond to ${name}
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
