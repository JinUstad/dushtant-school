import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { AdmissionPopup } from "@/components/AdmissionPopup";
import { headers } from "next/headers";
import fs from "fs";
import path from "path";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';

  let isExpired = false;
  try {
    const paymentPath = path.join(process.cwd(), 'payment-status.json');
    if (fs.existsSync(paymentPath)) {
      const data = JSON.parse(fs.readFileSync(paymentPath, 'utf8'));
      isExpired = data.expired === true;
    }
  } catch(e) {
    console.error("Error reading payment status", e);
  }

  if (isExpired && !pathname.startsWith('/payment')) {
    return (
      <html lang="en" className={`${inter.variable} antialiased`}>
        <body className="min-h-screen flex flex-col items-center justify-center bg-gray-50 font-sans p-4">
          <div className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-lg mx-auto border border-gray-100">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Subscription Expired</h1>
            <p className="text-gray-600 text-lg mb-8">Your website subscription has been expired. Recharge now to proceed further and restore access to the website.</p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 w-full cursor-not-allowed opacity-90">
              Contact Administrator
            </button>
          </div>
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
