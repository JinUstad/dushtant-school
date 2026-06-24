import Link from "next/link";
import { MapPin, Phone, Mail, GraduationCap } from "lucide-react";
import { FaFacebookF as Facebook, FaInstagram as Instagram, FaYoutube as Youtube } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand & About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <div className="bg-primary text-white p-2 rounded-lg">
                <GraduationCap size={28} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white leading-tight">
                  Dushtant
                </h2>
                <p className="text-xs text-primary font-semibold tracking-wider uppercase">
                  School
                </p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Building bright futures through quality education, discipline, and comprehensive student development from Nursery to Class 8.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-secondary after:rounded-full">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Academic Programs", href: "/#academics" },
                { name: "Facilities", href: "/#facilities" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-secondary transition-colors text-sm flex items-center gap-2">
                    <span className="text-secondary opacity-50">›</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-secondary after:rounded-full">
              Admissions
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Admission Process", href: "/contact" },
                { name: "Fee Structure", href: "/contact" },
                { name: "Rules & Regulations", href: "#" },
                { name: "Download Prospectus", href: "#" },
                { name: "Apply Online", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-secondary transition-colors text-sm flex items-center gap-2">
                    <span className="text-secondary opacity-50">›</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-secondary after:rounded-full">
              Contact Details
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-gray-400">123 Education Lane, Knowledge City, State - 123456</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={18} className="text-primary shrink-0" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={18} className="text-primary shrink-0" />
                <span className="text-gray-400">info@dushtantschool.edu</span>
              </li>
            </ul>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-white text-sm font-semibold mb-3">Subscribe to Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-gray-800 text-sm text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-primary border border-gray-700"
                />
                <button className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-r-md transition-colors text-sm font-medium">
                  Go
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Dushtant School. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
