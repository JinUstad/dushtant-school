"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaFacebookF as Facebook, FaInstagram as Instagram, FaYoutube as Youtube } from "react-icons/fa";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50 pb-20">
      {/* Page Header */}
      <section className="relative h-[30vh] min-h-[250px] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2000&auto=format&fit=crop')] opacity-20 mix-blend-overlay object-cover w-full h-full"></div>
        <div className="container mx-auto px-4 relative z-10 text-center pt-10">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
            <p className="text-white/80 mt-4 max-w-2xl mx-auto">
              We'd love to hear from you. Reach out for admissions and inquiries.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <AnimatedSection>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Our Address</h3>
                      <p className="text-gray-600 mt-1">Duryai, Uttar Pradesh 203207</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Phone Number</h3>
                      <p className="text-gray-600 mt-1">+91 9773667194</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Email Address</h3>
                      <p className="text-gray-600 mt-1">admissions@ambedkarschool.edu</p>
                      <p className="text-gray-600">info@ambedkarschool.edu</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Working Hours</h3>
                      <p className="text-gray-600 mt-1">Mon - Sat: 8:00 AM - 4:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
                      <Youtube size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Location Map */}
          <div className="lg:col-span-2">
            <AnimatedSection delay={0.2}>
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden h-full min-h-[500px] flex flex-col">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Location</h2>
                <p className="text-gray-600 mb-8">Visit our campus to experience the environment we offer to our students.</p>
                
                <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200 flex-grow w-full relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d220.0031999224181!2d77.50264347726483!3d28.635378398519144!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ced90fa86c8b5%3A0xf75ffcd1d747b429!2sDr.Ambedkar%20Modern%20Public%20School!5e1!3m2!1sen!2sin!4v1782291764345!5m2!1sen!2sin" 
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="strict-origin-when-cross-origin"
                  ></iframe>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
