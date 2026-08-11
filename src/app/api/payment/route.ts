import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const response = await fetch('https://kvdb.io/J4r7GKEZhsy5efUJnAeKg2/expired', { cache: 'no-store' });
    let expired = false;
    
    if (response.ok) {
      const text = await response.text();
      expired = text === 'true';
    }
    
    return NextResponse.json({ expired });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read status' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { expired } = body;
    
    if (typeof expired !== 'boolean') {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }
    
    await fetch('https://kvdb.io/J4r7GKEZhsy5efUJnAeKg2/expired', {
      method: 'POST',
      body: String(expired)
    });
    
    return NextResponse.json({ success: true, expired });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update status' }, { status: 500 });
  }
}
