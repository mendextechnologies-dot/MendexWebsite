
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
  Upload,
  BatteryCharging,
  Activity,
  Box
} from "lucide-react";
import Link from "next/link";

export default function EngineeringSupplyPage() {
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
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              Critical Power Solutions Vertical
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
              Custom Electrical & <span className="text-primary italic">Critical Power Systems</span>
            </h1>
            <p className="text-xl font-medium text-foreground/80 mb-6 italic">
              "Where Power Meets Precision — Built for performance, designed for reliability."
            </p>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-2xl">
              MENDEX Technologies specializes in application-specific power systems for industrial, utility, research, and mission-critical environments.
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

      {/* Custom Requirement Support */}
      <section className="py-24 px-4 bg-muted/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl bg-primary/5 p-12 flex items-center justify-center">
             <div className="space-y-6 text-center">
                <div className="inline-flex p-4 bg-white rounded-2xl shadow-sm">
                   <Settings className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Custom Requirement Support</h3>
                <p className="text-sm text-muted-foreground max-w-sm">
                  We work with customers based on voltage, current, duty cycle, load characteristics, and installation environment.
                </p>
             </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Solution-Oriented Engineering</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Whether your requirement involves a complete power system, a special-purpose electrical device, or a critical replacement component, MENDEX Technologies is equipped to support your application.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Voltage & Current Specific Design",
                "Thermal & Cooling Analysis",
                "Complex Load Characteristics",
                "Environmental Protection Specs"
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

      {/* Industries Served */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industries.map((industry, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 bg-muted/30 rounded-full flex items-center justify-center mb-4 text-primary">
                  <industry.icon className="w-8 h-8" />
                </div>
                <span className="text-sm font-bold leading-tight">{industry.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 text-center bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Power Your Infrastructure?</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Speak to our engineering team about your specific power and technical supply needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="h-14 px-10 text-lg gap-2" asChild>
              <Link href="/contact">Request Technical Quote <ArrowRight className="w-5 h-5" /></Link>
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
