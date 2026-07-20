import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  ArrowRight, 
  Cpu, 
  CheckCircle2, 
  Zap, 
  Settings, 
  Sparkles,
  RefreshCw,
  Truck,
  Wrench,
  Layers,
  Lightbulb,
  Radio,
  Sliders,
  ShieldCheck
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
      title: "Control & Automation Systems",
      desc: "Design and integration of Control panels, real-time diagnostics, industrial communications, and legacy controller modernizations.",
      icon: Settings,
      link: "/services/control-automation"
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
    <div className="min-h-screen bg-transparent text-foreground relative">
      {/* SwaComply Background Glowing Orbs */}
      <div className="absolute inset-x-0 top-0 h-[40rem] bg-[radial-gradient(circle_at_12%_20%,rgba(13,148,136,0.08),transparent_35%),radial-gradient(circle_at_88%_22%,rgba(37,99,235,0.06),transparent_30%)] -z-10 pointer-events-none" />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-36 pb-20 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50/70 px-4 py-2 text-sm font-medium text-teal-700">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
            Integrated Engineering & Industrial Solutions
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.05] mx-auto">
            Engineering Tomorrow's <br />
            <span className="block bg-gradient-to-r from-slate-950 via-slate-800 to-slate-500 bg-clip-text text-transparent italic font-serif">
              Technology Today
            </span>
          </h1>
          
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-500">
            Power Conversion &bull; Industrial Automation &bull; System Integration &bull; Reverse Engineering
          </p>
          
          <p className="text-base sm:text-lg leading-relaxed text-slate-655 max-w-2xl mx-auto">
            Mendex Technology Services LLP delivers integrated engineering solutions across Power Conversion, Industrial Automation, EE&I System Integration, Control Systems, and Reverse Engineering.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button size="lg" className="h-11 py-2 rounded-full bg-slate-950 px-8 text-white hover:bg-slate-800 font-semibold shadow hover:shadow-lg transition-all duration-200" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" className="h-11 rounded-full border border-slate-300 bg-white/80 px-8 text-slate-800 hover:bg-slate-100 font-semibold shadow-sm transition-all duration-200" asChild>
              <Link href="/services">Explore Our Solutions</Link>
            </Button>
          </div>

          {/* Stats badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-4">
            <div className="rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-xs shadow-sm backdrop-blur-sm"><span className="font-semibold text-slate-900">Customized</span><span className="ml-1.5 text-slate-500">engineering designs</span></div>
            <div className="rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-xs shadow-sm backdrop-blur-sm"><span className="font-semibold text-slate-900">100%</span><span className="ml-1.5 text-slate-500">validation and testing</span></div>
            <div className="rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-xs shadow-sm backdrop-blur-sm"><span className="font-semibold text-slate-900">7+</span><span className="ml-1.5 text-slate-500">divisions live</span></div>
          </div>
        </div>
      </section>

      {/* Customer Trust Section */}
      <section className="py-8 bg-white/60 border-y border-slate-200 px-4 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">
          <span className="text-xs font-bold text-slate-450 uppercase tracking-widest">Trusted by leading organizations:</span>
          <div className="flex flex-wrap items-center justify-center gap-12 text-slate-400 font-extrabold text-xl sm:text-2xl tracking-wider">
            <span className="hover:text-accent transition-colors">IPR</span>
            <span className="hover:text-accent transition-colors">BARC</span>
            <span className="hover:text-accent transition-colors">SAIL</span>
          </div>
        </div>
      </section>

      {/* About Mendex Section */}
      <section className="py-24 px-4 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Engineering Solutions That Create Lasting Value
              </h2>
              <div className="h-1 w-20 bg-accent mb-8" />
              <p className="text-lg sm:text-xl font-bold text-slate-800 mb-6">
                At Mendex, we believe engineering is about solving problems—not simply supplying products.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <p className="text-slate-600 leading-relaxed text-base">
                Our multidisciplinary team combines expertise in electrical engineering, electronics, instrumentation, automation, embedded systems, and power electronics to develop customized solutions that improve operational performance, enhance reliability, and support long-term growth.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                From concept development and engineering design to system integration, commissioning, modernization, and lifecycle support, we deliver end-to-end engineering solutions tailored to each customer's operational requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-24 px-4 bg-white/60 border-t border-slate-200 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Comprehensive Engineering Solutions</h2>
            <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
              Our core capabilities cover the full spectrum of industrial technology, electrical engineering, and automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((exp, idx) => (
              <Card key={idx} className="border border-slate-200/85 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-[2rem] bg-white/80 backdrop-blur-sm group flex flex-col justify-between">
                <CardContent className="p-8 sm:p-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
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
      <section className="py-24 px-4 bg-transparent border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Industries We Serve</h2>
            <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
              Our engineering solutions support critical operations across a broad range of sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {industries.map((ind, idx) => (
              <div key={idx} className="bg-white/80 p-4 rounded-2xl border border-slate-200 text-center hover:bg-slate-50 hover:border-accent transition-colors flex items-center justify-center min-h-[4rem] shadow-sm backdrop-blur-sm">
                <span className="font-semibold text-slate-700 text-sm">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mendex */}
      <section className="py-24 px-4 bg-white/60 border-t border-slate-200 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Engineering Excellence That Delivers Results</h2>
            <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
              Why leading organizations partner with Mendex for mission-critical project execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] border border-slate-200/80 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
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
      <section className="py-24 px-4 bg-transparent border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Our Engineering Process</h2>
            <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
              A structured approach ensuring quality, reliability, and successful project delivery.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
            {processSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-sm relative group hover:bg-slate-50 transition-colors">
                <span className="text-xs font-bold text-accent uppercase tracking-widest mb-2">Step 0{idx + 1}</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">{step.name}</h4>
                <p className="text-xs text-slate-500">{step.desc}</p>
                
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-200 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Innovation */}
      <section className="py-24 px-4 bg-white/60 border-t border-slate-200 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto bg-white/85 border border-slate-200/90 p-10 sm:p-16 rounded-[3rem] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-accent/5">
            <Lightbulb className="w-48 h-48" />
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-bold mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Innovation-Led Engineering
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Research & Innovation</h2>
            <p className="text-base sm:text-lg text-slate-655 leading-relaxed mb-6">
              Innovation is at the heart of everything we do. We continuously explore new technologies in power electronics, industrial automation, embedded systems, digital control, and intelligent monitoring to develop customized solutions for evolving industrial challenges.
            </p>
            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-semibold">
              Our focus on engineering innovation helps customers improve productivity, optimize performance, and extend the lifecycle of critical assets.
            </p>
          </div>
        </div>
      </section>

      {/* Trusted Engineering Partner */}
      <section className="py-20 bg-transparent border-t border-slate-200 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 tracking-tight text-slate-900">Trusted Engineering Partner</h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Whether you require a custom power conversion system, industrial automation solution, legacy equipment modernization, system integration, or reliable sourcing of critical industrial components, Mendex delivers practical engineering solutions backed by technical expertise and a customer-focused approach.
          </p>
        </div>
      </section>

      {/* Let's Build the Future Together */}
      <section className="py-24 px-4 bg-slate-950 text-white border-t border-slate-850">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 tracking-tight">Let's Build the Future Together</h2>
          <p className="text-lg text-white/95 mb-12 max-w-2xl mx-auto leading-relaxed">
            Partner with Mendex Technology Services LLP to develop reliable, efficient, and future-ready engineering solutions for your next project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" className="h-11 py-2 rounded-full bg-accent hover:bg-accent/90 text-white px-8 font-semibold shadow hover:shadow-lg transition-all duration-200" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                Request a Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-11 rounded-full border-2 border-white bg-transparent hover:bg-white/10 text-white px-8 font-semibold" asChild>
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
