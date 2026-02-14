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
              <h1 className="text-4xl md:text-6xl font-bold mb-8">Engineering a better digital future.</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Mendex was founded on the principle that enterprise software should be as intuitive and powerful as the tools we use in our daily lives. 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to bridge the gap between complex engineering requirements and elegant user experiences. We help global organizations navigate the complexities of AI, cloud infrastructure, and distributed systems.
              </p>
            </div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src={PlaceHolderImages.find(img => img.id === "enterprise-team")?.imageUrl || ""}
                alt="Our Team"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div>
              <span className="text-6xl font-bold text-primary block mb-4">5+</span>
              <h4 className="text-xl font-bold mb-2">Years of Excellence</h4>
              <p className="text-muted-foreground">Half a decade of dedicated experience in specialized enterprise software.</p>
            </div>
            <div>
              <span className="text-6xl font-bold text-primary block mb-4">10+</span>
              <h4 className="text-xl font-bold mb-2">Projects Delivered</h4>
              <p className="text-muted-foreground">Successful launches for strategic enterprise partners and growing organizations.</p>
            </div>
            <div>
              <span className="text-6xl font-bold text-primary block mb-4">2</span>
              <h4 className="text-xl font-bold mb-2">Global Partners</h4>
              <p className="text-muted-foreground">Collaborating with specialized technology providers for enhanced delivery.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Join our engineering mission.</h2>
          <p className="text-lg text-muted-foreground mb-12">
            We're always looking for world-class engineers, designers, and strategists to join our distributed global team.
          </p>
          <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors">
            View Open Roles
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
