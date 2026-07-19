import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Wrench, 
  CheckCircle2, 
  ArrowLeft 
} from "lucide-react";

export default function EngineeringSupportPage() {
  const servicesList = [
    "Engineering Consultancy",
    "Feasibility Studies",
    "System Design & Architecture",
    "Product Development",
    "Electrical Engineering",
    "Electronics Engineering",
    "Instrumentation Engineering",
    "Automation Engineering",
    "System Integration",
    "Testing & Validation",
    "Installation & Commissioning",
    "Lifecycle Technical Support"
  ];

  const focusAreas = [
    { title: "Customized Engineering Solutions", desc: "Tailored to your specific technical, operational, and commercial needs." },
    { title: "Reliable System Performance", desc: "Rigorous standards applied to verify safety under extreme thermal and electrical conditions." },
    { title: "Integrated Technologies", desc: "Combining power controls, embedded computing, and digital interfaces." },
    { title: "Quality-Driven Execution", desc: "Structured engineering validation procedures and clear reporting." },
    { title: "Technical Documentation", desc: "Rebuilding and updating schemas, engineering layouts, and operations manuals." },
    { title: "Long-Term Maintainability", desc: "Designs developed to simplify troubleshooting and spare parts sourcing." },
    { title: "Lifecycle Support", desc: "Committed to supporting your operations through continuous engineering advice." }
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
              <Wrench className="w-3.5 h-3.5" /> Service Division
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-8 tracking-tight text-slate-900 leading-tight">
              Engineering <br />
              <span className="text-accent italic font-serif">Services</span>
            </h1>
            <p className="text-xl text-slate-800 font-semibold mb-6">
              End-to-End Engineering Support
            </p>
            <p className="text-base text-slate-655 leading-relaxed">
              Our engineering services cover every phase of the project lifecycle, providing customers with a single point of technical expertise from concept to commissioning. This integrated approach reduces project complexity and ensures consistent quality throughout implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Portfolio Section */}
      <section className="py-24 px-4 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12 tracking-tight">Services Include:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {servicesList.map((srv, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-border flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-semibold text-slate-800 text-sm">{srv}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Focus Areas */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Engineering That Solves Real-World Challenges</h2>
            <p className="text-slate-500 text-base max-w-2xl mx-auto">
              Our expertise is not limited to individual products or technologies. We focus on understanding operational challenges and delivering engineering solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-border shadow-sm flex flex-col gap-3">
                <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action CTA */}
      <section className="py-24 px-4 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 tracking-tight">Leverage Our Engineering Team</h2>
          <p className="text-lg text-slate-355 mb-10 max-w-2xl mx-auto">
            From feasibility studies and design reviews to deployment, test plans, and lifecycle support, Mendex has you covered.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-xl h-14 px-8 font-semibold" asChild>
            <Link href="/contact">Contact Our Engineering Team</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
