import Image from "next/image";
import { Target, Heart, Eye, CheckCircle2, Award, BookOpen, Lightbulb, UserCheck, Play } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata = {
  title: "About Us | Dr.Ambedkar Modern Public School",
  description: "Learn about Dr.Ambedkar Modern Public School's mission, vision, values, and teaching methodology.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Page Header */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-premium"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2000&auto=format&fit=crop')] opacity-20 mix-blend-overlay object-cover w-full h-full"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 text-center pt-10">
          <AnimatedSection>
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
              <span className="text-white/90 text-sm font-semibold tracking-wider uppercase">Our Story</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">About <span className="text-gradient-light">Us</span></h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
              Discover our commitment to excellence, our rich history, and the values that drive us forward every day.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* School Introduction (Mission, Vision, Values) -----*/}
      <section className="py-24 bg-background relative -mt-10 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Our Mission", color: "from-blue-500 to-cyan-400", desc: "To provide a stimulating learning environment with a technological orientation, which maximizes individual potential and ensures students are well equipped to meet the challenges of education, work, and life." },
              { icon: Eye, title: "Our Vision", color: "from-purple-500 to-pink-500", desc: "To be a center of excellence in education that nurtures global citizens with a strong sense of values, integrity, and social responsibility." },
              { icon: Heart, title: "Our Values", color: "from-red-500 to-orange-400", desc: "Integrity, Respect, Empathy, Excellence, and Continuous Learning form the core of everything we do at Dr.Ambedkar Modern Public School." }
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="glass-card glass-card-hover p-10 h-full relative overflow-hidden group">
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${item.color} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-8 shadow-lg transform group-hover:scale-110 transition-transform`}>
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light text-lg">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Video Presentation & Principal Message */}
      <section className="py-24 bg-gray-50/50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <AnimatedSection>
              <div className="glass-card p-4 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=0&controls=1&rel=0"
                    title="Message from Principal"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="flex flex-col justify-center">
              <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-3">Principal's Desk</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                A Message from our <br /><span className="text-gradient">Leadership</span>
              </h3>
              <div className="space-y-6 text-gray-600 mb-10 text-lg font-light leading-relaxed">
                <p>
                  "It gives me immense pleasure to welcome you to Dr.Ambedkar Modern Public School. Education is not just about academic excellence; it is about character building and nurturing responsible global citizens."
                </p>
                <p>
                  "Our dedicated faculty ensures that every child receives the attention they deserve. We believe in creating an environment where learning is a joy and where students are encouraged to explore their potential to the fullest."
                </p>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full overflow-hidden relative shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
                    alt="Principal"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-900 text-xl">Dr. Sarah Johnson</h4>
                  <p className="text-secondary font-medium">Principal, DAMPS</p>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-3">How We Teach</h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
              Our <span className="text-gradient">Methodology</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: BookOpen, title: "Activity Based Learning", desc: "We believe children learn best by doing. Our curriculum incorporates hands-on activities that make learning engaging and memorable." },
              { icon: Lightbulb, title: "Digital Learning", desc: "Smart classrooms and digital resources ensure our students are comfortable with technology and can leverage it for learning." },
              { icon: Award, title: "Practical Education", desc: "Bridging the gap between theory and real-world application through experiments, projects, and field trips." },
              { icon: UserCheck, title: "Student-Centered Approach", desc: "Every child is unique. We tailor our teaching methods to accommodate different learning styles and paces." }
            ].map((method, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="glass-card glass-card-hover p-8 flex gap-6 h-full items-start">
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center text-secondary shadow-sm">
                    <method.icon size={30} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">{method.title}</h4>
                    <p className="text-gray-600 leading-relaxed font-light">{method.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* School Objectives */}
      <section className="py-24 bg-gradient-premium relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Our Core <span className="text-gradient-light">Objectives</span>
            </h3>
            <p className="text-xl text-blue-100 font-light">The pillars that define our educational approach.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              "Academic Excellence",
              "Moral Values",
              "Leadership Skills",
              "Creativity Development"
            ].map((obj, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="glass-dark p-10 h-full flex flex-col items-center justify-center hover:bg-white/10 transition-colors cursor-default group">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={32} className="text-accent" />
                  </div>
                  <h4 className="text-xl font-bold text-white">{obj}</h4>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
