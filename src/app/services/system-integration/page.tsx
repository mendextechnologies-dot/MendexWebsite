import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Layers, 
  CheckCircle2, 
  ArrowLeft 
} from "lucide-react";

export default function SystemIntegrationPage() {
  const electricalList = [
    "Power Distribution Systems",
    "Low Voltage Distribution",
    "Power Protection Systems",
    "Industrial Power Panels",
    "Control Panels",
    "Power Monitoring",
    "Distribution Boards",
    "Auxiliary Power Systems"
  ];

  const electronicsList = [
    "Embedded Electronics",
    "Industrial Electronics",
    "Power Electronics",
    "Interface Modules",
    "Signal Conditioning",
    "Electronic Control Units",
    "Communication Interfaces",
    "Monitoring Devices"
  ];

  const instrumentationList = [
    "Industrial Sensors",
    "Process Instrumentation",
    "Measurement Systems",
    "Data Acquisition Systems",
    "Signal Transmission",
    "Instrument Calibration Support",
    "Process Monitoring",
    "Industrial Measurement Integration"
  ];

  const electricalEngineering = [
    "Electrical System Design",
    "Power Distribution Integration",
    "Industrial Control Panels",
    "Motor Control Systems",
    "Protection Coordination",
    "Cable Engineering",
    "Earthing & Grounding Design",
    "Power Quality Considerations",
    "Electrical Documentation"
  ];

  const electronicsIntegration = [
    "Embedded Controllers",
    "Power Electronic Devices",
    "Interface Electronics",
    "Signal Processing",
    "Monitoring Systems",
    "Electronic Protection Systems",
    "Digital Communication Devices",
    "Intelligent Monitoring Equipment"
  ];

  const instrumentationEngineering = [
    "Pressure Measurement",
    "Temperature Measurement",
    "Flow Measurement",
    "Level Measurement",
    "Analytical Instrumentation",
    "Industrial Sensors",
    "Signal Transmission",
    "Data Acquisition",
    "Instrument Interface Design"
  ];

  const commNetworks = [
    "Industrial Ethernet",
    "Fieldbus Systems",
    "Remote I/O Networks",
    "Serial Communication",
    "Industrial Gateways",
    "Communication Controllers",
    "Device Networking",
    "System Interoperability"
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
              <Layers className="w-3.5 h-3.5" /> Service Division
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 tracking-tight text-white leading-tight">
              EE&I System <br />
              <span className="text-accent italic font-serif">Integration</span>
            </h1>
            <p className="text-xl text-slate-200 font-semibold mb-6">
              Connecting Technologies into Unified Systems
            </p>
            <p className="text-base text-slate-355 leading-relaxed mb-4">
              Modern industrial facilities depend on the seamless interaction of electrical systems, electronic devices, instrumentation, automation platforms, communication networks, and intelligent control technologies. As B2B processes become increasingly connected and data-driven, successful project execution requires more than individual products—it requires integrated engineering solutions that ensure reliability, efficiency, safety, and long-term maintainability.
            </p>
            <p className="text-base text-slate-355 leading-relaxed">
              At Mendex Technology Services LLP, we provide comprehensive Electrical, Electronics & Instrumentation (EE&I) System Integration solutions that bring together multiple engineering disciplines into unified, high-performance systems. Our multidisciplinary expertise enables us to integrate power distribution, control systems, instrumentation, industrial communication, and monitoring technologies into reliable engineering solutions tailored to the operational requirements of each B2B application.
            </p>
          </div>
        </div>
      </section>

      {/* Integration Capabilities Section */}
      <section className="py-24 px-4 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4 tracking-tight">Comprehensive EE&I Integration Solutions</h2>
          <p className="text-slate-400 mb-12 max-w-3xl leading-relaxed">
            Successful system integration requires every subsystem to function together as one coordinated engineering platform.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-3xl border border-border">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-border pb-2">Electrical Systems</h3>
              <ul className="space-y-2">
                {electricalList.map((item, idx) => (
                  <li key={idx} className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-8 rounded-3xl border border-border">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-border pb-2">Electronics Systems</h3>
              <ul className="space-y-2">
                {electronicsList.map((item, idx) => (
                  <li key={idx} className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-8 rounded-3xl border border-border">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-border pb-2">Instrumentation Systems</h3>
              <ul className="space-y-2">
                {instrumentationList.map((item, idx) => (
                  <li key={idx} className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Focus Divisions */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">Core Engineering Disciplines</h2>
            <p className="text-slate-400 text-base max-w-2xl mx-auto">
              Our integration capability is supported by specific competency layers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
              <h4 className="font-bold text-white text-lg mb-4 border-l-4 border-accent pl-3">Electrical Integration</h4>
              <ul className="space-y-2">
                {electricalEngineering.map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-300 font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
              <h4 className="font-bold text-white text-lg mb-4 border-l-4 border-accent pl-3">Electronics Integration</h4>
              <ul className="space-y-2">
                {electronicsIntegration.map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-300 font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
              <h4 className="font-bold text-white text-lg mb-4 border-l-4 border-accent pl-3">Instrumentation Integration</h4>
              <ul className="space-y-2">
                {instrumentationEngineering.map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-300 font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Communication Networks Section */}
      <section className="py-24 px-4 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">Industrial Communication Networks</h2>
            <p className="text-slate-400 text-base max-w-2xl mx-auto">
              Reliable communication is essential for connected industrial operations.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {commNetworks.map((net, idx) => (
              <div key={idx} className="bg-card p-6 rounded-2xl border border-border text-center">
                <span className="font-semibold text-slate-200 text-sm">{net}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action CTA */}
      <section className="py-24 px-4 bg-card border-t border-border text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 tracking-tight text-white">Connect Your Systems Seamlessly</h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            From sensor-to-cloud mapping to industrial control board wiring, Mendex integrates electrical, electronic, and instrumentation systems.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-xl h-14 px-8 font-semibold shadow-lg" asChild>
            <Link href="/contact">Request Integration Quote</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
