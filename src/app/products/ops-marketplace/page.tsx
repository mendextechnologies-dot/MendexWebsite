
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
  Globe,
  Layout,
  Briefcase,
  Target,
  Rocket
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
              AI-Driven Expert Matching & Execution Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8">OPS Marketplace</h1>
            <p className="text-xl text-muted-foreground mb-4 leading-relaxed font-semibold text-primary">
              "From discovery to delivery — one intelligent platform."
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              An intelligent service platform designed to connect organizations with the right experts through curated matching and structured execution workflows. Unlike traditional marketplaces, we focus on outcome-driven collaboration.
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

      {/* Key Capabilities */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Capabilities</h2>
            <p className="text-muted-foreground">Moving from fragmented interactions to structured delivery.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Search, 
                title: "AI-Driven Expert Matching", 
                desc: "Advanced algorithms recommend consultants based on specialization, industry experience, compliance requirements, and performance history." 
              },
              { 
                icon: Layout, 
                title: "Structured Project Workspaces", 
                desc: "Every request becomes a secure workspace with task tracking, document collaboration, and full progress visibility." 
              },
              { 
                icon: Briefcase, 
                title: "Managed Service Execution", 
                desc: "Support for the entire project lifecycle: from requirement capture and expert matching to final delivery tracking." 
              },
              { 
                icon: Sparkles, 
                title: "Curated Opportunity Flow", 
                desc: "Experts receive AI-matched opportunities perfectly aligned with their skills, reducing noise and improving quality." 
              },
              { 
                icon: Workflow, 
                title: "Enterprise-Grade Workflows", 
                desc: "Operational structure through guided workflows, clear milestones, and transparent execution tracking." 
              },
              { 
                icon: ShieldCheck, 
                title: "Operational Excellence", 
                desc: "A focus on controlled exposure and enterprise collaboration rather than just open lead exchanges." 
              },
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It Is For */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Who It Is For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-2xl shadow-sm text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Businesses</h3>
              <p className="text-muted-foreground">Seeking reliable HR, compliance, IT, or operational expertise with vetted results.</p>
            </div>
            <div className="bg-background p-8 rounded-2xl shadow-sm text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Consultants</h3>
              <p className="text-muted-foreground">Experts and partners looking for high-quality, qualified opportunities matched to their niche.</p>
            </div>
            <div className="bg-background p-8 rounded-2xl shadow-sm text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Organizations</h3>
              <p className="text-muted-foreground">Teams needing to manage and scale structured service delivery workflows efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Is Different */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-12 rounded-[3rem] border border-border shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 text-primary/5">
                <Sparkles className="w-32 h-32" />
             </div>
             <h2 className="text-3xl font-bold mb-8">How OPS Marketplace is Different</h2>
             <p className="text-lg text-muted-foreground mb-8">
                Traditional marketplaces focus on simple listings and lead exchanges. We focus on the entire journey from discovery to delivery.
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Intelligent Matching over browsing",
                  "Structured Execution over simple chat",
                  "Controlled Exposure for privacy",
                  "Enterprise-Grade collaboration tools"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center flex-shrink-0">
                      <Zap className="w-3 h-3" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Benefits Statistics */}
      <section className="py-24 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {[
              { icon: Zap, value: "Fast", label: "Discovery" },
              { icon: Layout, value: "Low", label: "Friction" },
              { icon: Sparkles, value: "High", label: "Quality" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <stat.icon className="w-12 h-12 text-accent mb-4" />
                <span className="text-5xl font-bold mb-2">{stat.value}</span>
                <span className="text-primary-foreground/70 uppercase tracking-widest text-sm font-bold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
