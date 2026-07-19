import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Zap, 
  CheckCircle2, 
  Settings, 
  ShieldCheck, 
  Activity, 
  ArrowLeft 
} from "lucide-react";

export default function PowerConversionPage() {
  const productsList = [
    "AC Power Supplies",
    "DC Power Supplies",
    "AC-DC Power Conversion Systems",
    "DC-DC Converters",
    "Industrial Rectifiers",
    "Battery Charging Systems",
    "High-Frequency Power Supplies",
    "Programmable Power Supplies",
    "Regulated Power Systems",
    "Custom Power Conversion Equipment",
    "Power Distribution & Conditioning Systems",
    "Integrated Power Control Panels"
  ];

  const benefits = [
    { title: "High Reliability", desc: "Designed for continuous operation in demanding industrial environments." },
    { title: "Application-Specific Engineering", desc: "Solutions tailored to unique electrical, mechanical, and operational requirements." },
    { title: "Stable Output Performance", desc: "Consistent voltage and current regulation for sensitive industrial and scientific equipment." },
    { title: "Energy Efficiency", desc: "Optimized designs that support efficient energy utilization and dependable performance." },
    { title: "Scalable Architecture", desc: "Solutions that can be adapted to changing operational requirements and future expansion." },
    { title: "Maintainability", desc: "Engineering that simplifies installation, servicing, troubleshooting, and long-term maintenance." }
  ];

  const capabilities = [
    { title: "Electrical System Design", desc: "Development of electrical architectures based on application requirements and industry best practices." },
    { title: "Power Electronics Engineering", desc: "Design and integration of modern power electronic technologies for reliable and efficient power conversion." },
    { title: "Control System Integration", desc: "Integration of intelligent control systems for monitoring, protection, diagnostics, and operational control." },
    { title: "Mechanical Integration", desc: "Coordination of electrical and mechanical design for optimized thermal management, accessibility, and equipment reliability." },
    { title: "System Testing & Validation", desc: "Verification of electrical performance, functionality, and operational reliability before deployment." },
    { title: "Documentation & Support", desc: "Comprehensive engineering documentation and technical assistance throughout the project lifecycle." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-white to-background">
        <div className="max-w-7xl mx-auto">
          <Button variant="ghost" className="mb-6 font-semibold text-accent gap-2" asChild>
            <Link href="/services"><ArrowLeft className="w-4 h-4" /> Back to Services</Link>
          </Button>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold mb-6">
              <Zap className="w-3.5 h-3.5" /> Service Division
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-8 tracking-tight text-slate-900 leading-tight">
              Power Conversion <br />
              <span className="text-accent italic font-serif">Solutions</span>
            </h1>
            <p className="text-xl text-slate-800 font-semibold mb-6">
              Reliable Power Solutions for Critical Industrial Applications
            </p>
            <p className="text-base text-slate-650 leading-relaxed mb-4">
              Power is the foundation of every B2B operation. From research laboratories and manufacturing facilities to transportation infrastructure and critical process industries, reliable power conversion systems are essential for ensuring operational continuity, equipment performance, and system safety.
            </p>
            <p className="text-base text-slate-655 leading-relaxed">
              At Mendex Technology Services LLP, we specialize in designing, developing, integrating, and supporting advanced power conversion solutions tailored to the unique requirements of industrial, scientific, and infrastructure applications. Our engineering expertise combines modern power electronics, intelligent control systems, and application-focused design to deliver solutions that are efficient, dependable, and built for long-term performance.
            </p>
          </div>
        </div>
      </section>

      {/* Product List Section */}
      <section className="py-24 px-4 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12 tracking-tight">Comprehensive Power Conversion Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productsList.map((prod, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-border flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-semibold text-slate-800 text-sm">{prod}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineered for Performance */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Engineered for Performance</h2>
            <p className="text-slate-500 text-base max-w-2xl mx-auto">
              Power conversion systems are more than electrical equipment—they are mission-critical assets that directly influence productivity, process stability, and equipment lifespan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-border shadow-sm flex flex-col gap-3">
                <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Engineering Capabilities */}
      <section className="py-24 px-4 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Our Engineering Capabilities</h2>
            <p className="text-slate-500 text-base max-w-2xl mx-auto">
              Our multidisciplinary engineering team provides complete support throughout the project lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => (
              <Card key={idx} className="border border-slate-100 shadow-sm rounded-3xl bg-background">
                <CardContent className="p-8">
                  <h4 className="font-bold text-slate-900 text-lg mb-3">{cap.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{cap.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final Action CTA */}
      <section className="py-24 px-4 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 tracking-tight">Need a Custom Power System?</h2>
          <p className="text-lg text-slate-350 mb-10 max-w-2xl mx-auto">
            Whether your requirement involves a standard industrial power supply or a fully customized high-power conversion system, our engineering team works closely with you to develop solutions.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-xl h-14 px-8 font-semibold" asChild>
            <Link href="/contact">Request Power Solution Quote</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
