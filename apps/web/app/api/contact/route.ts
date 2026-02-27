import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validations'

export async function POST(req: NextRequest) {
  try {
    const data = contactSchema.parse(await req.json())
    console.log('Contact form submission:', data)
    // TODO: Save to DB + send via Resend
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
  }
}
