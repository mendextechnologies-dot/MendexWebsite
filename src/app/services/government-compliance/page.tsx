
"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Landmark, 
  Building2, 
  ReceiptText, 
  Users, 
  Factory, 
  ShieldCheck, 
  ArrowRight, 
  ClipboardCheck,
  Zap,
  Target,
  FileSearch,
  LayoutDashboard,
  Clock,
  ArrowRightCircle
} from "lucide-react";
import Link from "next/link";

export default function GovernmentCompliancePage() {
  const serviceCategories = [
    {
      title: "Business Formation",
      icon: Building2,
      items: [
        "Private Limited Incorporation",
        "LLP Registration",
        "OPC Registration",
        "MOA & AOA Drafting",
        "Annual ROC Filings"
      ]
    },
    {
      title: "Tax Registrations",
      icon: ReceiptText,
      items: [
        "PAN Creation",
        "TAN Registration",
        "GST Registration",
        "Professional Tax",
        "Import Export Code"
      ]
    },
    {
      title: "Labour & Employee",
      icon: Users,
      items: [
        "EPF Registration",
        "ESIC Registration",
        "Labour License",
        "Contract Labour License",
        "Shops & Establishment"
      ]
    },
    {
      title: "Industrial & Factory",
      icon: Factory,
      items: [
        "Factory License",
        "Pollution Control NOC",
        "Fire NOC",
        "Electrical Inspector Approval",
        "Boiler & Safety Registrations"
      ]
    },
    {
      title: "Gov & MSME",
      icon: ShieldCheck,
      items: [
        "Udyam Registration",
        "GeM Registration",
        "NSIC Registration",
        "PSU Vendor Registration"
      ]
    }
  ];

  const steps = [
    { title: "Consultation & Requirement Mapping", desc: "We identify your specific statutory needs." },
    { title: "Document Collection & Structuring", desc: "AI-ready digital document gathering." },
    { title: "Application Filing & Follow-Up", desc: "Expert handling of department liaison." },
    { title: "Approval & Digital Record Setup", desc: "Centralized storage of all permits." },
    { title: "Renewal & Compliance Tracking", desc: "Automated alerts for ongoing adherence." }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              Government Business Enablement Vertical
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
              Government Business Setup & <span className="text-primary italic">Compliance Enablement</span>
            </h1>
            <p className="text-xl font-medium text-foreground/80 mb-6">
              End-to-End Registration, Licensing & Statutory Infrastructure for Companies Targeting Government & PSU Contracts.
            </p>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              We help businesses establish and maintain complete statutory compliance required for government tenders, PSU vendor registration, and industrial operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-lg" asChild>
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg" asChild>
                <Link href="/contact">Request Registration Checklist</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Vertical */}
      <section className="py-24 px-4 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Government Compliance Infrastructure Matters</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Tender eligibility is binary: you either have the required registrations, or you don't. Correct registrations, licenses, labour compliance, and timely renewals are the bedrock of your government business strategy.
            </p>
            <p className="text-lg font-medium text-foreground mb-8">
              Mendex is your technology-driven Government Business Enablement Partner, providing the statutory infrastructure you need to win.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Eliminate technical disqualification",
                "Streamline industrial licensing",
                "Automate renewal tracking",
                "Ensure PSU vendor readiness"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <ClipboardCheck className="text-accent w-5 h-5 flex-shrink-0" />
                  <span className="font-semibold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-muted p-1 rounded-[3rem]">
            <div className="bg-background rounded-[2.8rem] p-12 border border-border shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Strategic Enablement</h3>
              <p className="text-muted-foreground leading-relaxed">
                We don't just file papers; we build the compliance infrastructure that allows your enterprise to participate in high-value PSU and Government opportunities with zero statutory friction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-24 px-4 bg-muted/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Statutory & Licensing Portfolio</h2>
            <p className="text-muted-foreground">Comprehensive registration coverage for modern Indian industrial and service enterprises.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((cat, idx) => (
              <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-all group">
                <CardHeader className="pb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <cat.icon className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-xl">{cat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-white/5">
              <Zap className="w-64 h-64" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Integrated Intelligence Ecosystem</h2>
              <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl leading-relaxed">
                Our compliance services are not siloed. They integrate seamlessly with our intelligence platforms to provide a complete readiness solution.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: FileSearch, title: "AI Tender Copilot", desc: "Map compliance status against real-time tender eligibility criteria." },
                  { icon: LayoutDashboard, title: "Vendor Readiness", desc: "Track gap analysis and documentation readiness scores." },
                  { icon: Clock, title: "Compliance Lifecycle", desc: "Manage renewals and statutory audits from a single dashboard." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <item.icon className="w-6 h-6 text-accent mb-4" />
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-primary-foreground/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Our Compliance Onboarding Process</h2>
          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-full flex items-center justify-center font-bold text-lg border border-border">
                  0{idx + 1}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Make Your Business Government-Ready</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Establish the statutory foundation required to bid, win, and execute high-value projects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="h-14 px-10 text-lg gap-2" asChild>
              <Link href="/contact">Schedule Consultation <ArrowRightCircle className="w-5 h-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg" asChild>
              <Link href="/contact">Get Compliance Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
