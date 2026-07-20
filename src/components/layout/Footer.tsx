import Link from "next/link";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A2633] text-white border-t border-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image 
                src="/logo.jpg" 
                alt="Mendex Logo" 
                width={36} 
                height={36} 
                className="rounded-lg object-contain"
              />
              <span className="text-xl font-bold tracking-tight">MENDEX</span>
            </Link>
            <p className="text-sm text-slate-400 max-w-xs mt-4">
              Delivering integrated solutions across Power Conversion, Industrial Automation, EE&I System Integration, Reverse Engineering, and critical industrial sourcing.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold bg-white/5 border border-slate-700/50 rounded-lg px-3 py-1.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>ISO 9001:2015 Certified</span>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold mb-4 uppercase tracking-wider text-slate-400">Engineering Solutions</h4>
            <ul className="flex flex-col gap-2">
              <li><Link href="/services/power-conversion" className="text-sm text-slate-300 hover:text-accent transition-colors">Power Conversion</Link></li>
              <li><Link href="/services/industrial-automation" className="text-sm text-slate-300 hover:text-accent transition-colors">Industrial Automation</Link></li>
              <li><Link href="/services/control-automation" className="text-sm text-slate-300 hover:text-accent transition-colors">Control & Automation</Link></li>
              <li><Link href="/services/system-integration" className="text-sm text-slate-300 hover:text-accent transition-colors">EE&I System Integration</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold mb-4 uppercase tracking-wider text-slate-400">Services & Sourcing</h4>
            <ul className="flex flex-col gap-2">
              <li><Link href="/services/reverse-engineering" className="text-sm text-slate-300 hover:text-accent transition-colors">Reverse Engineering</Link></li>
              <li><Link href="/services/engineering-support" className="text-sm text-slate-300 hover:text-accent transition-colors">Engineering Services</Link></li>
              <li><Link href="/services/components-supply" className="text-sm text-slate-300 hover:text-accent transition-colors">Industrial Components</Link></li>
              <li><Link href="/contact" className="text-sm text-slate-300 hover:text-accent transition-colors">Request Quote</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold mb-4 uppercase tracking-wider text-slate-400">Contact</h4>
            <ul className="flex flex-col gap-2">
              <li className="text-sm text-slate-300">admin@mendex.in</li>
              <li className="text-sm text-slate-300">+91 96655 14562</li>
              <li><Link href="/about" className="text-sm text-slate-300 hover:text-accent transition-colors">About MENDEX</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} Mendex Technology Services LLP. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-xs text-slate-400 hover:text-white cursor-pointer transition-colors">LinkedIn</span>
            <span className="text-xs text-slate-400 hover:text-white cursor-pointer transition-colors">Twitter</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
