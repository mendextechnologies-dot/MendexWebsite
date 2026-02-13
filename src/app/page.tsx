
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
  Users
} from "lucide-react";

export default function Home() {
  const products = [
    {
      id: "ops-marketplace",
      title: "OPS Marketplace",
      description: "Intelligent service platform designed to connect organizations with experts through AI-curated matching and structured execution.",
      link: "/products/ops-marketplace",
      imageHint: "marketplace dashboard",
      icon: BrainCircuit
    },
    {
      id: "tender-intelligence",
      title: "AI Tender Intelligence",
      description: "Analyze complex government tenders in minutes. Reduce compliance errors with AI-powered document intelligence.",
      link: "/products/tender-intelligence",
      imageHint: "document analysis",
      icon: FileSearch
    },
    {
      id: "vendor-readiness",
      title: "PSU Vendor Readiness",
      description: "Get vendor-ready before the tender comes. Evaluate your eligibility and close documentation gaps with automated scoring.",
      link: "/products/vendor-readiness",
      imageHint: "compliance dashboard",
      icon: CheckCircle2
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

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 bg-gradient-to-b from-white to-background">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-secondary-foreground text-xs font-semibold mb-8 border border-border">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
            Building Procurement Intelligence Infrastructure
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 max-w-5xl mx-auto leading-tight tracking-tight">
            Engineering <span className="text-primary italic">Intelligent Platforms</span> for Enterprise Scale
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Mendex builds specialized AI-driven ecosystems designed to transform government tenders, procurement, and expert services.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-lg font-medium" asChild>
              <Link href="/products/tender-intelligence">Explore Solutions</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-medium" asChild>
              <Link href="/contact">Talk to Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Procurement & Strategy Ecosystem</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Specialized platforms built to solve complex organizational challenges at every stage of the lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Strategic Services */}
      <section className="py-24 bg-muted/30 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Strategic Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We provide deep technical expertise across critical areas of modern enterprise engineering.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Layers, title: "Enterprise Software Development", desc: "Custom end-to-end systems built for reliability and scale." },
              { icon: Globe, title: "Cloud & Platform Engineering", desc: "Modern cloud-native infrastructure and deployment architectures." },
              { icon: BrainCircuit, title: "AI & Intelligent Systems", desc: "Integrating cognitive capabilities into your core business processes." },
              { icon: BarChart3, title: "Digital Transformation Consulting", desc: "Strategic roadmapping for modernizing legacy enterprise stacks." },
            ].map((service, idx) => (
              <div key={idx} className="bg-background p-8 rounded-2xl border border-border hover:border-accent transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            ))}
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
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Transform Your Strategy?</h2>
            <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
              Whether you're analyzing tenders or preparing vendors — we have the intelligence infrastructure to help you win.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="h-14 px-10 text-lg font-bold" asChild>
                <Link href="/contact">Schedule a Demo</Link>
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
