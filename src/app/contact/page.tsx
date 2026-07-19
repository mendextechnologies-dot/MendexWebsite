"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useFirestore } from "@/firebase";
import { collection, doc, setDoc } from "firebase/firestore";

export default function ContactPage() {
  const { toast } = useToast();
  const firestore = useFirestore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("first-name") as string;
    const lastName = formData.get("last-name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    try {
      const docRef = doc(collection(firestore, "contact_form_submissions"));
      const submissionId = docRef.id;

      await setDoc(docRef, {
        id: submissionId,
        name: `${firstName} ${lastName}`.trim(),
        email: email,
        message: `${subject}: ${message}`,
        submissionDate: new Date().toISOString()
      });

      toast({
        title: "Message Sent",
        description: "We've received your inquiry and our platform specialists will get back to you shortly.",
      });

      e.currentTarget.reset();
    } catch (error) {
      console.error("Firestore submission failed:", error);
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "There was a problem sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight">Let's talk about your project.</h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Whether it's deploying the OPS Marketplace, implementing custom CRM automations, or mapping compliance infrastructure — our specialists are ready.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900">Email Us</h4>
                    <p className="text-muted-foreground">admin@mendex.in</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900">Call Us</h4>
                    <p className="text-muted-foreground">+91 96655 14562</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900">Software & Operations Hub</h4>
                    <p className="text-muted-foreground">Industrial Hub, Pune, MH, India</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border border-slate-100 shadow-2xl rounded-3xl bg-white">
              <CardHeader className="p-8 pb-4">
                <CardTitle className="flex items-center gap-2 text-2xl font-bold">
                  <MessageSquare className="w-6 h-6 text-accent" />
                  Submit Requirement
                </CardTitle>
                <CardDescription>Tell us about your technical specifications or project needs.</CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" name="first-name" placeholder="John" required className="rounded-xl h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" name="last-name" placeholder="Doe" required className="rounded-xl h-11" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input id="email" name="email" type="email" placeholder="john@company.com" required className="rounded-xl h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject / Platform Area</Label>
                    <Input id="subject" name="subject" placeholder="e.g. OPS Marketplace Integration" required className="rounded-xl h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message / Specifications</Label>
                    <Textarea id="message" name="message" placeholder="Describe your project scope, timeline, platform needs, or compliance schedule..." className="min-h-[150px] rounded-xl" required />
                  </div>
                  <Button type="submit" className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
