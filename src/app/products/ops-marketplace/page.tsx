
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { AiServiceMatcher } from "@/components/sections/AiServiceMatcher";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { 
  Users, 
  Search, 
  Workflow, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Zap,
  Globe
} from "lucide-react";

export default function OpsMarketplacePage() {
  const productImg = PlaceHolderImages.find(img => img.id === "ops-marketplace");

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Product Hero */}
      <section className="pt-32 pb-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              Product Overview
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8">OPS Marketplace</h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              The first AI-curated enterprise service marketplace. We match your complex engineering requirements with pre-vetted execution teams using advanced matching algorithms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">Get Access <ArrowRight className="w-4 h-4" /></Button>
              <Button size="lg" variant="outline">Schedule Demo</Button>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src={productImg?.imageUrl || ""}
              alt="OPS Marketplace Dashboard"
              fill
              className="object-cover"
              data-ai-hint="marketplace dashboard"
            />
          </div>
        </div>
      </section>

      {/* AI Matcher Section */}
      <AiServiceMatcher />

      {/* Features Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Marketplace Capabilities</h2>
            <p className="text-muted-foreground">Built for enterprise-grade procurement and execution.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Search, 
                title: "Intelligent Sourcing", 
                desc: "Our AI analyzes past project successes to identify the highest probability team for your specific tech stack." 
              },
              { 
                icon: ShieldCheck, 
                title: "Pre-Vetted Ecosystem", 
                desc: "Every provider undergoes a rigorous 4-step technical and operational vetting process before joining the platform." 
              },
              { 
                icon: Workflow, 
                title: "Unified Workspace", 
                desc: "Manage contracting, milestones, code reviews, and payments in one centralized enterprise-ready dashboard." 
              },
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-12 max-w-2xl">Streamline your external engineering operations.</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {[
                  { icon: Zap, value: "40%", label: "Faster Sourcing" },
                  { icon: Users, value: "250+", label: "Vetted Teams" },
                  { icon: Globe, value: "15+", label: "Country Coverage" },
                ].map((stat, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <stat.icon className="w-8 h-8 text-accent" />
                    <span className="text-4xl font-bold">{stat.value}</span>
                    <span className="text-primary-foreground/70 uppercase tracking-widest text-xs font-bold">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
