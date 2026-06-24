"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GraduationCap, Phone } from "lucide-react";

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-white/90 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary text-white p-2 rounded-lg group-hover:bg-secondary transition-colors duration-300">
              <GraduationCap size={32} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 leading-tight">
                Dr.Ambedkar Modern Public
              </h1>
              <p className="text-xs text-primary font-semibold tracking-wider uppercase">
                School
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === link.href ? "text-primary font-semibold" : "text-gray-600"
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
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    pathname === link.href
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
