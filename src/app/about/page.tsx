import Image from "next/image";
import { Target, Heart, Eye, CheckCircle2, Award, BookOpen, Lightbulb, UserCheck } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata = {
  title: "About Us | Dushtant School",
  description: "Learn about Dushtant School's mission, vision, values, and teaching methodology.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2000&auto=format&fit=crop')] opacity-20 mix-blend-overlay object-cover w-full h-full"></div>
        <div className="container mx-auto px-4 relative z-10 text-center pt-10">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">About Us</h1>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
          </AnimatedSection>
        </div>
      </section>

      {/* School Introduction (Mission, Vision, Values) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Our Mission", color: "text-blue-500", bg: "bg-blue-50", desc: "To provide a stimulating learning environment with a technological orientation, which maximizes individual potential and ensures students of all ability levels are well equipped to meet the challenges of education, work, and life." },
              { icon: Eye, title: "Our Vision", color: "text-purple-500", bg: "bg-purple-50", desc: "To be a center of excellence in education that nurtures global citizens with a strong sense of values, integrity, and social responsibility." },
              { icon: Heart, title: "Our Values", color: "text-red-500", bg: "bg-red-50", desc: "Integrity, Respect, Empathy, Excellence, and Continuous Learning form the core of everything we do at Dushtant School." }
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all h-full bg-white relative overflow-hidden group">
                  <div className={`absolute top-0 right-0 w-24 h-24 ${item.bg} rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500`}></div>
                  <item.icon size={40} className={`${item.color} mb-6`} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Principal Message */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[400px] lg:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                  alt="Principal"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <AnimatedSection>
                  <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Principal's Desk</h2>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Dushtant</h3>
                  <div className="space-y-4 text-gray-600 mb-8 leading-relaxed">
                    <p>
                      It gives me immense pleasure to welcome you to Dushtant School. Education is not just about academic excellence; it is about character building and nurturing responsible global citizens.
                    </p>
                    <p>
                      Our dedicated faculty ensures that every child receives the attention they deserve. We believe in creating an environment where learning is a joy and where students are encouraged to explore their potential to the fullest.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Dr. Sarah Johnson</h4>
                    <p className="text-primary font-medium">Principal, Dushtant School</p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">How We Teach</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Teaching Methodology
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              { icon: BookOpen, title: "Activity Based Learning", desc: "We believe children learn best by doing. Our curriculum incorporates hands-on activities that make learning engaging and memorable." },
              { icon: Lightbulb, title: "Digital Learning", desc: "Smart classrooms and digital resources ensure our students are comfortable with technology and can leverage it for learning." },
              { icon: Award, title: "Practical Education", desc: "Bridging the gap between theory and real-world application through experiments, projects, and field trips." },
              { icon: UserCheck, title: "Student-Centered Approach", desc: "Every child is unique. We tailor our teaching methods to accommodate different learning styles and paces." }
            ].map((method, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1} className="flex gap-6">
                <div className="shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <method.icon size={30} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{method.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* School Objectives */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Objectives
            </h3>
            <p className="text-primary-foreground/80">The pillars that define our educational approach.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              "Academic Excellence",
              "Moral Values",
              "Leadership Skills",
              "Creativity Development"
            ].map((obj, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl hover:bg-white/20 transition-all">
                  <CheckCircle2 size={40} className="mx-auto text-accent mb-4" />
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
