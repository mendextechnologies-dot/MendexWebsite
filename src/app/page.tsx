
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { 
  ArrowRight, 
  Layers, 
  Cpu, 
  BrainCircuit, 
  BarChart3, 
  Globe,
  Sparkles,
  ShieldCheck,
  FileSearch,
  CheckCircle2,
  Users,
  Zap,
  Activity,
  Database
} from "lucide-react";

export default function Home() {
  const products = [
    {
      id: "critical-power",
      title: "Critical Power Solutions",
      description: "Custom-built DC power systems, industrial rectifiers, and specialized electrical devices engineered for precision and reliability.",
      link: "/services/engineering-supply",
      imageHint: "industrial power",
      icon: Zap
    },
    {
      id: "tender-intelligence",
      title: "AI Tender Intelligence",
      description: "Analyze complex government tenders in minutes. Reduce compliance errors with AI-powered document intelligence.",
      link: "/products/tender-intelligence",
      imageHint: "document intelligence",
      icon: FileSearch
    },
    {
      id: "mendex-one",
      title: "MendexOne CRM",
      description: "Modern CRM platform designed for workflow-driven business management with automation and scalable architecture.",
      link: "/products/mendex-one",
      imageHint: "software workflow",
      icon: Layers
    },
    {
      id: "mendex-one-hrms",
      title: "MendexOne HRMS",
      description: "Modern human resource management platform designed to simplify employee operations and automate HR workflows.",
      link: "/products/mendex-one-hrms",
      imageHint: "hr dashboard",
      icon: Users
    }
  ];

  const coreExpertise = [
    { 
      icon: Layers, 
      title: "Enterprise Software Development", 
      desc: "Architecting and building scalable backend systems and high-performance frontend applications." 
    },
    { 
      icon: Globe, 
      title: "Cloud & Platform Engineering", 
      desc: "Infrastructure as Code, Kubernetes orchestration, and multi-cloud strategies for maximum uptime." 
    },
    { 
      icon: BrainCircuit, 
      title: "AI & Intelligent Systems", 
      desc: "Implementation of Generative AI, machine learning pipelines, and intelligent automation." 
    },
    { 
      icon: BarChart3, 
      title: "Digital Transformation", 
      desc: "Modernizing legacy systems and migrating to cloud-native architectures for enterprise scale." 
    },
    { 
      icon: Zap, 
      title: "Performance Optimization", 
      desc: "Drastic latency reduction for critical business paths through code-level optimization." 
    },
    { 
      icon: Database, 
      title: "Data Engineering", 
      desc: "Building robust ETL pipelines and real-time streaming architectures for large-scale data." 
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 bg-gradient-to-b from-white to-background">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-secondary-foreground text-xs font-semibold mb-8 border border-border">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
            Where Power Meets Precision
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 max-w-5xl mx-auto leading-tight tracking-tight">
            Engineering <span className="text-primary italic">Critical Infrastructure</span> for Enterprise Scale
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            MENDEX Technologies builds specialized power systems and AI-driven ecosystems designed to transform industrial operations and procurement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-lg font-medium" asChild>
              <Link href="/services/engineering-supply">Power Solutions</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-medium" asChild>
              <Link href="/products/tender-intelligence">Intelligence Platforms</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Ecosystem Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Engineering & Strategy Ecosystem</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Specialized solutions built to solve complex organizational challenges at the intersection of power and intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border-none shadow-2xl group transition-all hover:-translate-y-2">
              <div className="relative h-64 w-full">
                <Image 
                  src={PlaceHolderImages.find(img => img.id === product.id)?.imageUrl || ""}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  data-ai-hint={product.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white flex items-center gap-3">
                  <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                    <product.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">{product.title}</h3>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed min-h-[5rem]">
                  {product.description}
                </p>
                <Button variant="link" className="p-0 h-auto text-primary text-lg group-hover:gap-3 transition-all" asChild>
                  <Link href={product.link} className="flex items-center gap-2">
                    Learn more <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Core Expertise Summary - Expanded */}
      <section className="py-24 bg-muted/30 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Strategic Digital Capabilities</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Deep technical capability across the entire stack of modern enterprise computing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreExpertise.map((service, idx) => (
              <div key={idx} className="bg-background p-8 rounded-2xl border border-border hover:border-accent transition-colors shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Focus Brief */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src={PlaceHolderImages.find(img => img.id === "critical-power")?.imageUrl || ""}
                alt="Power Infrastructure"
                fill
                className="object-cover"
                data-ai-hint="industrial power"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Engineering-Focused Approach</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We understand that every application has unique electrical, thermal, control, and operational requirements. MENDEX specializes in high current, high voltage, and application-oriented power systems.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "High Current & High Voltage Expertise",
                  "Custom Requirement Support",
                  "Reliable Technical Supply",
                  "Solution-Oriented Engineering"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button size="lg" asChild>
                <Link href="/services/engineering-supply">Explore Power Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-white/5">
             <Sparkles className="w-64 h-64" />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Built for Performance. Delivered with Precision.</h2>
            <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
              From high-voltage power systems to AI-driven strategy — we build the infrastructure you need to win.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="h-14 px-10 text-lg font-bold" asChild>
                <Link href="/contact">Get Technical Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg font-bold bg-white/10 border-white/20 hover:bg-white/20 text-white" asChild>
                <Link href="/contact">Talk to Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
