import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const paymentPath = path.join(process.cwd(), 'payment-status.json');
    let expired = false;
    
    if (fs.existsSync(paymentPath)) {
      const data = JSON.parse(fs.readFileSync(paymentPath, 'utf8'));
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
    
    const paymentPath = path.join(process.cwd(), 'payment-status.json');
    fs.writeFileSync(paymentPath, JSON.stringify({ expired }, null, 2), 'utf8');
    
    return NextResponse.json({ success: true, expired });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update status' }, { status: 500 });
  }
}
