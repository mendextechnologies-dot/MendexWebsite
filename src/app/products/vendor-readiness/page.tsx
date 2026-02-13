
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { 
  ShieldCheck, 
  BarChart3, 
  FileLock, 
  Clock, 
  Target, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  LayoutDashboard,
  AlertTriangle,
  TrendingUp,
  Briefcase
} from "lucide-react";

export default function VendorReadinessPage() {
  const productImg = PlaceHolderImages.find(img => img.id === "vendor-readiness");

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Product Hero */}
      <section className="pt-32 pb-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
              PSU Vendor Readiness Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Get Vendor-Ready Before the Tender Comes.</h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Winning tenders starts with vendor readiness. Our platform helps companies evaluate their eligibility before applying to Public Sector Undertakings (PSUs).
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90">Check Vendor Readiness <ArrowRight className="w-4 h-4" /></Button>
              <Button size="lg" variant="outline">Contact Us</Button>
            </div>
            <p className="mt-8 text-sm font-bold text-accent flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Prepare once. Apply confidently.
            </p>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <Image 
              src={productImg?.imageUrl || ""}
              alt="Vendor Readiness Dashboard"
              fill
              className="object-cover"
              data-ai-hint="compliance dashboard"
            />
          </div>
        </div>
      </section>

      {/* What It Solves */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Eliminate Procurement Friction</h2>
            <p className="text-muted-foreground">What we solve for modern vendors and suppliers.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Target, title: "Eligibility Confusion", desc: "No more guessing if you meet PSU criteria." },
              { icon: AlertTriangle, title: "Documentation Gaps", desc: "Identify missing paperwork before it's too late." },
              { icon: BarChart3, title: "Financial Shortfalls", desc: "Analyze 3-year financials vs requirements." },
              { icon: Clock, title: "Expired Certs", desc: "Automated alerts for expiring certifications." },
              { icon: TrendingUp, title: "High Rejection Rates", desc: "Lower rejection probability with pre-submission validation." },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-muted/30 border border-border text-center">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm mb-2">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Readiness Engine */}
      <section className="py-24 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">The Readiness Engine</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <LayoutDashboard className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Vendor Profile Comparison</h3>
                    <p className="text-primary-foreground/80">Automated comparison of your vendor profile against PSU eligibility requirements.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Readiness Scoring</h3>
                    <p className="text-primary-foreground/80">Get a quantitative readiness score and comprehensive eligibility gap analysis.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Improvement Roadmap</h3>
                    <p className="text-primary-foreground/80">Actionable recommendations and category upgrade planning for long-term success.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-[3rem] p-12 border border-white/20">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <FileLock className="text-accent w-6 h-6" /> Secure Document Vault
              </h3>
              <ul className="space-y-6">
                {[
                  "Store all critical certificates securely",
                  "Automated tracking of expiry dates",
                  "Renewal alerts for essential permits",
                  "Complete maintenance of compliance history"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Designed For */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Designed For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Briefcase, label: "MSME Vendors" },
              { icon: Target, label: "PSU Suppliers" },
              { icon: Zap, label: "Consultant-managed Vendors" },
              { icon: Globe, label: "Industrial Contractors" },
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-white rounded-3xl border border-border text-center hover:shadow-lg transition-shadow">
                <item.icon className="w-10 h-10 text-accent mx-auto mb-4" />
                <h4 className="font-bold">{item.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* End-to-End Summary */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Opportunity Intelligence + Vendor Readiness</h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            Identify tenders faster and prepare vendors earlier. Reduce rejection and increase win probability with India's most advanced procurement intelligence infrastructure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {["AI-first architecture", "India-focused intelligence", "Enterprise-grade security", "Scalable cloud infra"].map((item, idx) => (
              <div key={idx} className="p-4 bg-background rounded-xl border border-border font-bold text-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
