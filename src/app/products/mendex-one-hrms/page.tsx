
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { 
  Users, 
  UserPlus, 
  CalendarCheck, 
  TrendingUp, 
  Zap, 
  BarChart3, 
  ArrowRight,
  ShieldCheck,
  Briefcase,
  LayoutDashboard
} from "lucide-react";

export default function MendexOneHRMSPage() {
  const productImg = PlaceHolderImages.find(img => img.id === "mendex-one-hrms");

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Product Hero */}
      <section className="pt-32 pb-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              Unified Human Resource Management Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8">MendexOne HRMS</h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Modern HR management, built into your business platform. Simplify employee operations, automate HR workflows, and provide actionable insights for growing organizations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/contact">
                  Request Demo <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">Explore Pricing</Button>
            </div>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <Image 
              src={productImg?.imageUrl || ""}
              alt="MendexOne HRMS Interface"
              fill
              className="object-cover"
              data-ai-hint="hr dashboard"
            />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Simplify Employee Operations.</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            MendexOne HRMS is built as part of the MendexOne unified business platform, integrating seamlessly with CRM and operational tools. This enables companies to manage their workforce efficiently from a single system.
          </p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Core HR Capabilities</h2>
            <p className="text-muted-foreground">From onboarding to performance tracking, everything you need in one place.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: UserPlus, 
                title: "Employee Lifecycle Management", 
                desc: "Manage the complete journey: profiles, directory, digital onboarding, and role management." 
              },
              { 
                icon: CalendarCheck, 
                title: "Attendance & Leave", 
                desc: "Simplify workforce tracking with automated leave requests, approvals, and visibility dashboards." 
              },
              { 
                icon: TrendingUp, 
                title: "Performance Management", 
                desc: "Enable continuous evaluation through review workflows, goal tracking, and manager insights." 
              },
              { 
                icon: Zap, 
                title: "HR Workflow Automation", 
                desc: "Reduce manual effort with intelligent onboarding automation and approval workflows." 
              },
              { 
                icon: BarChart3, 
                title: "Analytics & Reporting", 
                desc: "Make better decisions with real-time HR dashboards, workforce analytics, and data-driven reports." 
              },
              { 
                icon: ShieldCheck, 
                title: "Enterprise-Grade Security", 
                desc: "Secure multi-tenant environment ensuring centralized employee records and compliance." 
              },
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

      {/* Platform Advantage */}
      <section className="py-24 px-4 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white relative">
            <div className="absolute top-0 right-0 p-8 text-white/5">
              <LayoutDashboard className="w-64 h-64" />
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Integrated Platform Advantage</h2>
                <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                  Unlike standalone HR tools, MendexOne HRMS is built within a unified platform that also supports CRM, sales operations, and project workflows.
                </p>
                <div className="space-y-4">
                  {[
                    "Align HR with business operations",
                    "Reduce tool fragmentation",
                    "Improve collaboration across departments"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center">
                        <Zap className="w-3 h-3" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Ideal For</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <Briefcase className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <h4 className="font-bold">Growing Businesses</h4>
                      <p className="text-primary-foreground/70 text-sm">Teams needing structured HR processes as they scale.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <TrendingUp className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <h4 className="font-bold">Process Modernization</h4>
                      <p className="text-primary-foreground/70 text-sm">Organizations moving from manual HR tracking to digital systems.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Users className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <h4 className="font-bold">Unified Teams</h4>
                      <p className="text-primary-foreground/70 text-sm">Teams looking for an integrated CRM + HR platform.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-24 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to streamline your HR?</h2>
        <Button size="lg" className="h-14 px-10 text-lg" asChild>
          <Link href="/contact">Schedule a Demo Today</Link>
        </Button>
      </section>

      <Footer />
    </div>
  );
}
