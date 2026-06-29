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
  BatteryCharging,
  Settings,
  Building2
} from "lucide-react";

export default function Home() {
  const products = [
    {
      id: "dc-power-supplies",
      title: "DC Power Supplies",
      description: "Custom-designed industrial & laboratory grade DC systems engineered for process-specific power and precision output.",
      link: "/services/engineering-supply",
      imageHint: "industrial electronics",
      icon: Zap
    },
    {
      id: "industrial-rectifiers",
      title: "Industrial Rectifiers",
      description: "High-current and high-voltage power conversion systems designed to perform reliably in demanding industrial environments.",
      link: "/services/engineering-supply",
      imageHint: "industrial electronics",
      icon: Factory
    },
    {
      id: "battery-chargers",
      title: "Battery Chargers",
      description: "Utility power systems and critical backup chargers using advanced charging algorithms for industrial continuity.",
      link: "/services/engineering-supply",
      imageHint: "industrial electronics",
      icon: BatteryCharging
    },
    {
      id: "pulsed-power-systems",
      title: "Pulsed Power Systems",
      description: "High-energy pulse discharge and laboratory power systems designed for advanced research and electrical testing.",
      link: "/services/engineering-supply",
      imageHint: "industrial electronics",
      icon: Activity
    },
    {
      id: "custom-power-devices",
      title: "Custom Power Devices",
      description: "Tailor-made electrical conversion systems designed to meet customer-specific voltage, current, and duty cycle requirements.",
      link: "/services/engineering-supply",
      imageHint: "industrial electronics",
      icon: Settings
    },
    {
      id: "power-components-protection",
      title: "Components & Protection",
      description: "Industrial grade power electronics, high-rupture capacity (HRC) fuses, and semiconductor protection products.",
      link: "/services/engineering-supply",
      imageHint: "industrial electronics",
      icon: ShieldCheck
    }
  ];

  const coreExpertise = [
    { 
      icon: Settings, 
      title: "Custom Design & Engineering", 
      desc: "Tailored power conversion systems matching unique voltage, current, and load profiles." 
    },
    { 
      icon: Cpu, 
      title: "Thermal & Cooling Analysis", 
      desc: "Advanced thermal management designs ensuring operational stability and safety under load." 
    },
    { 
      icon: ShieldCheck, 
      title: "Industrial Protection Standards", 
      desc: "Built-in protection schemas including HRC fuses, active semiconductor safeguards, and cooling monitors." 
    },
    { 
      icon: Zap, 
      title: "High Current & High Voltage", 
      desc: "Deep engineering expertise in high current rectifiers and high-energy laboratory pulsed power." 
    },
    { 
      icon: Activity, 
      title: "Testing & Validation", 
      desc: "Rigorous factory testing of all custom electrical assemblies before deployment to ensure reliability." 
    },
    { 
      icon: Building2, 
      title: "Utility & Industrial Grade", 
      desc: "Heavy-duty cabinets and enclosures designed to withstand harsh field environments." 
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
            MENDEX Technologies builds specialized power systems and custom electrical devices designed to power demanding industrial operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-lg font-medium" asChild>
              <Link href="/services/engineering-supply">Power Solutions</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-medium" asChild>
              <Link href="/contact">Request Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Critical Power & Electrical Ecosystem</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Specialized engineering solutions built to solve complex power requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border-none shadow-2xl group transition-all hover:-translate-y-2">
              <div className="relative h-64 w-full bg-muted">
                <Image 
                  src={PlaceHolderImages.find(img => img.id === product.id)?.imageUrl || PlaceHolderImages.find(img => img.id === "critical-power")?.imageUrl || ""}
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

      {/* Core Expertise Summary */}
      <section className="py-24 bg-muted/30 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Strategic Engineering Capabilities</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Deep technical capability across critical power systems and custom electrical design.
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
                data-ai-hint="industrial electronics"
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
                  "Commitment to Precision"
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

      <Footer />
    </div>
  );
}
