"use client";

import { motion } from "framer-motion";
import { MessageCircle, PhoneCall } from "lucide-react";

export function FloatingContactButtons() {
  const contactNumber = "919773667194";
  const defaultMessage = encodeURIComponent("Hello, I would like to know more about the admission process.");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Phone Call Button */}
      <motion.a
        href={`tel:+${contactNumber}`}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl focus:outline-none flex items-center justify-center group relative"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <PhoneCall size={28} />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-medium px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Call us
        </span>
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${contactNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl focus:outline-none flex items-center justify-center group relative"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={28} />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-medium px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Chat with us!
        </span>
      </motion.a>
    </div>
  );
}
