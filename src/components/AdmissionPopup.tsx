"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

export function AdmissionPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      // Check if user has already closed it in this session (optional, keeping it simple for now)
      const hasClosed = sessionStorage.getItem("admissionPopupClosed");
      if (!hasClosed) {
        setIsOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("admissionPopupClosed", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
            onClick={handleClose}
          />
          
          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-white rounded-2xl shadow-2xl z-[70] overflow-hidden"
          >
            <div className="bg-primary p-6 text-white text-center relative">
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl font-bold mb-2">Admissions Open!</h3>
              <p className="text-primary-foreground/90 text-sm">Academic Session 2026-27</p>
            </div>
            
            <div className="p-8 text-center">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Give your child the gift of quality education. Enroll now for Nursery to Class 8. Limited seats available!
              </p>
              
              <div className="flex flex-col gap-3">
                <Link 
                  href="/contact" 
                  onClick={handleClose}
                  className="bg-accent hover:bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors w-full shadow-md"
                >
                  Apply Now
                </Link>
                <button 
                  onClick={handleClose}
                  className="text-gray-500 hover:text-gray-800 font-medium py-2 transition-colors text-sm"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
