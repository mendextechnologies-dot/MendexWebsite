import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Truck, 
  ArrowLeft 
} from "lucide-react";

export default function ComponentsSupplyPage() {
  const categories = [
    {
      title: "Electrical Products",
      items: [
        "Power Distribution Components",
        "Circuit Protection Devices",
        "Switchgear Accessories",
        "Industrial Relays",
        "Contactors",
        "Motor Protection Devices",
        "Control Switches",
        "Power Supplies",
        "Terminal Blocks",
        "Cable Accessories",
        "Industrial Connectors"
      ]
    },
    {
      title: "Electronic Components",
      items: [
        "Semiconductors",
        "Power Modules",
        "IGBT & MOSFET Modules",
        "Diodes & Rectifiers",
        "Embedded Electronics",
        "Printed Circuit Boards (PCB)",
        "Interface Modules",
        "Sensors & Electronic Assemblies",
        "Industrial Communication Devices"
      ]
    },
    {
      title: "Industrial Automation Products",
      items: [
        "Programmable Logic Controllers (PLC)",
        "Human Machine Interfaces (HMI)",
        "Industrial PCs",
        "Variable Frequency Drives (VFD)",
        "Servo Systems",
        "Industrial Networking Devices",
        "Remote I/O Systems",
        "Communication Gateways",
        "Automation Accessories"
      ]
    },
    {
      title: "Instrumentation Products",
      items: [
        "Pressure Instruments",
        "Temperature Sensors",
        "Flow Measurement Devices",
        "Level Measurement Instruments",
        "Industrial Transmitters",
        "Signal Conditioners",
        "Data Acquisition Modules",
        "Process Controllers",
        "Industrial Indicators"
      ]
    },
    {
      title: "Scientific & Laboratory Equipment",
      items: [
        "Laboratory Power Supplies",
        "Scientific Instruments",
        "Measurement Equipment",
        "Optical Components",
        "Research Electronics",
        "Test & Measurement Equipment",
        "Laboratory Automation Products",
        "Specialized Research Components"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Page Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-7xl mx-auto">
          <Button variant="ghost" className="mb-6 font-semibold text-accent gap-2 bg-transparent hover:bg-secondary/40 text-slate-300" asChild>
            <Link href="/services"><ArrowLeft className="w-4 h-4" /> Back to Services</Link>
          </Button>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-bold mb-6 border border-accent/20">
              <Truck className="w-3.5 h-3.5" /> Service Division
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 tracking-tight text-white leading-tight">
              Industrial Components <br />
              <span className="text-accent italic font-serif">Supply</span>
            </h1>
            <p className="text-xl text-slate-200 font-semibold mb-6">
              Reliable Industrial Components for Critical Applications
            </p>
            <p className="text-base text-slate-350 leading-relaxed mb-4">
              The success of every B2B project depends on the quality, reliability, and availability of its components. From electrical power systems and industrial automation to scientific research and process instrumentation, selecting the right components is essential for achieving safe, efficient, and dependable operations.
            </p>
            <p className="text-base text-slate-350 leading-relaxed">
              At Mendex Technology Services LLP, we supply a comprehensive range of electrical, electronic, automation, instrumentation, and scientific products to support industrial manufacturing, infrastructure, research institutions, public sector organizations, OEMs, and engineering projects. Our focus is on helping customers source reliable components that meet technical specifications, project requirements, and operational expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-24 px-4 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">Comprehensive Product Portfolio</h2>
            <p className="text-slate-400 text-base max-w-2xl mx-auto">
              Sourcing and supply of electrical, electronic, automation, instrumentation, and laboratory systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-card p-8 sm:p-10 rounded-[2rem] border border-border">
                <h3 className="text-xl font-bold text-white mb-6 border-b border-border pb-3">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item, i) => (
                    <li key={i} className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Engineering Advice */}
      <section className="py-24 px-4 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 tracking-tight">Engineering-Based Product Selection</h2>
          <p className="text-slate-350 leading-relaxed text-base max-w-2xl mx-auto">
            Beyond supplying products, we provide technical guidance to help customers identify suitable solutions for new installations, system upgrades, maintenance activities, and modernization projects. By combining engineering expertise with a strong understanding of B2B applications, we help simplify procurement.
          </p>
        </div>
      </section>

      {/* Action CTA */}
      <section className="py-24 px-4 bg-card border-t border-border text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 tracking-tight text-white">Need a Sourcing Partner?</h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            We work with globally recognized manufacturers to source electrical protection products, power components, scientific instruments, and Edge controllers.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-xl h-14 px-8 font-semibold shadow-lg" asChild>
            <Link href="/contact">Request Sourcing Form</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
