
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { WorkflowDiagram } from "@/components/sections/WorkflowDiagram";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { 
  BarChart3, 
  Layers, 
  Settings, 
  ShieldCheck, 
  ArrowRight,
  Zap,
  MousePointer2,
  Clock
} from "lucide-react";

export default function MendexOnePage() {
  const productImg = PlaceHolderImages.find(img => img.id === "mendex-one");

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Product Hero */}
      <section className="pt-32 pb-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
              SaaS CRM Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8">MendexOne CRM</h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Workflow-driven business management for modern sales and operations teams. Automate your manual data entry and focus on building high-value relationships.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">Start Free Trial <ArrowRight className="w-4 h-4" /></Button>
              <Button size="lg" variant="outline">Enterprise Pricing</Button>
            </div>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <Image 
              src={productImg?.imageUrl || ""}
              alt="MendexOne Interface"
              fill
              className="object-cover"
              data-ai-hint="software workflow"
            />
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Automate Your Lead-to-Close Cycle</h2>
          <p className="text-muted-foreground mb-16 max-w-2xl mx-auto">
            MendexOne uses rule-based automation to move prospects through your funnel without manual intervention.
          </p>
          <WorkflowDiagram />
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Real-time Sync", desc: "Bi-directional data synchronization across all your business tools." },
              { icon: BarChart3, title: "Advanced Analytics", desc: "Interactive dashboards with predictive revenue forecasting." },
              { icon: ShieldCheck, title: "Enterprise Security", desc: "SOC2 Type II compliant with fine-grained role permissions." },
              { icon: Settings, title: "No-Code Builder", desc: "Customize your data schemas and UI without writing a single line of code." },
            ].map((feature, idx) => (
              <div key={idx} className="bg-background p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">The CRM built for the modern workspace.</h2>
              <div className="space-y-6">
                {[
                  { icon: Clock, title: "Save 15+ hours per week", desc: "Our customers report significant time savings through automated data entry." },
                  { icon: MousePointer2, title: "Setup in minutes", desc: "Pre-built templates for SaaS, Agencies, and E-commerce teams." },
                  { icon: Layers, title: "Scale as you grow", desc: "Architecture designed to handle millions of records with sub-second latency." },
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-white transition-colors">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        <benefit.icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                      <p className="text-muted-foreground">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2 bg-muted rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 border border-border rounded-2xl bg-white shadow-xl p-6">
                <div className="flex justify-between items-center mb-8">
                  <span className="font-bold">Deal Flow Analytics</span>
                  <div className="h-8 w-8 bg-muted rounded-full" />
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-muted rounded w-3/4 animate-pulse" />
                  <div className="h-4 bg-muted rounded w-1/2 animate-pulse" />
                  <div className="h-32 bg-primary/10 rounded w-full flex items-end p-4 gap-2">
                    <div className="bg-primary h-12 w-full rounded-t" />
                    <div className="bg-primary h-24 w-full rounded-t" />
                    <div className="bg-primary h-16 w-full rounded-t" />
                    <div className="bg-primary h-32 w-full rounded-t" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
