import Image from "next/image";
import Link from "next/link";
import { BookOpen, Users, Monitor, Trophy, ShieldCheck, Star, ArrowRight, Play } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { HeroCarousel } from "@/components/HeroCarousel";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen lg:min-h-[800px] flex items-center justify-center py-20 lg:py-32">
        <HeroCarousel />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <AnimatedSection>
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                <span className="text-white/90 text-sm font-semibold tracking-wider uppercase">Welcome to the Future of Education</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                Inspiring <br className="hidden md:block" />
                <span className="text-gradient-light">Brilliant Minds</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-2xl text-blue-50 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                Empowering students with modern facilities, experienced faculty, and a holistic approach to learning that prepares them for tomorrow.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-lg mx-auto pb-8">
              <Link
                href="/contact"
                className="bg-accent hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(245,158,11,0.4)] flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Start Journey <ArrowRight size={20} />
              </Link>
              <Link
                href="#video-tour"
                className="glass-dark hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Play size={20} className="fill-current" /> Watch Video Tour
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section id="video-tour" className="py-24 bg-background relative -mt-20 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="glass-card p-4 md:p-8 rounded-3xl mx-auto max-w-5xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100/50">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://drive.google.com/file/d/1D9GJKnLPDk3BaOXXQz47mRYFJFCy46md/preview"
                  title="School Campus Tour"
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection className="relative">
              <div className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="/5.jpg"
                  alt="Students learning"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60"></div>
              </div>
              <div className="glass-dark absolute -bottom-10 -right-10 text-white p-8 rounded-3xl shadow-2xl hidden md:block border border-white/20 backdrop-blur-xl">
                <p className="text-6xl font-extrabold text-gradient-light mb-2">2+</p>
                <p className="font-semibold text-lg text-blue-100">Years of Excellence</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-3">Welcome to Dr.Ambedkar</h2>
              <h3 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
                Nurturing Potential, <br /><span className="text-gradient">Inspiring Excellence.</span>
              </h3>
              <p className="text-gray-600 text-xl mb-8 leading-relaxed font-light">
                We believe in providing a balanced education that focuses on both academic brilliance and character building. Our state-of-the-art campus and dedicated educators ensure every child discovers their true potential.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Child-centric modern learning methodology",
                  "Focus on discipline and high moral values",
                  "Comprehensive physical and mental growth",
                  "Safe, secure, and inspiring campus environment"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-800 font-medium text-lg">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <ShieldCheck size={18} className="text-secondary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="inline-flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors text-lg group">
                Discover Our Story <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative bg-gray-50/50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-3">Why Choose Us</h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
              The <span className="text-gradient">Advantage</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Expert Faculty", desc: "Highly qualified educators dedicated to student success and personalized attention." },
              { icon: Monitor, title: "Tech Integration", desc: "Early introduction to coding, AI, and comprehensive digital literacy." },
              { icon: Trophy, title: "Sports Excellence", desc: "Premium facilities for physical education and competitive sports." },
              { icon: ShieldCheck, title: "Maximum Security", desc: "24/7 CCTV surveillance, smart ID cards, and a secure campus." },
              { icon: Star, title: "Holistic Development", desc: "Focus on soft skills, confidence, leadership, and arts." }
            ].map((feature, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="glass-card glass-card-hover p-8 group h-full flex flex-col items-start relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-2xl -mr-10 -mt-10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-premium flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:rotate-6 transition-transform">
                    <feature.icon size={28} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 relative z-10">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed relative z-10 font-light">{feature.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-premium">
        <div className="absolute inset-0 bg-[url('/10.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Happy Students" },
              { number: "10+", label: "Expert Teachers" },
              { number: "3+", label: "Years Experience" },
              { number: "100%", label: "Student Care" }
            ].map((stat, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="glass-dark p-8 border-none bg-white/5 hover:bg-white/10 transition-colors rounded-2xl">
                  <p className="text-5xl md:text-6xl font-extrabold text-gradient-light mb-2">{stat.number}</p>
                  <p className="text-lg font-medium text-blue-100 uppercase tracking-wide">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-3">Our Campus</h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
              World-Class <span className="text-gradient">Facilities</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "", img: "/2.jpg" },
              { title: "", img: "/6.jpg" },
              { title: "", img: "/7.jpg" },
              { title: "", img: "/14.jpg" },
              { title: "", img: "/8.jpg" },
              { title: "", img: "/10.jpg" }
            ].map((facility, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="relative h-80 rounded-3xl overflow-hidden group shadow-xl">
                  <Image
                    src={facility.img}
                    alt={facility.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex items-end p-8 opacity-90 group-hover:opacity-100 transition-opacity">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-white text-2xl font-bold mb-2">{facility.title}</h4>
                      <div className="w-12 h-1 bg-accent rounded-full"></div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section id="academics" className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-3">Academics</h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
              Programs <span className="text-gradient">Offered</span>
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {["Nursery", "LKG", "UKG", "Class 1 to 5", "Class 6 to 8"].map((program, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="glass-card glass-card-hover px-8 py-4 rounded-full text-lg font-bold text-primary hover:text-secondary transition-all cursor-default shadow-md">
                  {program}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-3">Testimonials</h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
              What Parents <span className="text-gradient">Say</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "The teachers are incredibly supportive. My daughter has shown immense growth in both academics and confidence since joining.", author: "Priya Sharma", role: "Parent of Class 3 Student" },
              { text: "Dr.Ambedkar Modern Public School provides a perfect balance of studies and extra-curricular activities. The facilities are top-notch.", author: "Rahul Verma", role: "Parent of UKG Student" },
              { text: "Best decision we made for our child's education. The focus on moral values alongside modern education is commendable.", author: "Anita Desai", role: "Parent of Class 7 Student" }
            ].map((review, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="glass-card p-8 h-full relative">
                  <div className="text-secondary/20 text-7xl absolute top-0 left-4 font-serif">"</div>
                  <p className="text-gray-700 italic relative z-10 mb-8 mt-6 leading-relaxed font-light text-lg">"{review.text}"</p>
                  <div>
                    <h5 className="font-extrabold text-gray-900 text-lg">{review.author}</h5>
                    <p className="text-sm text-secondary font-medium">{review.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-premium"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Admissions Open for <br /> <span className="text-gradient-light">Academic Session 2026-27</span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-light">
              Join the Dr.Ambedkar Modern Public School family and give your child the best start to their educational journey.
            </p>
            <Link
              href="/contact"
              className="inline-flex bg-white text-primary px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)] items-center gap-3"
            >
              Enroll Now <ArrowRight size={24} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
