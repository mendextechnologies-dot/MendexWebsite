import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  CheckCircle2, 
  Target, 
  Eye, 
  HeartHandshake, 
  Compass,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export default function AboutPage() {
  const missionItems = [
    "Delivering reliable engineering solutions",
    "Developing application-focused technologies",
    "Solving complex industrial challenges",
    "Supporting modernization and digital transformation",
    "Building long-term customer relationships",
    "Continuously improving engineering capabilities"
  ];

  const philosophy = [
    {
      title: "Innovation",
      desc: "We continuously explore emerging technologies, modern engineering methods, and practical innovations that improve performance, reliability, and efficiency."
    },
    {
      title: "Quality",
      desc: "Every solution is developed through systematic engineering practices, detailed verification, and rigorous testing to ensure dependable performance."
    },
    {
      title: "Integration",
      desc: "Modern industries rely on multiple technologies working together. We integrate electrical engineering, electronics, instrumentation, automation, software, and communication systems into unified engineering solutions."
    },
    {
      title: "Customization",
      desc: "Every industry and every application presents unique challenges. Our solutions are engineered to meet specific operational, technical, and environmental requirements rather than relying on one-size-fits-all approaches."
    },
    {
      title: "Partnership",
      desc: "We work closely with our customers throughout the project lifecycle, providing technical guidance, engineering support, and responsive service from concept through commissioning and beyond."
    }
  ];

  const values = [
    { title: "Engineering Excellence", desc: "We strive for technical accuracy, practical innovation, and reliable execution in every project." },
    { title: "Customer Focus", desc: "Understanding customer requirements and delivering solutions that create long-term value remains our highest priority." },
    { title: "Integrity", desc: "We believe in transparent communication, ethical business practices, and professional accountability." },
    { title: "Innovation", desc: "Continuous learning and technology development enable us to respond to evolving industrial needs." },
    { title: "Collaboration", desc: "Successful engineering is built on teamwork, knowledge sharing, and close collaboration with customers and partners." },
    { title: "Continuous Improvement", desc: "We continuously refine our engineering processes, technical capabilities, and project execution methods to deliver better outcomes." }
  ];

  const industries = [
    "Defence & Aerospace", "Nuclear & Atomic Energy", "Scientific Research Laboratories",
    "Railways & Metro Rail", "Power Generation & Utilities", "Renewable Energy",
    "Manufacturing", "Oil & Gas", "Steel & Metallurgy", "Water & Wastewater",
    "Pharmaceutical & Life Sciences", "Semiconductor & Electronics Manufacturing", "Automotive",
    "Infrastructure Projects", "Educational Institutions", "Public Sector Enterprises"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* About Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-secondary/50 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex flex-wrap gap-2.5 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold border border-accent/20">
                  <HeartHandshake className="w-3.5 h-3.5" /> About Us
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-bold border border-emerald-500/20">
                  <ShieldCheck className="w-3.5 h-3.5" /> ISO 9001:2015 Certified
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-slate-900 tracking-tight leading-tight">
                Engineering Innovation. <br />
                <span className="text-accent italic font-serif">Powering Progress.</span>
              </h1>
              <p className="text-xl text-slate-800 font-semibold mb-8 leading-relaxed">
                Engineering Innovation. Powering Progress. Enabling the Future.
              </p>
              <p className="text-base text-slate-650 leading-relaxed mb-6">
                At Mendex Technology Services LLP, we are committed to delivering intelligent engineering solutions that help industries improve reliability, efficiency, and long-term operational performance. We combine multidisciplinary engineering expertise with practical industrial experience to develop solutions that address today's challenges while preparing organizations for tomorrow's opportunities.
              </p>
              <p className="text-base text-slate-650 leading-relaxed">
                Our capabilities span Power Conversion Solutions, Industrial Automation, Electrical, Electronics & Instrumentation (EE&I) System Integration, Control & Automation Systems, Reverse Engineering, Product Development, Engineering Services, and the supply of critical industrial and scientific components.
              </p>
            </div>
            
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-xl border-8 border-white">
              <Image 
                src={PlaceHolderImages.find(img => img.id === "enterprise-team")?.imageUrl || ""}
                alt="Mendex Team"
                fill
                className="object-cover"
                data-ai-hint="office engineering"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are & Mission / Vision */}
      <section className="py-24 px-4 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Who We Are */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <h2 className="lg:col-span-4 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">Who We Are</h2>
            <div className="lg:col-span-8">
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Mendex Technology Services LLP is an engineering and technology company dedicated to providing integrated solutions across multiple engineering disciplines. Our approach combines technical expertise, innovation, and a strong understanding of industrial applications to deliver solutions that are practical, scalable, and aligned with customer requirements.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-4">
                We believe engineering extends beyond the design of products. It is about understanding operational challenges, applying the right technologies, and delivering systems that create measurable value throughout their lifecycle. By bringing together expertise in electrical engineering, electronics, instrumentation, automation, embedded systems, and power electronics, we help customers simplify complex projects through a single engineering partner.
              </p>
            </div>
          </div>

          <hr className="border-border" />

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-card p-10 rounded-[2.5rem] border border-border flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-8">
                  To design, develop, integrate, and support high-quality engineering solutions that enhance operational efficiency, improve system reliability, and create long-term value for our customers through innovation, technical excellence, and responsible engineering practices.
                </p>
              </div>
              <ul className="space-y-3 pl-2">
                {missionItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-card p-10 rounded-[2.5rem] border border-border flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-8">
                  To become a recognized engineering and technology company known for delivering innovative, reliable, and future-ready solutions that contribute to industrial progress, technological advancement, and sustainable development.
                </p>
              </div>
              <div className="p-6 bg-secondary/30 border border-border rounded-2xl mt-4">
                <p className="text-xs text-slate-500 leading-relaxed">
                  We aspire to build lasting partnerships by combining engineering excellence with practical implementation and customer-focused innovation.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Engineering Philosophy */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold mb-4 border border-accent/20">
              <Compass className="w-3.5 h-3.5" /> Core Principles
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Our Engineering Philosophy</h2>
            <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
              Engineering is at the core of everything we do. Every project begins with understanding the customer's operational objectives, technical requirements, and long-term expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {philosophy.map((item, idx) => (
              <div key={idx} className="bg-card p-8 sm:p-10 rounded-[2rem] border border-border shadow-sm flex flex-col gap-4">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Principle 0{idx + 1}</span>
                <h4 className="font-extrabold text-slate-900 text-xl">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-4 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Core Values</h2>
            <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
              Our values define the way we work and guide every engineering decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="bg-card p-8 rounded-3xl border border-border flex flex-col gap-3 shadow-sm">
                <h4 className="font-bold text-slate-900 text-lg">{val.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 px-4 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Industries We Serve</h2>
            <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto mb-4">
              By understanding the unique challenges of each industry, we develop solutions tailored to specific operational, technical, and regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {industries.map((ind, idx) => (
              <div key={idx} className="bg-card p-4 rounded-2xl border border-border text-center hover:bg-secondary/40 hover:border-accent transition-colors flex items-center justify-center min-h-[4rem] shadow-sm">
                <span className="font-semibold text-slate-700 text-sm">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 px-4 bg-secondary/20 border-t border-border text-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.02] -z-10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight tracking-tight text-slate-900">
            Partner With a Trusted Engineering Leader
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether supporting a new project, upgrading existing infrastructure, integrating advanced technologies, or sourcing mission-critical components, Mendex serves as a trusted engineering partner focused on delivering dependable and future-ready solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="h-14 px-10 text-base font-semibold bg-accent hover:bg-accent/90 text-white rounded-xl gap-2 shadow-lg" asChild>
              <Link href="/contact">Request Consultation <ArrowRight className="w-4 h-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-base font-semibold border-2 border-border bg-white hover:bg-secondary/40 text-slate-800 rounded-xl" asChild>
              <Link href="/services">Our Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
