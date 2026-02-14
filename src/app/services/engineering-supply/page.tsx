"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
  Settings, 
  Cable, 
  ShieldCheck, 
  Globe, 
  Workflow, 
  Target, 
  Briefcase, 
  Factory, 
  FileText, 
  CheckCircle2, 
  HardHat, 
  Truck, 
  Building2, 
  Cpu,
  ArrowRight,
  Upload
} from "lucide-react";
import Link from "next/link";

export default function EngineeringSupplyPage() {
  const supplyCategories = [
    {
      title: "Electrical Components",
      icon: Zap,
      items: [
        "Switchgear Components",
        "Control Panels",
        "Relays & Contactors",
        "Circuit Protection Devices",
        "Industrial Cables"
      ]
    },
    {
      title: "Custom Assemblies",
      icon: Settings,
      items: [
        "Custom Electrical Panels",
        "Fabricated Enclosures",
        "Tender-Specific Assemblies",
        "Site-Specific Configurations"
      ]
    },
    {
      title: "Industrial Equipment",
      icon: Factory,
      items: [
        "Power Distribution Equipment",
        "Industrial Automation Parts",
        "Mechanical-Electrical Integration",
        "Safety & Compliance Equipment"
      ]
    }
  ];

  const steps = [
    { title: "Requirement & BOQ Analysis", desc: "Detailed breakdown of technical Bill of Quantities." },
    { title: "Technical Validation", desc: "Engineering review to ensure spec alignment." },
    { title: "Sourcing / Custom Manufacturing", desc: "Leveraging global networks for specific parts." },
    { title: "Quality Verification", desc: "Rigorous testing and compliance checks." },
    { title: "Delivery & Documentation", desc: "Logistics and full statutory paperwork." }
  ];

  const industries = [
    { icon: Building2, label: "Government & PSU Contractors" },
    { icon: HardHat, label: "EPC Companies" },
    { icon: Factory, label: "Manufacturing Units" },
    { icon: Target, label: "Infrastructure Projects" },
    { icon: Cpu, label: "Industrial Automation Firms" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              Industrial Engineering & Supply Vertical
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
              Custom Electrical & <span className="text-primary italic">Industrial Supply Solutions</span>
            </h1>
            <p className="text-xl font-medium text-foreground/80 mb-6 italic">
              "Engineering-Driven Component Supply for Government, PSU & Industrial Projects."
            </p>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-2xl">
              We supply customized electrical components, assemblies, and industrial equipment as per project specifications. We also support domestic sourcing and international import-export logistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-lg" asChild>
                <Link href="/contact">Request Custom Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg gap-2" asChild>
                <Link href="/contact"><Upload className="w-5 h-5" /> Submit Technical Specification</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Breakdown */}
      <section className="py-24 px-4 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Project-Driven Supply Portfolio</h2>
            <p className="text-muted-foreground">High-specification components for enterprise-scale execution.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supplyCategories.map((cat, idx) => (
              <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-all group">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <cat.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{cat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                        <CheckCircle2 className="w-4 h-4 text-accent/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Import/Export Capability */}
      <section className="py-24 px-4 bg-muted/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl bg-primary/5 p-12 flex items-center justify-center">
             <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white rounded-2xl shadow-sm text-center">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Global Trade</span>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm text-center">
                  <Truck className="w-8 h-8 text-accent mx-auto mb-2" />
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Logistics</span>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm text-center">
                  <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Compliance</span>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm text-center">
                  <Briefcase className="w-8 h-8 text-accent mx-auto mb-2" />
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Sourcing</span>
                </div>
             </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Global Sourcing & Trade Facilitation</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We facilitate import and export of electrical and industrial components as per project requirements. Our team manages documentation, compliance, logistics coordination, and regulatory alignment.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                "IEC Enabled Operations",
                "Custom Duty Compliance",
                "Vendor Sourcing",
                "International Procurement"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="font-semibold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 px-4 bg-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="absolute top-0 right-0 p-8 text-white/5">
            <Workflow className="w-64 h-64" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Built for Government & EPC Execution</h2>
            <p className="text-xl text-primary-foreground/90 mb-12 leading-relaxed">
              This vertical is project-driven, not retail. We integrate our supply chain with our intelligence platforms to support full execution lifecycles.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Tender Support", desc: "Execution support for project-specific supply mandates." },
                { title: "Vendor Readiness", desc: "Ensuring supply chain alignment with PSU requirements." },
                { title: "Compliance Doc", desc: "Detailed statutory documentation for all components." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-xs text-primary-foreground/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Project Supply Process</h2>
          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-full flex items-center justify-center font-bold text-lg border border-border">
                  0{idx + 1}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 px-4 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Industries Served</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {industries.map((industry, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center shadow-sm mb-4 text-primary">
                  <industry.icon className="w-8 h-8" />
                </div>
                <span className="text-sm font-bold leading-tight">{industry.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Need Custom Electrical Supply for Your Project?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="h-14 px-10 text-lg gap-2" asChild>
              <Link href="/contact">Upload BOQ <ArrowRight className="w-5 h-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg" asChild>
              <Link href="/contact">Talk to Engineering Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
