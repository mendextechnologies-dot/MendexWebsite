import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Cpu, 
  Globe, 
  ShieldCheck, 
  Settings, 
  ArrowRight
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    { 
      icon: Cpu, 
      title: "Enterprise Software Development", 
      desc: "Robust, custom-engineered backend systems, database schemas, and intuitive enterprise portals built to match your operational workflows.",
      link: "/services/engineering-supply"
    },
    { 
      icon: Globe, 
      title: "Cloud & Platform Engineering", 
      desc: "Architecting high-availability infrastructure, automated CI/CD pipelines, containerized deployments, and robust security safeguards.",
      link: "/services/engineering-supply"
    },
    { 
      icon: ShieldCheck, 
      title: "Government Compliance Enablement", 
      desc: "Statutory infrastructure setup, Factory licenses, POSH compliance, EPF/ESIC registrations, and PSU vendor readiness support.",
      link: "/services/government-compliance"
    },
    { 
      icon: Settings, 
      title: "Engineering & Technical Supply", 
      desc: "Custom power electronic systems, DC power systems, industrial rectifiers, and specialized engineering design supply.",
      link: "/services/engineering-supply"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Services Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-white to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-8 tracking-tight text-slate-900">
            Enterprise & <span className="text-accent italic font-serif">Engineering Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Delivering the software systems, cloud operations, compliance setups, and power electronics that run critical business processes.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:max-w-5xl">
          {services.map((service, idx) => (
            <Card key={idx} className="border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 rounded-3xl bg-background">
              <CardContent className="p-8 sm:p-10 flex flex-col justify-between h-full min-h-[300px]">
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.desc}</p>
                </div>
                <Button variant="link" className="p-0 h-auto text-accent hover:text-accent/80 text-sm font-bold gap-2 self-start" asChild>
                  <Link href={service.link} className="flex items-center gap-1">
                    Explore Details <ArrowRight className="w-4 h-4" />
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
