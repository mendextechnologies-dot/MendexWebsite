
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { 
  FileSearch, 
  ShieldAlert, 
  Zap, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  ClipboardList,
  Languages,
  Database,
  Users
} from "lucide-react";

export default function TenderIntelligencePage() {
  const productImg = PlaceHolderImages.find(img => img.id === "tender-intelligence");

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Product Hero */}
      <section className="pt-32 pb-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              AI Tender Intelligence Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Analyze Government Tenders in Minutes. Not Hours.</h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Government tenders are complex, document-heavy, and risk-prone. Our AI helps consultants and enterprises analyze tenders instantly and reduce compliance errors.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">Book Demo <ArrowRight className="w-4 h-4" /></Button>
              <Button size="lg" variant="outline">Request Access</Button>
            </div>
            <p className="mt-8 text-sm font-bold text-primary flex items-center gap-2">
              <Zap className="w-4 h-4" /> India’s First AI Tender Copilot Built for Consultants.
            </p>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <Image 
              src={productImg?.imageUrl || ""}
              alt="AI Tender Intelligence Interface"
              fill
              className="object-cover"
              data-ai-hint="document analysis"
            />
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What It Does</h2>
            <p className="text-muted-foreground text-lg">AI-powered full document analysis for complex procurement environments.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FileSearch, title: "Document Analysis", desc: "AI-powered full document analysis to extract hidden details." },
              { icon: ClipboardList, title: "Eligibility Extraction", desc: "Automatically identify and extract complex eligibility criteria." },
              { icon: ShieldAlert, title: "Risk Clause Detection", desc: "Instantly flag financial and legal risk clauses for review." },
              { icon: CheckCircle2, title: "Auto-Checklists", desc: "Generate submission checklists to ensure no document is missed." },
              { icon: ClipboardList, title: "Draft Generation", desc: "Cover letter and compliance draft generation powered by AI." },
              { icon: Languages, title: "Multilingual Support", desc: "Analyze tenders in multiple languages with full semantic context." },
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Why Choose Our Intelligence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Reduce Analysis Time by 70%", desc: "Focus on strategy rather than reading thousands of pages of fine print." },
              { title: "Avoid Eligibility Mistakes", desc: "Ensure your firm is perfectly matched to the tender requirements every time." },
              { title: "Identify Risks Early", desc: "Flag financial and legal liabilities before you even start the bid process." },
            ].map((benefit, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <div className="text-5xl font-bold text-accent">0{idx + 1}</div>
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built For / Smart Architecture */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-border">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Users className="text-primary w-6 h-6" /> Built For
              </h3>
              <ul className="space-y-4">
                {["Tender Consultants", "EPC & Infrastructure Firms", "MSME Advisors", "Procurement Teams"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-accent" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary p-10 rounded-[3rem] shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Database className="text-accent w-6 h-6" /> Smart Architecture
              </h3>
              <ul className="space-y-4 text-primary-foreground/90">
                {[
                  "Global Master Tender Library",
                  "AI-based structured intelligence",
                  "Multi-client participation tracking",
                  "Secure multi-tenant environment"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-accent" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
