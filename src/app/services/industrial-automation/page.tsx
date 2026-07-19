import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Cpu, 
  CheckCircle2, 
  Network, 
  ArrowLeft 
} from "lucide-react";

export default function IndustrialAutomationPage() {
  const capabilities = [
    "Machine Automation",
    "Process Automation",
    "Industrial Internet of Things (IIoT)",
    "Industrial Communication Networks",
    "Data Acquisition Systems",
    "Remote Monitoring & Diagnostics",
    "Control Panel Engineering",
    "Instrumentation Integration",
    "Automation System Modernization"
  ];

  const iiotFeatures = [
    "Connected Devices",
    "Smart Sensors",
    "Remote Monitoring",
    "Data Collection",
    "Cloud Connectivity",
    "Edge Data Processing",
    "Equipment Health Monitoring",
    "Predictive Maintenance Support",
    "Performance Analytics",
    "Digital Reporting"
  ];

  const processItems = [
    "Continuous Processes",
    "Batch Processes",
    "Utility Automation",
    "Material Handling",
    "Chemical Processes",
    "Laboratory Automation"
  ];

  const machineItems = [
    "Machine Control",
    "Motion Control Integration",
    "Production Equipment Automation",
    "Packaging Systems",
    "Assembly Systems",
    "Test Equipment Automation"
  ];

  const communicationSystems = [
    "PLC Networks",
    "Industrial Ethernet",
    "Fieldbus Systems",
    "Remote I/O",
    "Instrumentation Networks",
    "Control Panels",
    "Power Systems",
    "SCADA Platforms",
    "Data Acquisition Systems"
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
              <Cpu className="w-3.5 h-3.5" /> Service Division
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-8 tracking-tight text-slate-900 leading-tight">
              Industrial Automation <br />
              <span className="text-accent italic font-serif">& Control</span>
            </h1>
            <p className="text-xl text-slate-800 font-semibold mb-6">
              Intelligent Automation for Smarter, Safer, and More Efficient Operations
            </p>
            <p className="text-base text-slate-650 leading-relaxed mb-4">
              In today's rapidly evolving industrial landscape, automation has become a key driver of productivity, operational efficiency, quality, and competitiveness. Organizations across manufacturing, infrastructure, utilities, research, and process industries are increasingly adopting intelligent automation systems to optimize operations, reduce downtime, improve safety, and gain real-time visibility into critical processes.
            </p>
            <p className="text-base text-slate-650 leading-relaxed">
              At Mendex Technology Services LLP, we provide comprehensive Industrial Automation & Control solutions that integrate modern control technologies, intelligent software platforms, industrial communication systems, and advanced monitoring tools into reliable, scalable, and future-ready automation systems.
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-24 px-4 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Comprehensive Automation Solutions</h2>
          <p className="text-slate-500 mb-12 max-w-3xl leading-relaxed">
            Automation is more than replacing manual operations—it is about creating connected, intelligent systems that enable informed decision-making, increase operational efficiency, and support sustainable growth.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="bg-card p-6 rounded-2xl border border-border flex items-center gap-3 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-semibold text-slate-700 text-sm">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Internet of Things */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Industrial Internet of Things (IIoT)</h2>
              <div className="h-1 w-20 bg-accent mb-6" />
              <p className="text-lg font-bold text-slate-800 mb-4">Connected Industries Through Smart Data</p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Industrial IoT enables organizations to transform operational data into valuable business intelligence. By connecting equipment, sensors, controllers, and enterprise systems, IIoT improves visibility, predictive maintenance, and overall operational performance.
              </p>
            </div>
            <div className="lg:col-span-7 bg-card p-8 sm:p-10 rounded-[2.5rem] border border-border shadow-sm">
              <h4 className="font-bold text-slate-950 mb-6">IIoT Solutions Included:</h4>
              <div className="grid grid-cols-2 gap-4">
                {iiotFeatures.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Machine Automation */}
      <section className="py-24 px-4 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Process & Machine Automation</h2>
            <p className="text-slate-500 text-base max-w-2xl mx-auto">
              Optimizing industrial operations and improving production consistency and reliability across diverse industrial environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-border pb-3">Process Automation</h3>
              <ul className="space-y-3">
                {processItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-slate-655">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-border pb-3">Machine Automation</h3>
              <ul className="space-y-3">
                {machineItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-slate-655">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Communication */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Industrial Communication & System Integration</h2>
            <p className="text-slate-500 text-base max-w-2xl mx-auto">
              Modern automation depends on seamless communication between controllers, sensors, drives, instruments, and enterprise systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {communicationSystems.map((sys, idx) => (
              <div key={idx} className="bg-card p-6 rounded-2xl border border-border flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                <Network className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-semibold text-slate-700 text-sm">{sys}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action CTA */}
      <section className="py-24 px-4 bg-secondary/20 border-t border-border text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 tracking-tight text-slate-900">Modernize Your Operations</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Deploy scalable control systems, smart IIoT devices, and SCADA monitoring panels configured for industrial precision.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-xl h-14 px-8 font-semibold shadow-lg" asChild>
            <Link href="/contact">Request Automation Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
