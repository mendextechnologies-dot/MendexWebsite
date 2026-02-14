import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Layers, 
  Globe, 
  BrainCircuit, 
  BarChart3, 
  Zap, 
  Database 
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    { 
      icon: Layers, 
      title: "Enterprise Software Development", 
      desc: "Architecting and building scalable backend systems and high-performance frontend applications using modern technology stacks." 
    },
    { 
      icon: Globe, 
      title: "Cloud & Platform Engineering", 
      desc: "Infrastructure as Code, Kubernetes orchestration, and multi-cloud strategies designed for maximum uptime and developer productivity." 
    },
    { 
      icon: BrainCircuit, 
      title: "AI & Intelligent Systems", 
      desc: "Implementation of Generative AI, machine learning pipelines, and intelligent automation to solve complex business problems." 
    },
    { 
      icon: BarChart3, 
      title: "Digital Transformation", 
      desc: "Comprehensive roadmap design for companies looking to modernize their legacy systems and migrate to cloud-native architectures." 
    },
    { 
      icon: Zap, 
      title: "Performance Optimization", 
      desc: "Drastic latency reduction for critical business paths through code-level optimization and caching strategy redesign." 
    },
    { 
      icon: Database, 
      title: "Data Engineering", 
      desc: "Building robust ETL pipelines, data warehouses, and real-time streaming architectures for large-scale enterprise data." 
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">Our Core Expertise</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deep technical capability across the entire stack of modern enterprise computing.
          </p>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
