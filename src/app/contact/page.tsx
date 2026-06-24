"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { FaFacebookF as Facebook, FaInstagram as Instagram, FaYoutube as Youtube } from "react-icons/fa";
import { AnimatedSection } from "@/components/AnimatedSection";

const formSchema = z.object({
  studentName: z.string().min(2, "Student name must be at least 2 characters"),
  parentName: z.string().min(2, "Parent name must be at least 2 characters"),
  mobile: z.string().regex(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits"),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  classInterested: z.string().min(1, "Please select a class"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

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
                      <p className="text-gray-600 mt-1">123 Education Lane, Knowledge City, State - 123456</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Phone Number</h3>
                      <p className="text-gray-600 mt-1">+91 98765 43210</p>
                      <p className="text-gray-600">+91 12345 67890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Email Address</h3>
                      <p className="text-gray-600 mt-1">admissions@dushtantschool.edu</p>
                      <p className="text-gray-600">info@dushtantschool.edu</p>
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

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <AnimatedSection delay={0.2}>
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Admission Inquiry</h2>
                <p className="text-gray-600 mb-8">Please fill out the form below and our admission counselor will contact you shortly.</p>
                
                {submitSuccess && (
                  <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-center gap-3">
                    <Send className="text-green-500" />
                    <p className="font-medium">Thank you! Your inquiry has been submitted successfully.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Student Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Student Name *</label>
                      <input
                        {...register("studentName")}
                        type="text"
                        className={`w-full px-4 py-3 rounded-lg border ${errors.studentName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'} focus:outline-none focus:ring-2 transition-shadow bg-gray-50 focus:bg-white`}
                        placeholder="John Doe"
                      />
                      {errors.studentName && <p className="mt-1 text-sm text-red-500">{errors.studentName.message}</p>}
                    </div>
                    
                    {/* Parent Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Parent Name *</label>
                      <input
                        {...register("parentName")}
                        type="text"
                        className={`w-full px-4 py-3 rounded-lg border ${errors.parentName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'} focus:outline-none focus:ring-2 transition-shadow bg-gray-50 focus:bg-white`}
                        placeholder="Mr./Mrs. Doe"
                      />
                      {errors.parentName && <p className="mt-1 text-sm text-red-500">{errors.parentName.message}</p>}
                    </div>
                    
                    {/* Mobile Number */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number *</label>
                      <input
                        {...register("mobile")}
                        type="tel"
                        className={`w-full px-4 py-3 rounded-lg border ${errors.mobile ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'} focus:outline-none focus:ring-2 transition-shadow bg-gray-50 focus:bg-white`}
                        placeholder="9876543210"
                      />
                      {errors.mobile && <p className="mt-1 text-sm text-red-500">{errors.mobile.message}</p>}
                    </div>
                    
                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        {...register("email")}
                        type="email"
                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'} focus:outline-none focus:ring-2 transition-shadow bg-gray-50 focus:bg-white`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                    </div>
                  </div>

                  {/* Class Interested */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Class Interested For *</label>
                    <select
                      {...register("classInterested")}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.classInterested ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'} focus:outline-none focus:ring-2 transition-shadow bg-gray-50 focus:bg-white appearance-none`}
                    >
                      <option value="">Select a class...</option>
                      <option value="nursery">Nursery</option>
                      <option value="lkg">LKG</option>
                      <option value="ukg">UKG</option>
                      <option value="1">Class 1</option>
                      <option value="2">Class 2</option>
                      <option value="3">Class 3</option>
                      <option value="4">Class 4</option>
                      <option value="5">Class 5</option>
                      <option value="6">Class 6</option>
                      <option value="7">Class 7</option>
                      <option value="8">Class 8</option>
                    </select>
                    {errors.classInterested && <p className="mt-1 text-sm text-red-500">{errors.classInterested.message}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message/Query *</label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'} focus:outline-none focus:ring-2 transition-shadow bg-gray-50 focus:bg-white resize-none`}
                      placeholder="Please let us know how we can help you..."
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    ) : (
                      <>Send Message <Send size={20} /></>
                    )}
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Google Maps Integration */}
        <AnimatedSection delay={0.4}>
          <div className="mt-16 rounded-2xl overflow-hidden shadow-md border border-gray-200 h-[400px] w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.114827184407!2d77.2065321685834!3d28.62967198816773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xc46188cbcc01452e!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1714151296718!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
