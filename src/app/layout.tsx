import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { AdmissionPopup } from "@/components/AdmissionPopup";
import { headers } from "next/headers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr.Ambedkar Modern Public School - Building Bright Futures",
  description: "A modern, professional school website for Nursery to Class 8.",
  icons: {
    icon: '/dr-sahab-img.jpeg',
  },
};

const JSONBLOB_URL = 'https://jsonblob.com/api/jsonBlob/019ff1b9-faf0-7201-b1c4-8cc029215028';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';

  let isExpired = false;
  if (!pathname.startsWith('/payment')) {
    try {
      const response = await fetch(JSONBLOB_URL, { cache: 'no-store' });
      if (response.ok) {
        const data = await response.json();
        isExpired = data.expired === true;
      }
    } catch(e) {
      console.error("Error reading payment status", e);
    }
  }

  if (isExpired && !pathname.startsWith('/payment')) {
    return (
      <html lang="en" className={`${inter.variable} antialiased`}>
        <body className="min-h-screen flex flex-col items-center justify-center font-sans p-4" style={{background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)'}}>
          <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl text-center max-w-lg mx-auto border border-white/20">
            <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-red-500/30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Hosting Expired!</h1>
            <p className="text-gray-300 text-lg mb-3">
              Your website hosting plan has expired.
            </p>
            <p className="text-gray-400 text-base mb-8">
              Please recharge your hosting subscription to restore access to the website. Contact your administrator for assistance.
            </p>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-6">
              <p className="text-yellow-300 text-sm font-medium">⚠ All website services are temporarily suspended until the hosting is renewed.</p>
            </div>
            <a href="tel:+919773667194" className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 w-full shadow-lg shadow-red-500/25">
              📞 Contact to Recharge
            </a>
          </div>
          <p className="text-gray-500 text-xs mt-8">© Dr.Ambedkar Modern Public School</p>
        </body>
      </html>
    );
  }

  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-grow pt-[72px]">
          {children}
        </main>
        <Footer />
        <FloatingContactButtons />
        <AdmissionPopup />
      </body>
    </html>
  );
}
