import { NextRequest, NextResponse } from 'next/server'
import { quoteSchema } from '@/lib/validations'

export async function POST(req: NextRequest) {
  try {
    const data = quoteSchema.parse(await req.json())
    console.log('Quote request:', data)
    // TODO: Save to DB + send via Resend
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
  }
}
