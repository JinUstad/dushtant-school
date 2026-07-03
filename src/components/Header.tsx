"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, User } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-white shadow-md"
          : "bg-white/90 backdrop-blur-sm"
        }`}
    >
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4 sm:px-6 lg:px-8 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline font-medium">Follow us on:</span>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-blue-200 transition-colors" aria-label="Facebook"><FaFacebook size={16} /></a>
              <a href="#" className="hover:text-pink-300 transition-colors" aria-label="Instagram"><FaInstagram size={16} /></a>
              <a href="#" className="hover:text-red-400 transition-colors" aria-label="YouTube"><FaYoutube size={16} /></a>
            </div>
          </div>
          <div>
            <a href="https://skora-six.vercel.app/login" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-blue-200 transition-colors font-semibold">
              <User size={16} />
              <span>ERP Login</span>
            </a>
          </div>
        </div>
      </div>

      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-primary p-1 rounded-lg group-hover:bg-secondary transition-colors duration-300 w-12 h-12 relative overflow-hidden flex-shrink-0 shadow-sm">
              <Image
                src="/dr-sahab-img.jpeg"
                alt="Dr. Ambedkar"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 leading-tight">
                Dr.Ambedkar Modern Public School
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${pathname === link.href ? "text-primary font-semibold" : "text-gray-600"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-primary hover:bg-secondary text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <Phone size={16} />
              <span>Apply Now</span>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-900 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 bg-primary text-white px-4 py-3 rounded-lg font-medium text-center shadow-md flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                <span>Apply Now</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
