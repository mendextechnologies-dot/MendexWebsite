import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Settings, 
  CheckCircle2, 
  ArrowLeft,
  Activity,
  Layers,
  Network
} from "lucide-react";

export default function ControlAutomationPage() {
  const capabilities = [
    "Industrial Control Panels",
    "Monitoring & Supervisory Systems",
    "Industrial Communication Systems",
    "Control System Modernization",
    "Integrated Automation & Control"
  ];

  const panelCapabilities = [
    "PLC Control Panels",
    "Automation Panels",
    "Motor Control Panels",
    "Distribution & Control Panels",
    "Instrumentation Panels",
    "Operator Interface Panels",
    "Remote I/O Panels",
    "Customized Control Enclosures"
  ];

  const monitoringFeatures = [
    "Equipment Status Monitoring",
    "Process Visualization",
    "Alarm & Event Management",
    "Historical Data Logging",
    "Performance Dashboards",
    "Trend Analysis",
    "Production Reporting",
    "Energy Monitoring",
    "Asset Health Monitoring",
    "Remote Diagnostics"
  ];

  const commSystems = [
    "Industrial Ethernet",
    "Fieldbus Networks",
    "Remote I/O Communication",
    "Controller-to-Controller Communication",
    "Instrumentation Networks",
    "Gateway Integration",
    "Device Connectivity",
    "Data Exchange Platforms"
  ];

  const modernizationServices = [
    "PLC Upgrades",
    "HMI Replacement",
    "SCADA Migration",
    "Control Panel Retrofitting",
    "Instrumentation Upgrades",
    "Communication Network Modernization",
    "Legacy Controller Replacement",
    "Electrical Control System Enhancement",
    "Documentation Reconstruction"
  ];

  const integratedComponents = [
    "PLC Controllers",
    "SCADA Systems",
    "HMI Interfaces",
    "Sensors & Instrumentation",
    "Variable Speed Drives",
    "Power Monitoring",
    "Safety Interlocks",
    "Remote Access",
    "Industrial Communication Networks"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Page Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-secondary/50 to-background">
        <div className="max-w-7xl mx-auto">
          <Button variant="ghost" className="mb-6 font-semibold text-accent gap-2 bg-transparent hover:bg-secondary/40 text-slate-700" asChild>
            <Link href="/services"><ArrowLeft className="w-4 h-4" /> Back to Services</Link>
          </Button>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold mb-6 border border-accent/20">
              <Settings className="w-3.5 h-3.5" /> Service Division
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-8 tracking-tight text-slate-900 leading-tight">
              Control & <br />
              <span className="text-accent italic font-serif">Automation Systems</span>
            </h1>
            <p className="text-xl text-slate-800 font-semibold mb-6">
              Intelligent Control Systems for Reliable, Efficient, and Connected Industrial Operations
            </p>
            <p className="text-base text-slate-650 leading-relaxed mb-4">
              Modern industries rely on intelligent control systems to ensure safe operation, consistent process performance, efficient resource utilization, and real-time decision-making. As industrial processes become increasingly automated and interconnected, organizations require control systems that not only manage equipment but also provide visibility, diagnostics, communication, and scalability for future growth.
            </p>
            <p className="text-base text-slate-650 leading-relaxed">
              At Mendex Technology Services LLP, we design and integrate Control & Automation Systems that combine electrical engineering, automation, instrumentation, industrial communication, and intelligent monitoring into comprehensive operational solutions. Our systems are engineered to simplify complex processes, improve operational reliability, and support digital transformation across industrial, infrastructure, research, and utility applications.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Overview Section */}
      <section className="py-24 px-4 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12 tracking-tight">Comprehensive Control & Automation Solutions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="bg-card p-6 rounded-2xl border border-border flex flex-col justify-between min-h-[120px] shadow-sm">
                <span className="text-xs font-bold text-accent mb-2">0{idx+1}</span>
                <span className="font-bold text-slate-700 text-sm leading-snug">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid of Capabilities */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Control Panels */}
            <div className="bg-card p-8 sm:p-10 rounded-3xl border border-border shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3 border-l-4 border-accent pl-3">Industrial Control Panels</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-6">
                Control panels serve as the central interface between equipment, operators, and automation systems. We design and integrate panels emphasizing functionality, safety, accessibility, and clean wiring.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {panelCapabilities.map((item, idx) => (
                  <li key={idx} className="text-xs font-semibold text-slate-655 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Monitoring */}
            <div className="bg-card p-8 sm:p-10 rounded-3xl border border-border shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3 border-l-4 border-accent pl-3">Monitoring & Supervisory Systems</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-6">
                Continuous monitoring enables operators to understand system performance, identify abnormalities, and respond quickly to events.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {monitoringFeatures.map((item, idx) => (
                  <li key={idx} className="text-xs font-semibold text-slate-655 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Communication */}
            <div className="bg-card p-8 sm:p-10 rounded-3xl border border-border shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3 border-l-4 border-accent pl-3">Industrial Communication Systems</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-6">
                Reliable communication between equipment, automation systems, and monitoring platforms is essential for modern operations.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {commSystems.map((item, idx) => (
                  <li key={idx} className="text-xs font-semibold text-slate-655 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Modernization */}
            <div className="bg-card p-8 sm:p-10 rounded-3xl border border-border shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3 border-l-4 border-accent pl-3">Control System Modernization</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-6">
                Upgrading legacy PLC and HMI systems rather than replacing entire machines. Protects previous investments and reduces downtime.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {modernizationServices.map((item, idx) => (
                  <li key={idx} className="text-xs font-semibold text-slate-655 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Automation & Control list */}
      <section className="py-24 px-4 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Integrated Automation & Control</h2>
          <p className="text-slate-500 text-base max-w-2xl mx-auto mb-12">
            Modern operations require electrical systems, automation platforms, instrumentation, communication networks, and monitoring tools to function as one coordinated system.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {integratedComponents.map((comp, idx) => (
              <div key={idx} className="bg-card p-6 rounded-2xl border border-border text-center shadow-sm">
                <span className="font-semibold text-slate-700 text-sm">{comp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action CTA */}
      <section className="py-24 px-4 bg-secondary/20 border-t border-border text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 tracking-tight text-slate-900">Deploy Connected Operations</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Design bespoke PLC panels, configure real-time telemetry dashboards, and modernise legacy relay systems.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-xl h-14 px-8 font-semibold shadow-lg" asChild>
            <Link href="/contact">Contact Control Panel Engineers</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
