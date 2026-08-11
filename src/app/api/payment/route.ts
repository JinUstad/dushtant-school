import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const JSONBLOB_URL = 'https://jsonblob.com/api/jsonBlob/019ff1b9-faf0-7201-b1c4-8cc029215028';

export async function GET() {
  try {
    const response = await fetch(JSONBLOB_URL, { cache: 'no-store' });
    let expired = false;
    
    if (response.ok) {
      const data = await response.json();
      expired = data.expired === true;
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
    
    const updateResponse = await fetch(JSONBLOB_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ expired })
    });

    if (!updateResponse.ok) {
      return NextResponse.json({ error: 'Failed to save to remote storage' }, { status: 500 });
    }
    
    return NextResponse.json({ success: true, expired });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update status' }, { status: 500 });
  }
}
