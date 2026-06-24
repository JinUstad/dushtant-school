import Image from "next/image";
import Link from "next/link";
import { BookOpen, Users, Monitor, Trophy, ShieldCheck, Star, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop"
            alt="Happy school children"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-primary/40 mix-blend-multiply" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left pt-20">
          <div className="max-w-3xl">
            <AnimatedSection>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                Building Bright Futures Through <span className="text-accent">Quality Education</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
                Empowering minds from Nursery to Class 8 with modern facilities, experienced faculty, and a holistic approach to learning.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/contact"
                className="bg-accent hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
              >
                Apply Now <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center"
              >
                Contact Us
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection className="relative">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop"
                  alt="Students learning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-primary text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-5xl font-extrabold text-accent mb-2">10+</p>
                <p className="font-semibold text-lg">Years of Excellence</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Welcome to Dr.Ambedkar Modern Public School</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Nurturing Potential, <br />Inspiring Excellence.
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                At Dr.Ambedkar Modern Public School, we believe in providing a balanced education that focuses on both academic brilliance and character building. Our state-of-the-art campus and dedicated educators ensure every child discovers their true potential.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Child-centric learning methodology",
                  "Focus on discipline and moral values",
                  "Comprehensive physical and mental growth",
                  "Safe, secure, and inspiring environment"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <ShieldCheck className="text-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors text-lg">
                Discover Our Story <ArrowRight size={20} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Why Choose Us</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900">
              The Dr.Ambedkar Advantage
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Experienced Teachers", desc: "Highly qualified educators dedicated to student success." },
              { icon: BookOpen, title: "Smart Classrooms", desc: "Interactive digital boards and modern learning tools." },
              { icon: Monitor, title: "Computer Education", desc: "Early introduction to coding and digital literacy." },
              { icon: Trophy, title: "Sports Activities", desc: "Excellent facilities for physical education and sports." },
              { icon: ShieldCheck, title: "Safe Environment", desc: "24/7 CCTV surveillance and secure campus." },
              { icon: Star, title: "Personality Development", desc: "Focus on soft skills, confidence, and leadership." }
            ].map((feature, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <feature.icon size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Happy Students" },
              { number: "25+", label: "Qualified Teachers" },
              { number: "10+", label: "Years Experience" },
              { number: "100%", label: "Student Care" }
            ].map((stat, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <p className="text-4xl md:text-5xl font-extrabold text-accent mb-2">{stat.number}</p>
                <p className="text-lg font-medium text-white/90">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Our Campus</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900">
              World-Class Facilities
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Smart Classes", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop" },
              { title: "Computer Lab", img: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800&auto=format&fit=crop" },
              { title: "Library", img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800&auto=format&fit=crop" },
              { title: "Playground", img: "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?q=80&w=800&auto=format&fit=crop" },
              { title: "Activity Room", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop" },
              { title: "Science Lab", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop" }
            ].map((facility, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="relative h-64 rounded-xl overflow-hidden group cursor-pointer">
                  <Image
                    src={facility.img}
                    alt={facility.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent flex items-end p-6">
                    <h4 className="text-white text-xl font-bold">{facility.title}</h4>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section id="academics" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Academics</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900">
              Programs Offered
            </h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {["Nursery", "LKG", "UKG", "Class 1 to 5", "Class 6 to 8"].map((program, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-white px-8 py-4 rounded-full shadow-md border border-gray-100 text-lg font-bold text-primary hover:bg-primary hover:text-white transition-all cursor-default">
                  {program}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Testimonials</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900">
              What Parents Say
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "The teachers are incredibly supportive. My daughter has shown immense growth in both academics and confidence since joining.", author: "Priya Sharma", role: "Parent of Class 3 Student" },
              { text: "Dr.Ambedkar Modern Public School provides a perfect balance of studies and extra-curricular activities. The facilities are top-notch.", author: "Rahul Verma", role: "Parent of UKG Student" },
              { text: "Best decision we made for our child's education. The focus on moral values alongside modern education is commendable.", author: "Anita Desai", role: "Parent of Class 7 Student" }
            ].map((review, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-gray-50 p-8 rounded-2xl relative border border-gray-100">
                  <div className="text-accent text-5xl absolute top-4 left-6 opacity-30">"</div>
                  <p className="text-gray-700 italic relative z-10 mb-6 mt-4">"{review.text}"</p>
                  <div>
                    <h5 className="font-bold text-gray-900">{review.author}</h5>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Admissions Open for Academic Session 2026-27
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
              Join the Dr.Ambedkar Modern Public School family and give your child the best start to their educational journey.
            </p>
            <Link
              href="/contact"
              className="inline-flex bg-accent hover:bg-yellow-400 text-gray-900 px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-2xl items-center gap-3"
            >
              Enroll Now <ArrowRight size={24} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
