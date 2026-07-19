import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  RefreshCw, 
  CheckCircle2, 
  ArrowLeft 
} from "lucide-react";

export default function ReverseEngineeringPage() {
  const capabilities = [
    "Reverse Engineering",
    "Legacy Equipment Modernization",
    "PCB Redesign & Redevelopment",
    "PLC Migration",
    "HMI & SCADA Migration",
    "Control Panel Retrofitting",
    "Obsolescence Management",
    "Embedded System Redevelopment",
    "Functional Replacement Engineering",
    "Electrical System Upgrades",
    "Documentation Reconstruction",
    "Performance Optimization"
  ];

  const reverseEngList = [
    "Electrical Circuit Analysis",
    "System Architecture Evaluation",
    "Functional Analysis",
    "Component Identification",
    "Interface Analysis",
    "Wiring Documentation",
    "Engineering Drawings",
    "Bill of Materials (BOM) Reconstruction",
    "System Documentation"
  ];

  const pcbList = [
    "PCB Reverse Engineering",
    "Circuit Redesign",
    "Functional Replacement Design",
    "Component Replacement Strategy",
    "PCB Layout Development",
    "Interface Compatibility",
    "Embedded Electronics Integration",
    "Design Documentation",
    "Prototype Development Support"
  ];

  const plcList = [
    "PLC Replacement Planning",
    "Logic Migration",
    "HMI Redevelopment",
    "SCADA Migration",
    "Communication Network Upgrades",
    "Remote I/O Integration",
    "Instrumentation Compatibility",
    "Functional Verification",
    "Commissioning Support"
  ];

  const obsolescenceList = [
    "Obsolete Component Identification",
    "Technology Assessment",
    "Replacement Planning",
    "Lifecycle Analysis",
    "Functional Equivalency Evaluation",
    "Upgrade Recommendations",
    "Spare Parts Strategy",
    "Documentation Updates",
    "Long-Term Support Planning"
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
              <RefreshCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} /> Service Division
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-8 tracking-tight text-white leading-tight">
              Reverse Engineering <br />
              <span className="text-accent italic font-serif">& Modernization</span>
            </h1>
            <p className="text-xl text-slate-200 font-semibold mb-6">
              Extending the Life of Critical Assets Through Intelligent Engineering
            </p>
            <p className="text-base text-slate-350 leading-relaxed mb-4">
              Many organizations continue to operate legacy equipment that remains mechanically sound but relies on obsolete electronics or unsupported control systems. Replacing an entire system is not always the most practical or cost-effective solution. In many cases, modernizing existing equipment through reverse engineering and technology upgrades can significantly improve reliability, extend operational life, and enhance performance while preserving valuable infrastructure.
            </p>
            <p className="text-base text-slate-350 leading-relaxed">
              At Mendex Technology Services LLP, we provide Reverse Engineering & Modernization solutions that help organizations restore, upgrade, and optimize legacy industrial systems. By combining expertise in electrical engineering, electronics, instrumentation, automation, embedded systems, and control engineering, we develop practical modernization strategies that minimize disruption and maximize the return on existing assets.
            </p>
          </div>
        </div>
      </section>

      {/* Modernization Solutions List */}
      <section className="py-24 px-4 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4 tracking-tight">Comprehensive Modernization Solutions</h2>
          <p className="text-slate-400 mb-12 max-w-3xl leading-relaxed">
            Every legacy system presents unique engineering challenges. Our multidisciplinary capabilities enable us to evaluate existing equipment and develop customized modernization strategies that improve performance while preserving functional integrity.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="bg-card p-6 rounded-2xl border border-border flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-semibold text-slate-200 text-sm">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Modernization Capability Blocks */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Reverse Engineering */}
            <div className="bg-card p-8 sm:p-10 rounded-3xl border border-border shadow-sm">
              <h3 className="text-xl font-bold text-white mb-3 border-l-4 border-accent pl-3">Reverse Engineering</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Many legacy systems operate without complete technical documentation. Our reverse engineering services help recover critical engineering information by analyzing existing hardware and wiring.
              </p>
              <ul className="space-y-2">
                {reverseEngList.map((item, idx) => (
                  <li key={idx} className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* PCB Redesign */}
            <div className="bg-card p-8 sm:p-10 rounded-3xl border border-border shadow-sm">
              <h3 className="text-xl font-bold text-white mb-3 border-l-4 border-accent pl-3">PCB Redesign & Electronic Redevelopment</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Electronic assemblies often become obsolete before mechanical parts. We layout and test replacement boards to maintain or improve system functionality.
              </p>
              <ul className="space-y-2">
                {pcbList.map((item, idx) => (
                  <li key={idx} className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* PLC Migration */}
            <div className="bg-card p-8 sm:p-10 rounded-3xl border border-border shadow-sm">
              <h3 className="text-xl font-bold text-white mb-3 border-l-4 border-accent pl-3">PLC Migration & Control Upgrades</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Migrate legacy PLC logic, SCADA layouts, and industrial networks to currently supported hardware platforms, preserving core machinery.
              </p>
              <ul className="space-y-2">
                {plcList.map((item, idx) => (
                  <li key={idx} className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Obsolescence Management */}
            <div className="bg-card p-8 sm:p-10 rounded-3xl border border-border shadow-sm">
              <h3 className="text-xl font-bold text-white mb-3 border-l-4 border-accent pl-3">Obsolescence Management</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Proactively identify components at risk, evaluate replacement options, update drawings, and design long-term support roadmaps.
              </p>
              <ul className="space-y-2">
                {obsolescenceList.map((item, idx) => (
                  <li key={idx} className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Action CTA */}
      <section className="py-24 px-4 bg-card border-t border-border text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 tracking-tight text-white">Extend the Lifecycle of Legacy Machinery</h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Upgrade legacy electrical assemblies, rebuild wiring diagrams, and migrate obsolete PLCs with technical support from Mendex.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-xl h-14 px-8 font-semibold shadow-lg" asChild>
            <Link href="/contact">Request Modernization Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
