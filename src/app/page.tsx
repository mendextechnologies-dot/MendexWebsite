import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { 
  ArrowRight, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  Activity,
  Factory,
  Settings,
  Building2,
  Users,
  Search,
  Workflow,
  Sparkles,
  AlertTriangle,
  HeartHandshake
} from "lucide-react";

export default function Home() {
  const products = [
    {
      id: "ops-marketplace",
      title: "OPS Marketplace",
      description: "An intelligent service platform designed to connect organizations with the right experts through curated matching and structured execution workspaces.",
      link: "/products/ops-marketplace",
      imageHint: "marketplace dashboard",
      features: [
        "AI-Driven Expert Matching",
        "Structured Project Workspaces",
        "Outcome-Driven Collaboration"
      ],
      icon: Search
    },
    {
      id: "mendex-one",
      title: "MendexOne CRM",
      description: "Workflow-driven business management for modern sales and operations teams. Automate lead nurturing and close deals faster.",
      link: "/products/mendex-one",
      imageHint: "software dashboard",
      features: [
        "Automated Lead Pipelines",
        "Rule-Based Task Routing",
        "Predictive Deal Analytics"
      ],
      icon: Workflow
    }
  ];

  const services = [
    {
      icon: Cpu,
      title: "Enterprise Software Development",
      desc: "Robust backend architectures, custom integrations, and frontend interfaces tailored to your organization's logic."
    },
    {
      icon: Building2,
      title: "Cloud & Platform Engineering",
      desc: "Architecting cloud-native solutions, CI/CD pipelines, and high-availability Kubernetes deployments."
    },
    {
      icon: ShieldCheck,
      title: "Government Compliance",
      desc: "Complete statutory infrastructure, PSU vendor registration, and bid-readiness enablement for public tenders."
    },
    {
      icon: Settings,
      title: "Engineering & Technical Supply",
      desc: "Specialized power electronic assemblies, custom electrical design, and utility-grade hardware integration."
    }
  ];

  const challenges = [
    {
      title: "Expert Sourcing Friction",
      desc: "Finding verified, high-quality consultants for HR, legal, or technical compliance takes weeks and risks execution failure."
    },
    {
      title: "Fragmented Operations",
      desc: "Relying on scattered spreadsheets and disconnected chat systems leads to communication lag and lost sales leads."
    },
    {
      title: "Strict PSU Tender Hurdles",
      desc: "Entering government or PSU supply chains requires a complex array of statutory filings, licenses, and verified compliance certificates."
    },
    {
      title: "Lacking Execution Transparency",
      desc: "Traditional marketplaces stop at lead exchange, leaving enterprises with zero visibility into final service delivery milestones."
    }
  ];

  const testimonials = [
    {
      quote: "Their deep expertise in system automation and compliance saved us enormous time and potential penalties. Highly recommend Mendex Technologies to any organisation looking for a reliable, tech-first, and genuinely client-focused platform partner.",
      author: "Rajesh Kumar",
      role: "CFO, LegitEdge.com"
    },
    {
      quote: "The Mendex platform integrated with their advisory services is a game-changer for compliance tracking. Their ability to handle system workflows, audits, and government liaison support is outstanding.",
      author: "Anita Sharma",
      role: "HR Director, LegitEdge.com"
    }
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
            Enterprise Software & Statutory Infrastructure
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-8 max-w-5xl mx-auto leading-tight tracking-tight text-slate-900">
            Platform-Driven Solutions <br />
            <span className="text-accent italic font-serif">Engineered for Scale</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            MENDEX Technologies builds enterprise-grade workflow platforms, digital marketplaces, and compliance systems that drive modern business and public sector execution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-base font-semibold bg-accent hover:bg-accent/90 text-white rounded-xl shadow-lg transition-transform hover:-translate-y-0.5" asChild>
              <Link href="/services">Our Services</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base font-semibold border border-slate-300 hover:bg-slate-50 text-slate-800 rounded-xl transition-transform hover:-translate-y-0.5" asChild>
              <Link href="/contact">Request Consultation</Link>
            </Button>
          </div>

          {/* LegitEdge-style Trust Badges Row */}
          <div className="mt-20 pt-10 border-t border-border max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "AI-Driven Discovery", badge: "Expert Matching" },
              { label: "100% Compliant", badge: "Audit-Ready Setup" },
              { label: "SaaS Workflow", badge: "CRM Automation" },
              { label: "Pan-India Coverage", badge: "PSU Enabled" }
            ].map((trust, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-xs font-bold text-accent uppercase tracking-widest mb-1">{trust.label}</span>
                <span className="text-base font-bold text-slate-800">{trust.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Trust Section */}
      <section className="py-8 bg-slate-50 border-b border-border px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Trusted by leading organizations:</span>
          <div className="flex flex-wrap items-center justify-center gap-12 text-slate-500 font-extrabold text-xl sm:text-2xl tracking-wider">
            <span className="hover:text-accent transition-colors">IPR</span>
            <span className="hover:text-accent transition-colors">BARC</span>
            <span className="hover:text-accent transition-colors">SAIL</span>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Core Enterprise Platforms</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Custom technology built to eliminate operational silos and accelerate execution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden border border-slate-100 shadow-xl group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl rounded-3xl bg-background">
                <div className="relative h-64 w-full bg-slate-100">
                  <Image 
                    src={PlaceHolderImages.find(img => img.id === product.id)?.imageUrl || PlaceHolderImages.find(img => img.id === "hero-abstract")?.imageUrl || ""}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint={product.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white flex items-center gap-3">
                    <div className="p-3 bg-accent/90 rounded-2xl">
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight">{product.title}</h3>
                  </div>
                </div>
                <CardContent className="p-8 sm:p-10">
                  <p className="text-muted-foreground mb-8 text-base leading-relaxed min-h-[4.5rem]">
                    {product.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {product.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        {feat}
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-xl h-12 gap-2" asChild>
                    <Link href={product.link}>
                      Explore Product <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 px-4 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold mb-6 border border-red-150">
                <AlertTriangle className="w-3.5 h-3.5" /> High Operational Stakes
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                Challenges Faced by Growing Enterprises
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Indian enterprises navigating high growth, strict compliance codes, and complex vendor pipelines face friction at every operational layer. Checklists alone are no longer enough.
              </p>
              <p className="font-semibold text-slate-800 mb-8">
                MENDEX integrates software capabilities with statutory frameworks to solve these core bottlenecks.
              </p>
              <Button className="bg-accent hover:bg-accent/90 text-white rounded-xl h-12" asChild>
                <Link href="/contact">Book an Operations Audit</Link>
              </Button>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {challenges.map((challenge, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold text-xs mb-6">
                    {idx + 1}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3">{challenge.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{challenge.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Enterprise & Engineering Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our engineering depth spans digital platforms, cloud scalability, and statutory government requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-background p-8 rounded-3xl border border-border hover:border-accent transition-colors shadow-sm hover:shadow-md group">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-3 min-h-[3rem] flex items-center">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button variant="link" className="text-base text-accent hover:text-accent/80 font-bold gap-2" asChild>
              <Link href="/services">
                Explore Full Services Suite <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold mb-4">
              <HeartHandshake className="w-3.5 h-3.5" /> Client Partnership Success
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Trusted by Industry Leaders</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Read how our platforms and statutory setups help enterprises operate securely and efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <div key={idx} className="bg-white p-8 sm:p-10 rounded-[2rem] border border-border shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <p className="text-slate-600 leading-relaxed italic text-sm mb-8">
                  "{test.quote}"
                </p>
                <div>
                  <div className="h-0.5 w-8 bg-accent mb-4" />
                  <h4 className="font-extrabold text-slate-900 text-base">{test.author}</h4>
                  <p className="text-xs text-muted-foreground font-semibold mt-0.5">{test.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 px-4 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-800 opacity-20 -z-10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
            Build Your Enterprise Advantage
          </h2>
          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Partner with MENDEX to deploy audit-ready compliance networks, custom software architectures, and automated business workflows.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="h-14 px-10 text-base font-semibold bg-accent hover:bg-accent/90 text-white rounded-xl gap-2 shadow-lg" asChild>
              <Link href="/contact">Book Consultation <ArrowRight className="w-4 h-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-base font-semibold border-2 border-slate-700 hover:bg-slate-800 text-white rounded-xl" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
