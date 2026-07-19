import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, TrendingUp, ShieldCheck, HeartHandshake } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* About Hero / Story */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-white to-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold mb-6">
                <HeartHandshake className="w-3.5 h-3.5" /> About Mendex Technologies
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-slate-900 tracking-tight leading-tight">
                Platform Workflows <br />
                <span className="text-accent italic font-serif">Built for Enterprise</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                MENDEX Technologies designs, builds, and maintains critical software systems and statutory compliance frameworks for high-scale enterprise operations in India.
              </p>
              <p className="text-base text-slate-650 leading-relaxed mb-6">
                Our tools, including the OPS Marketplace, MendexOne CRM, and SwaComply AI, allow organizations to transition from manual, siloed spreadsheets to auditable digital workflows.
              </p>
              <p className="text-base text-slate-650 leading-relaxed">
                By blending software engineering capabilities (backend API development, custom database integrations) with deep statutory domain knowledge, we help businesses eliminate operational friction and succeed in bidding, compliance, and growth.
              </p>
            </div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src={PlaceHolderImages.find(img => img.id === "enterprise-team")?.imageUrl || ""}
                alt="Mendex Team"
                fill
                className="object-cover"
                data-ai-hint="office engineering"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commitment & Stats */}
      <section className="py-24 px-4 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Our Operational Standard</h2>
              <p className="text-xl font-medium text-accent mb-6 italic">"Eliminating compliance chaos. Streamlining business execution."</p>
              <p className="text-base text-slate-500 leading-relaxed">
                At MENDEX Technologies, we believe enterprise systems must be absolute. Whether it is ensuring a subcontractor has the correct statutory filings or automating a complex customer lead cycle, our platforms are built to provide reliability, audit defense, and security out of the box.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
              <div className="p-8 bg-background rounded-3xl border border-border shadow-sm">
                <span className="text-4xl font-extrabold text-accent block mb-2">50+</span>
                <h4 className="font-bold text-slate-900 text-base">Enterprises Supported</h4>
              </div>
              <div className="p-8 bg-background rounded-3xl border border-border shadow-sm">
                <span className="text-4xl font-extrabold text-accent block mb-2">100%</span>
                <h4 className="font-bold text-slate-900 text-base">Audit Readiness</h4>
              </div>
              <div className="p-8 bg-background rounded-3xl border border-border shadow-sm col-span-1 sm:col-span-2">
                <h4 className="font-bold text-accent mb-2">Pan-India Regulatory Compliance</h4>
                <p className="text-xs text-muted-foreground font-semibold">Supporting statutory systems across all states and Union Territories.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">Core Pillars</h2>
          <p className="text-lg text-slate-500 mb-16">
            Our approach combines software engineering practices with statutory diligence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            {[
              { icon: TrendingUp, title: "Scalable Tech First", desc: "Platforms engineered with Next.js, Kubernetes, and robust API endpoints to handle millions of operations." },
              { icon: ShieldCheck, title: "Statutory Defense", desc: "Designed around Indian labor codes, EPF/ESIC guidelines, and tender-ready statutory formats." },
              { icon: CheckCircle2, title: "Client-Centric Customization", desc: "No-code config models that adapt to your exact organization, roles, and approval pathways." }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-border shadow-sm">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent">
                  <value.icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg mb-3">{value.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-24 px-4 bg-white text-slate-900 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-8 tracking-tight">Let's Streamline Your Infrastructure</h2>
          <p className="text-lg text-muted-foreground mb-12">
            From custom API platforms to pan-India compliance audit setups, our specialists are ready to deploy your digital solution.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-xl h-14 px-8 text-base font-semibold" asChild>
            <Link href="/contact">Connect with Platform Experts</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
