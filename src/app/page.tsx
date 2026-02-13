
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
  Search,
  PenTool,
  Code2,
  Rocket
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 bg-gradient-to-b from-white to-background">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-secondary-foreground text-xs font-semibold mb-8 border border-border">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
            Now Serving Enterprise Clients Globally
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
            Engineering Enterprise Software, <span className="text-primary italic">Intelligent Platforms</span> & Scalable Digital Products
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Mendex builds enterprise applications, AI-driven platforms, and scalable digital ecosystems designed for business transformation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-lg font-medium" asChild>
              <Link href="/products/ops-marketplace">Explore Products</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-medium" asChild>
              <Link href="/contact">Start a Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Enterprise Products</h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Specialized tools built to scale with your organization's growing complexity.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* OPS Marketplace */}
          <Card className="overflow-hidden border-none shadow-2xl group transition-all hover:-translate-y-2">
            <div className="relative h-64 w-full">
              <Image 
                src={PlaceHolderImages.find(img => img.id === "ops-marketplace")?.imageUrl || ""}
                alt="OPS Marketplace"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                data-ai-hint="marketplace dashboard"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">OPS Marketplace</h3>
              </div>
            </div>
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Intelligent service platform designed to connect organizations with experts through AI-curated matching and structured execution.
              </p>
              <Button variant="link" className="p-0 h-auto text-primary text-lg group-hover:gap-3 transition-all" asChild>
                <Link href="/products/ops-marketplace" className="flex items-center gap-2">
                  Learn more <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* MendexOne CRM */}
          <Card className="overflow-hidden border-none shadow-2xl group transition-all hover:-translate-y-2">
            <div className="relative h-64 w-full">
              <Image 
                src={PlaceHolderImages.find(img => img.id === "mendex-one")?.imageUrl || ""}
                alt="MendexOne CRM"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                data-ai-hint="software workflow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">MendexOne CRM</h3>
              </div>
            </div>
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Modern CRM platform designed for workflow-driven business management with automation and scalable architecture.
              </p>
              <Button variant="link" className="p-0 h-auto text-primary text-lg group-hover:gap-3 transition-all" asChild>
                <Link href="/products/mendex-one" className="flex items-center gap-2">
                  Learn more <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
