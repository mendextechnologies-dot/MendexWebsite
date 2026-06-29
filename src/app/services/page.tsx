import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Zap, 
  Factory, 
  BatteryCharging, 
  Activity, 
  Settings, 
  ShieldCheck,
  ArrowRight
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    { 
      icon: Zap, 
      title: "DC Power Supplies", 
      desc: "Custom-designed DC systems for industrial, laboratory, and process-specific power requirements." 
    },
    { 
      icon: Factory, 
      title: "Industrial Rectifiers", 
      desc: "High-current and high-voltage power conversion systems designed for demanding environments." 
    },
    { 
      icon: BatteryCharging, 
      title: "Battery Chargers", 
      desc: "Industrial backup battery chargers and utility power systems ensuring critical backup supply." 
    },
    { 
      icon: Activity, 
      title: "Pulsed Power Systems", 
      desc: "High-energy pulse discharge and laboratory power systems designed for testing and research." 
    },
    { 
      icon: Settings, 
      title: "Custom Power Devices", 
      desc: "Tailor-made electrical conversion systems matching unique specifications and duty cycles." 
    },
    { 
      icon: ShieldCheck, 
      title: "Components & Protection", 
      desc: "Power electronics, high-rupture capacity (HRC) fuses, active safeguards, and protection products." 
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">Critical Power & Engineering Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Providing custom electrical engineering, specialized manufacturing, and technical supply services.
          </p>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.desc}</p>
                <Button variant="link" className="p-0 h-auto text-primary text-sm group-hover:gap-2 transition-all font-semibold" asChild>
                  <Link href="/services/engineering-supply" className="flex items-center gap-1">
                    View Specifications <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
