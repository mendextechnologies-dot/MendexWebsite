import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { 
  ShieldCheck, 
  LayoutDashboard, 
  ClipboardList, 
  FileText, 
  BrainCircuit, 
  Lock, 
  ArrowRight,
  Zap,
  CheckCircle2,
  Users
} from "lucide-react";

export default function SwaComplyPage() {
  const productImg = PlaceHolderImages.find(img => img.id === "swacomply");

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Product Hero */}
      <section className="pt-32 pb-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <ShieldCheck className="w-4 h-4" /> Statutory Compliance Automation Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Navigate Statutory Compliance with Confidence.</h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Simplify compliance, streamline audits, and automate register management with our all-in-one enterprise platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" asChild>
                <Link href="https://swacomply.com/">
                  Get Started For Free <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Book Demo</Link>
              </Button>
            </div>
            <p className="mt-8 text-sm font-bold text-primary flex items-center gap-2">
              <Zap className="w-4 h-4 animate-pulse" /> Trusted by 1,000+ active compliance professionals.
            </p>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-muted">
            <Image 
              src={productImg?.imageUrl || ""}
              alt="SwaComply Interface"
              fill
              className="object-cover"
              data-ai-hint="compliance dashboard"
            />
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Focus on Your Business, Not Paperwork</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              SwaComply automates the tedious compliance tasks, so you can focus on what matters most.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: ShieldCheck, 
                title: "Automated Compliance", 
                desc: "Stay ahead of deadlines with automated tracking and reminders for all your statutory requirements." 
              },
              { 
                icon: LayoutDashboard, 
                title: "Centralized Dashboard", 
                desc: "Get a bird's-eye view of your entire compliance posture across all subsidiaries in one place." 
              },
              { 
                icon: ClipboardList, 
                title: "Streamlined Audits", 
                desc: "Conduct, manage, and track internal audits with customizable checklists and actionable findings." 
              },
              { 
                icon: FileText, 
                title: "Effortless Registers", 
                desc: "Generate accurate, print-ready statutory registers from your payroll data in just a few clicks." 
              },
              { 
                icon: BrainCircuit, 
                title: "AI-Powered Insights", 
                desc: "Leverage AI to analyze notices, generate reports, and get instant answers to your compliance questions." 
              },
              { 
                icon: Lock, 
                title: "Secure Document Vault", 
                desc: "Keep all your compliance documents, licenses, and evidence securely stored and easily accessible." 
              },
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-background border border-border hover:border-primary/50 hover:shadow-lg transition-all">
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

      {/* How it works */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Get Started in 3 Simple Steps</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Onboarding is quick, simple, and gets you on the path to compliance in minutes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              {
                step: "1",
                title: "Sign Up",
                desc: "Create your account and set up your organisation in seconds."
              },
              {
                step: "2",
                title: "Configure Subsidiaries",
                desc: "Add your business locations and let the platform determine applicable laws."
              },
              {
                step: "3",
                title: "Stay Compliant",
                desc: "Follow the dashboard, complete tasks, and never miss a deadline again."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center p-6 bg-white rounded-2xl border border-border">
                <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full text-2xl font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture & Built For */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-border">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Users className="text-primary w-6 h-6" /> Built For
              </h3>
              <ul className="space-y-4">
                {[
                  "Compliance Officers & Legal Advisors",
                  "HR & Payroll Professionals",
                  "Operations & Subsidiary Managers",
                  "Large & Mid-sized Enterprise Teams"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-accent" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary p-10 rounded-[3rem] shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Zap className="text-accent w-6 h-6" /> Platform Advantages
              </h3>
              <ul className="space-y-4 text-primary-foreground/90">
                {[
                  "Secure Multi-tenant architecture",
                  "Real-time payroll register builder engine",
                  "Intelligent compliance checklist automation",
                  "Advanced document storage with AES encryption"
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

      {/* Pricing / CTA Section */}
      <section className="py-24 px-4 bg-muted/30 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Choose the plan that's right for your business. No hidden fees.
          </p>
          <div className="max-w-md mx-auto bg-white rounded-3xl p-8 border border-border shadow-xl">
            <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
            <p className="text-muted-foreground mb-6">For organizations with custom compliance needs.</p>
            <p className="text-4xl font-bold mb-8">Contact Us</p>
            <div className="space-y-4 text-left mb-8">
              {[
                "All compliance templates & tools included",
                "Dedicated Compliance Account Manager",
                "Custom payroll integration support",
                "On-premise deployment options"
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            <Button size="lg" className="w-full h-12" asChild>
              <Link href="https://swacomply.com/">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
