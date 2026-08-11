import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const JSONBLOB_URL = 'https://jsonblob.com/api/jsonBlob/019ff1b9-faf0-7201-b1c4-8cc029215028';

const expiredHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hosting Expired - Dr.Ambedkar Modern Public School</title>
  <link rel="icon" href="/dr-sahab-img.jpeg">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Inter', sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
      padding: 1rem;
    }
    .card {
      background: rgba(255,255,255,0.08);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      padding: 3rem 2.5rem;
      border-radius: 1.5rem;
      box-shadow: 0 25px 50px rgba(0,0,0,0.4);
      text-align: center;
      max-width: 480px;
      width: 100%;
      border: 1px solid rgba(255,255,255,0.15);
      animation: fadeIn 0.6s ease-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .icon-wrap {
      width: 90px; height: 90px;
      background: rgba(239,68,68,0.15);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      margin: 0 auto 1.5rem;
      box-shadow: 0 0 0 8px rgba(239,68,68,0.1);
    }
    .icon-wrap svg { width: 45px; height: 45px; color: #f87171; }
    h1 { font-size: 2rem; font-weight: 800; color: #fff; margin-bottom: 0.75rem; }
    .subtitle { color: #d1d5db; font-size: 1.1rem; margin-bottom: 0.5rem; }
    .desc { color: #9ca3af; font-size: 0.95rem; margin-bottom: 2rem; line-height: 1.6; }
    .warning-box {
      background: rgba(234,179,8,0.08);
      border: 1px solid rgba(234,179,8,0.25);
      border-radius: 0.75rem;
      padding: 1rem;
      margin-bottom: 1.5rem;
    }
    .warning-box p { color: #fbbf24; font-size: 0.85rem; font-weight: 500; }
    .btn {
      display: block; width: 100%;
      padding: 0.875rem 2rem;
      background: linear-gradient(135deg, #dc2626, #b91c1c);
      color: #fff; font-weight: 600; font-size: 1rem;
      border: none; border-radius: 0.75rem;
      cursor: pointer; text-decoration: none;
      transition: all 0.2s;
      box-shadow: 0 10px 25px rgba(220,38,38,0.3);
    }
    .btn:hover { background: linear-gradient(135deg, #b91c1c, #991b1b); transform: translateY(-1px); }
    .footer { color: #6b7280; font-size: 0.75rem; margin-top: 2rem; }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon-wrap">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
      </svg>
    </div>
    <h1>Hosting Expired!</h1>
    <p class="subtitle">Your website hosting plan has expired.</p>
    <p class="desc">Please recharge your hosting subscription to restore access to the website. Contact your administrator for assistance.</p>
    <div class="warning-box">
      <p>⚠ All website services are temporarily suspended until the hosting is renewed.</p>
    </div>
    <a href="tel:+919773667194" class="btn">📞 Contact to Recharge</a>
  </div>
  <p class="footer">© Dr.Ambedkar Modern Public School</p>
</body>
</html>`;

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Always allow: /payment, /api, static assets
  if (
    pathname.startsWith('/payment') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.match(/\.(jpg|jpeg|png|gif|svg|ico|css|js|woff|woff2|webp)$/)
  ) {
    return NextResponse.next();
  }

  // Check expired status from JSONBlob
  try {
    const response = await fetch(JSONBLOB_URL, { cache: 'no-store' });
    if (response.ok) {
      const data = await response.json();
      if (data.expired === true) {
        return new Response(expiredHTML, {
          status: 200,
          headers: { 'Content-Type': 'text/html; charset=utf-8' },
        });
      }
    }
  } catch (e) {
    // If fetch fails, allow request through
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};
