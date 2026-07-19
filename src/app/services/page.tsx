import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Zap, 
  Cpu, 
  Layers, 
  RefreshCw, 
  Wrench, 
  Truck,
  ArrowRight,
  Settings
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    { 
      icon: Zap, 
      title: "Power Conversion Solutions", 
      desc: "AC and DC power supplies, industrial rectifiers, battery charging systems, high-frequency power systems, and custom engineered power units.",
      link: "/services/power-conversion"
    },
    { 
      icon: Cpu, 
      title: "Industrial Automation & Control", 
      desc: "PLC programming, SCADA, HMI, Industrial IoT (IIoT), motion control, remote diagnostics, process and machine automation.",
      link: "/services/industrial-automation"
    },
    { 
      icon: Settings, 
      title: "Control & Automation Systems", 
      desc: "Design and integration of Control panels, real-time diagnostics, industrial communications, and legacy controller modernizations.",
      link: "/services/control-automation"
    },
    { 
      icon: Layers, 
      title: "EE&I System Integration", 
      desc: "Seamless integration of electrical power boards, control systems, process instrumentation, and industrial communication networks.",
      link: "/services/system-integration"
    },
    { 
      icon: RefreshCw, 
      title: "Reverse Engineering & Modernization", 
      desc: "Upgrading legacy equipment, obsolescence management, PCB redesign, component replacement strategies, and controller migrations.",
      link: "/services/reverse-engineering"
    },
    { 
      icon: Wrench, 
      title: "Engineering Services", 
      desc: "Consultancy, feasibility studies, product development, system testing & validation, commissioning, and lifecycle support.",
      link: "/services/engineering-support"
    },
    { 
      icon: Truck, 
      title: "Industrial Components Supply", 
      desc: "Sourcing and supply of electrical, electronic, automation, instrumentation, laboratory, and scientific components globally.",
      link: "/services/components-supply"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Services Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-white to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-8 tracking-tight text-slate-900">
            Our <span className="text-accent italic font-serif">Expertise</span>
          </h1>
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-6 max-w-3xl mx-auto">
            Comprehensive Engineering Solutions for Modern Industries
          </p>
          <div className="max-w-4xl mx-auto text-center bg-white/50 backdrop-blur-sm p-8 rounded-[2rem] border border-border shadow-sm">
            <p className="text-base text-slate-700 leading-relaxed mb-4">
              At Mendex Technology Services LLP, our expertise is built on the integration of engineering knowledge, technical innovation, and practical implementation. We provide multidisciplinary engineering solutions that help organizations improve operational efficiency, enhance system reliability, modernize existing infrastructure, and support long-term technological growth.
            </p>
            <p className="text-base text-slate-700 leading-relaxed font-semibold text-slate-900">
              Our capabilities extend across Power Conversion Solutions, Industrial Automation, Electrical, Electronics & Instrumentation (EE&I) System Integration, Reverse Engineering, Control Systems, Engineering Services, and the supply of critical industrial components. By bringing these disciplines together, we offer customers a single engineering partner capable of supporting projects from concept through commissioning and lifecycle support.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card key={idx} className="border border-slate-105 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 rounded-3xl bg-background flex flex-col justify-between">
              <CardContent className="p-8 sm:p-10 flex flex-col justify-between h-full min-h-[280px]">
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
