
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-8">Where Power Meets Precision.</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                MENDEX Technologies is engaged in the design, development, manufacturing, and supply of critical power solutions for demanding electrical and industrial applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With a strong focus on performance, reliability, safety, and engineering precision, we support customers with both custom-built power systems and technical supply solutions tailored to specific operational requirements.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our expertise spans across high current, high voltage, and application-oriented power systems, supported by a practical understanding of industrial needs and field performance.
              </p>
            </div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src={PlaceHolderImages.find(img => img.id === "enterprise-team")?.imageUrl || ""}
                alt="Engineering Team"
                fill
                className="object-cover"
                data-ai-hint="office engineering"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
                <p className="text-xl font-medium text-primary mb-6 italic">"Built for performance. Designed for reliability. Delivered with precision."</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At MENDEX Technologies, we believe critical power systems must not only perform — they must perform consistently, safely, and reliably under real-world conditions. That is why our approach combines technical understanding, engineering practicality, and customer-focused execution.
                </p>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
                <div className="p-8 bg-white rounded-2xl shadow-sm border border-border">
                  <span className="text-4xl font-bold text-primary block mb-2">5+</span>
                  <h4 className="font-bold">Years of Excellence</h4>
                </div>
                <div className="p-8 bg-white rounded-2xl shadow-sm border border-border">
                  <span className="text-4xl font-bold text-primary block mb-2">10+</span>
                  <h4 className="font-bold">Projects Delivered</h4>
                </div>
                <div className="p-8 bg-white rounded-2xl shadow-sm border border-border col-span-1 sm:col-span-2">
                  <h4 className="font-bold text-primary mb-2">Engineering-Focused</h4>
                  <p className="text-sm text-muted-foreground">Tailored solutions for unique electrical and thermal requirements.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Industrial Excellence</h2>
          <p className="text-lg text-muted-foreground mb-12">
            From power utilities to research laboratories, we provide the infrastructure that powers innovation and industrial continuity.
          </p>
          <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors">
            Contact Engineering Team
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
