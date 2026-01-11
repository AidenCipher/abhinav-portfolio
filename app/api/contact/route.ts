import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // In a production environment, you would send an email here
    // For example, using Resend, SendGrid, or another email service
    // This is a placeholder that returns success
    
    // Example integration (commented out):
    // await sendEmail({
    //   to: process.env.CONTACT_EMAIL,
    //   from: email,
    //   subject: `Contact Form: ${subject}`,
    //   text: `From: ${name} (${email})\n\n${message}`,
    // })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
