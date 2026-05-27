"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
  Settings, 
  ShieldCheck, 
  Globe, 
  Target, 
  Briefcase, 
  Factory, 
  CheckCircle2, 
  HardHat, 
  Building2, 
  Cpu,
  ArrowRight,
  Upload,
  BatteryCharging,
  Activity,
  Layers,
  BrainCircuit,
  Database,
  BarChart3
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export default function EngineeringSupplyPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === "critical-power");

  const coreSolutions = [
    {
      title: "DC Power Supplies",
      icon: Zap,
      items: [
        "Custom-designed DC systems",
        "Industrial & Laboratory grade",
        "Process-specific power",
        "Application-specific voltage/current"
      ]
    },
    {
      title: "Industrial Rectifiers",
      icon: Factory,
      items: [
        "High-current applications",
        "High-voltage engineering",
        "Demanding industrial environments",
        "Reliable power conversion"
      ]
    },
    {
      title: "Battery Chargers",
      icon: BatteryCharging,
      items: [
        "Industrial backup support",
        "Utility power systems",
        "Critical power backup",
        "Advanced charging algorithms"
      ]
    },
    {
      title: "Pulsed Power Systems",
      icon: Activity,
      items: [
        "Research & Testing solutions",
        "Advanced technical applications",
        "High-energy pulse discharge",
        "Specialized laboratory power"
      ]
    },
    {
      title: "Custom Power Devices",
      icon: Settings,
      items: [
        "Tailor-made electrical systems",
        "Custom power conversion",
        "Special-purpose technical devices",
        "Requirement-based design"
      ]
    },
    {
      title: "Power Components & Protection",
      icon: ShieldCheck,
      items: [
        "Power Electronics Components",
        "HRC & Semiconductor Fuses",
        "Active & Passive components",
        "Industrial Protection products"
      ]
    }
  ];

  const digitalExpertise = [
    { icon: Layers, title: "Enterprise Software", desc: "Scalable backend and frontend systems." },
    { icon: Globe, title: "Cloud Engineering", desc: "Maximum uptime with K8s orchestration." },
    { icon: BrainCircuit, title: "AI & Intelligence", desc: "Generative AI and machine learning." },
    { icon: BarChart3, title: "Digital Strategy", desc: "Modernizing legacy enterprise systems." },
    { icon: Zap, title: "Optimization", desc: "Code-level performance enhancements." },
    { icon: Database, title: "Data Pipelines", desc: "Robust ETL and real-time streaming." },
  ];

  const industries = [
    { icon: Building2, label: "Power Utilities" },
    { icon: Factory, label: "Industrial Manufacturing" },
    { icon: Activity, label: "Research Laboratories" },
    { icon: Target, label: "Electrical Testing Facilities" },
    { icon: Cpu, label: "System Integrators" },
    { icon: Settings, label: "Control Panel Builders" },
    { icon: HardHat, label: "Heavy Electrical Apps" },
    { icon: Briefcase, label: "Maintenance & Support" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                Critical Power Solutions Vertical
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
                Custom Electrical & <span className="text-primary italic">Critical Power Systems</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                MENDEX Technologies specializes in application-specific power systems for industrial, utility, research, and mission-critical environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 text-lg" asChild>
                  <Link href="/contact">Request Custom Quote</Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg gap-2" asChild>
                  <Link href="/contact"><Upload className="w-5 h-5" /> Submit Specifications</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-border border">
              <Image 
                src={heroImage?.imageUrl || ""}
                alt="Critical Infrastructure"
                fill
                className="object-cover"
                data-ai-hint="industrial electronics"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions Grid */}
      <section className="py-24 px-4 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Solutions</h2>
            <p className="text-muted-foreground">Engineering excellence in power electronics and technical supply.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreSolutions.map((solution, idx) => (
              <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-all group">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <solution.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {solution.items.map((item, i) => (
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

      {/* At a Glance Expertise */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Integrated Strategic Capabilities</h2>
            <p className="text-muted-foreground">Complementing hardware engineering with digital ecosystems.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalExpertise.map((item, idx) => (
              <div key={idx} className="bg-background p-8 rounded-2xl border border-border group hover:border-primary transition-colors shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Requirement Support */}
      <section className="py-24 px-4 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-white/5">
              <Settings className="w-64 h-64" />
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Custom Requirement Support</h2>
                <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                  We work with customers based on voltage requirement, current rating, duty cycle, load characteristics, and application-specific design needs.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Thermal & Cooling Analysis",
                    "Environmental Protection",
                    "Complex Load Support",
                    "Special-purpose Devices"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <Button size="lg" variant="secondary" className="h-16 px-10 text-lg font-bold" asChild>
                  <Link href="/contact">Consult Engineering Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industries.map((industry, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-8 rounded-2xl border border-border bg-white hover:border-primary/50 transition-colors shadow-sm">
                <div className="w-16 h-16 bg-muted/30 rounded-full flex items-center justify-center mb-4 text-primary">
                  <industry.icon className="w-8 h-8" />
                </div>
                <span className="text-sm font-bold leading-tight">{industry.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
