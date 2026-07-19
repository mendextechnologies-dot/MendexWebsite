import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  ArrowRight, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  Activity,
  Settings,
  Building2,
  Users,
  Search,
  Workflow,
  Sparkles,
  RefreshCw,
  Truck,
  Wrench,
  Layers,
  FileCheck2,
  Lightbulb,
  HeartHandshake
} from "lucide-react";

export default function Home() {
  const expertise = [
    {
      title: "Power Conversion Solutions",
      desc: "Custom AC/DC Power Supplies, Industrial Rectifiers, Battery Chargers, High-Frequency Power Supplies, and Programmable Power Systems.",
      icon: Zap,
      link: "/services/power-conversion"
    },
    {
      title: "Industrial Automation & Control",
      desc: "PLC Programming, SCADA, HMI, Machine Automation, Process Automation, IIoT Integration, and Industrial Networking.",
      icon: Cpu,
      link: "/services/industrial-automation"
    },
    {
      title: "EE&I System Integration",
      desc: "Integrated Electrical, Electronics & Instrumentation systems for industrial, infrastructure, laboratory, and research applications.",
      icon: Layers,
      link: "/services/system-integration"
    },
    {
      title: "Reverse Engineering & Modernization",
      desc: "Legacy system upgrades, PCB redesign, controller migration, obsolescence management, and equipment modernization.",
      icon: RefreshCw,
      link: "/services/reverse-engineering"
    },
    {
      title: "Industrial Components Supply",
      desc: "Supply of electrical, electronic, automation, instrumentation, laboratory, and scientific products from globally recognized manufacturers.",
      icon: Truck,
      link: "/services/components-supply"
    },
    {
      title: "Engineering Services",
      desc: "Consultancy, design, product development, testing, commissioning, technical support, and lifecycle services.",
      icon: Wrench,
      link: "/services/engineering-support"
    }
  ];

  const industries = [
    "Defence & Aerospace", "Nuclear & Atomic Energy", "Research Laboratories",
    "Railways & Metro Rail", "Power Generation & Utilities", "Renewable Energy",
    "Manufacturing", "Oil & Gas", "Steel & Metallurgy", "Water & Wastewater",
    "Pharmaceutical & Life Sciences", "Semiconductor Manufacturing", "Automotive",
    "Infrastructure Projects", "Educational Institutions", "Public Sector Enterprises"
  ];

  const whyChooseUs = [
    {
      title: "Customized Engineering",
      desc: "Every solution is designed around your technical, operational, and commercial requirements."
    },
    {
      title: "Multidisciplinary Expertise",
      desc: "Integrated capabilities across electrical engineering, electronics, automation, instrumentation, and power electronics."
    },
    {
      title: "End-to-End Execution",
      desc: "From concept and design to commissioning and long-term technical support."
    },
    {
      title: "Innovation Driven",
      desc: "Developing practical engineering solutions using modern technologies and industry best practices."
    },
    {
      title: "Quality Focused",
      desc: "Systematic engineering, verification, testing, and documentation throughout every project."
    },
    {
      title: "Long-Term Partnership",
      desc: "Committed to building lasting relationships through technical excellence, responsiveness, and dependable support."
    }
  ];

  const processSteps = [
    { name: "Consultation", desc: "Initial engagement and alignment." },
    { name: "Requirement Analysis", desc: "Detailed engineering analysis." },
    { name: "Engineering Design", desc: "Custom blueprinting & CAD schemas." },
    { name: "Product Dev / Sourcing", desc: "Component procurement or custom PCB design." },
    { name: "System Integration", desc: "EE&I and software assembly." },
    { name: "Testing & Validation", desc: "Rigorous factory testing & safety check." },
    { name: "Commissioning", desc: "On-site installation & operations rollout." },
    { name: "Lifecycle Support", desc: "Obsolescence and SLA support." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 bg-gradient-to-b from-white to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-xs font-bold mb-8 border border-accent/20">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
            Mendex Technology Services LLP
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-8 max-w-5xl mx-auto leading-tight tracking-tight text-slate-900">
            Engineering Tomorrow's <br />
            <span className="text-accent italic font-serif">Technology Today</span>
          </h1>
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-6 max-w-3xl mx-auto">
            Power Conversion &bull; Industrial Automation &bull; System Integration &bull; Reverse Engineering &bull; Industrial Supply
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Innovative engineering solutions that power industries, modernize infrastructure, and enable technological advancement.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-base font-semibold bg-accent hover:bg-accent/90 text-white rounded-xl shadow-lg transition-transform hover:-translate-y-0.5" asChild>
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base font-semibold border border-slate-300 hover:bg-slate-50 text-slate-800 rounded-xl transition-transform hover:-translate-y-0.5" asChild>
              <Link href="/services">Explore Our Solutions</Link>
            </Button>
          </div>

          <div className="mt-16 max-w-4xl mx-auto text-left bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[2rem] border border-border shadow-sm">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
              Mendex Technology Services LLP is an engineering and technology company delivering integrated solutions across Power Conversion, Industrial Automation, Electrical, Electronics & Instrumentation (EE&I) System Integration, Control Systems, Reverse Engineering, Product Development, and the supply of critical industrial components.
            </p>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-semibold text-slate-900 border-l-4 border-accent pl-4">
              We work with industries, research organizations, government institutions, infrastructure projects, and manufacturing facilities to solve complex engineering challenges through innovation, technical expertise, and reliable execution.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Trust Section */}
      <section className="py-8 bg-slate-50 border-y border-border px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Trusted by leading organizations:</span>
          <div className="flex flex-wrap items-center justify-center gap-12 text-slate-500 font-extrabold text-xl sm:text-2xl tracking-wider">
            <span className="hover:text-accent transition-colors">IPR</span>
            <span className="hover:text-accent transition-colors">BARC</span>
            <span className="hover:text-accent transition-colors">SAIL</span>
          </div>
        </div>
      </section>

      {/* About Mendex Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Engineering Solutions That Create Lasting Value
              </h2>
              <div className="h-1 w-20 bg-accent mb-8" />
              <p className="text-xl font-bold text-slate-800 mb-6">
                At Mendex, we believe engineering is about solving problems—not simply supplying products.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <p className="text-slate-650 leading-relaxed text-base">
                Our multidisciplinary team combines expertise in electrical engineering, electronics, instrumentation, automation, embedded systems, and power electronics to develop customized solutions that improve operational performance, enhance reliability, and support long-term growth.
              </p>
              <p className="text-slate-655 leading-relaxed text-base">
                From concept development and engineering design to system integration, commissioning, modernization, and lifecycle support, we deliver end-to-end engineering solutions tailored to each customer's operational requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-24 px-4 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Comprehensive Engineering Solutions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our core capabilities cover the full spectrum of industrial technology, electrical engineering, and automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((exp, idx) => (
              <Card key={idx} className="border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-[2rem] bg-white group flex flex-col justify-between">
                <CardContent className="p-8 sm:p-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                      <exp.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{exp.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-8">{exp.desc}</p>
                  </div>
                  <Button variant="link" className="p-0 h-auto text-accent hover:text-accent/80 font-bold gap-2 self-start" asChild>
                    <Link href={exp.link}>
                      Explore Solution <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 px-4 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Industries We Serve</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our engineering solutions support critical operations across a broad range of sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {industries.map((ind, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-border text-center hover:bg-slate-100 hover:border-slate-300 transition-colors flex items-center justify-center min-h-[4rem]">
                <span className="font-semibold text-slate-800 text-sm">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mendex */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Engineering Excellence That Delivers Results</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Why leading organizations partner with Mendex for mission-critical project execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-border shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/15 text-accent flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed pl-11">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Our Engineering Process</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              A structured approach ensuring quality, reliability, and successful project delivery.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
            {processSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm relative group hover:bg-slate-100 transition-colors">
                <span className="text-xs font-bold text-accent uppercase tracking-widest mb-2">Step 0{idx + 1}</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">{step.name}</h4>
                <p className="text-xs text-slate-500">{step.desc}</p>
                
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Innovation */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-5xl mx-auto bg-white border border-border p-10 sm:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-primary/5">
            <Lightbulb className="w-48 h-48" />
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Innovation-Led Engineering
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Research & Innovation</h2>
            <p className="text-lg text-slate-650 leading-relaxed mb-6">
              Innovation is at the heart of everything we do. We continuously explore new technologies in power electronics, industrial automation, embedded systems, digital control, and intelligent monitoring to develop customized solutions for evolving industrial challenges.
            </p>
            <p className="text-lg text-slate-655 leading-relaxed font-semibold text-slate-900">
              Our focus on engineering innovation helps customers improve productivity, optimize performance, and extend the lifecycle of critical assets.
            </p>
          </div>
        </div>
      </section>

      {/* Trusted Engineering Partner */}
      <section className="py-20 bg-slate-900 text-white text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-800 opacity-20 -z-10" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 tracking-tight">Trusted Engineering Partner</h2>
          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Whether you require a custom power conversion system, industrial automation solution, legacy equipment modernization, system integration, or reliable sourcing of critical industrial components, Mendex delivers practical engineering solutions backed by technical expertise and a customer-focused approach.
          </p>
        </div>
      </section>

      {/* Let's Build the Future Together */}
      <section className="py-24 px-4 bg-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 tracking-tight">Let's Build the Future Together</h2>
          <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Partner with Mendex Technology Services LLP to develop reliable, efficient, and future-ready engineering solutions for your next project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" className="h-14 px-10 text-base font-semibold bg-slate-900 hover:bg-slate-800 text-white rounded-xl shadow-lg" asChild>
              <Link href="/contact">Request a Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-base font-semibold border-2 border-white hover:bg-white/10 text-white rounded-xl" asChild>
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
