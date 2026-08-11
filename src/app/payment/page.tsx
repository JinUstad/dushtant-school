"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const [isExpired, setIsExpired] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch('/api/payment');
        const data = await response.json();
        setIsExpired(data.expired);
      } catch (error) {
        console.error("Error fetching payment status:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchStatus();
  }, []);

  const handleToggle = async () => {
    setSaving(true);
    const newValue = !isExpired;
    
    try {
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ expired: newValue }),
      });
      
      if (response.ok) {
        setIsExpired(newValue);
        // Refresh router so layout refetches the updated state if needed
        router.refresh();
      }
    } catch (error) {
      console.error("Error updating payment status:", error);
      alert("Failed to update status");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-8 py-6">
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Site Access Control
          </h1>
          <p className="text-slate-300 mt-2 text-sm">
            Manage the global visibility of the website. If the site is disabled, visitors will see a "Subscription Expired" message.
          </p>
        </div>
        
        <div className="p-8">
          <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-slate-50 rounded-xl border border-slate-200">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Website Visibility Status
              </h3>
              <p className="text-gray-500 text-sm max-w-md">
                Currently, the website is <strong className={isExpired ? "text-red-600" : "text-green-600"}>{isExpired ? "DISABLED" : "ENABLED"}</strong>.
                {isExpired 
                  ? " Visitors cannot access the main site content." 
                  : " Visitors can access the site normally."}
              </p>
            </div>
            
            <button
              onClick={handleToggle}
              disabled={saving}
              className={`relative inline-flex h-10 w-20 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                isExpired ? 'bg-red-500' : 'bg-green-500'
              } ${saving ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <span
                className={`inline-block h-8 w-8 transform rounded-full bg-white transition-transform ${
                  isExpired ? 'translate-x-11' : 'translate-x-1'
                } shadow-sm`}
              />
            </button>
          </div>
          
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  <strong>Note:</strong> When you toggle the switch to the right (red), the website will instantly show the "Subscription Expired" screen to all visitors except on this /payment URL. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
