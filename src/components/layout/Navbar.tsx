"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Mendex</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-accent transition-colors">Home</Link>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-accent transition-colors outline-none cursor-pointer">
                Services <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64 p-2 bg-white/95 backdrop-blur-md border border-border rounded-xl shadow-xl">
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer hover:bg-muted/50 p-2">
                  <Link href="/services" className="flex flex-col gap-0.5">
                    <span className="font-semibold text-sm">All Solutions</span>
                    <span className="text-xs text-muted-foreground">Overview of engineering capabilities</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer hover:bg-muted/50 p-2">
                  <Link href="/services/power-conversion" className="flex flex-col gap-0.5">
                    <span className="font-semibold text-sm">Power Conversion Solutions</span>
                    <span className="text-xs text-muted-foreground">Custom power systems & chargers</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer hover:bg-muted/50 p-2">
                  <Link href="/services/industrial-automation" className="flex flex-col gap-0.5">
                    <span className="font-semibold text-sm">Industrial Automation & Control</span>
                    <span className="text-xs text-muted-foreground">PLCs, SCADA & IIoT systems</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer hover:bg-muted/50 p-2">
                  <Link href="/services/control-automation" className="flex flex-col gap-0.5">
                    <span className="font-semibold text-sm">Control & Automation Systems</span>
                    <span className="text-xs text-muted-foreground">Bespoke control panels & monitoring</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer hover:bg-muted/50 p-2">
                  <Link href="/services/system-integration" className="flex flex-col gap-0.5">
                    <span className="font-semibold text-sm">EE&I System Integration</span>
                    <span className="text-xs text-muted-foreground">Unified electrical & instrumentation</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer hover:bg-muted/50 p-2">
                  <Link href="/services/reverse-engineering" className="flex flex-col gap-0.5">
                    <span className="font-semibold text-sm">Reverse Engineering & Modernization</span>
                    <span className="text-xs text-muted-foreground">Legacy upgrades & PCB redesigns</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer hover:bg-muted/50 p-2">
                  <Link href="/services/engineering-support" className="flex flex-col gap-0.5">
                    <span className="font-semibold text-sm">Engineering Services</span>
                    <span className="text-xs text-muted-foreground">Design, testing & lifecycle support</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer hover:bg-muted/50 p-2">
                  <Link href="/services/components-supply" className="flex flex-col gap-0.5">
                    <span className="font-semibold text-sm">Industrial Components Supply</span>
                    <span className="text-xs text-muted-foreground">Sourcing critical parts globally</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/about" className="text-sm font-medium hover:text-accent transition-colors">About</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-accent transition-colors">Contact</Link>
          </div>

          <div className="hidden md:flex items-center">
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-white rounded-lg px-4" asChild>
              <Link href="/contact">Request Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-foreground/80 hover:text-foreground">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border py-4 px-4 flex flex-col gap-3">
          <Link href="/" className="text-base font-semibold hover:text-accent py-1" onClick={() => setIsOpen(false)}>Home</Link>
          
          <div className="flex flex-col gap-1.5 pl-2 border-l border-border">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Services</span>
            <Link href="/services" className="text-sm font-medium text-foreground/80 hover:text-accent" onClick={() => setIsOpen(false)}>All Solutions</Link>
            <Link href="/services/power-conversion" className="text-sm font-medium text-foreground/80 hover:text-accent" onClick={() => setIsOpen(false)}>Power Conversion</Link>
            <Link href="/services/industrial-automation" className="text-sm font-medium text-foreground/80 hover:text-accent" onClick={() => setIsOpen(false)}>Industrial Automation</Link>
            <Link href="/services/control-automation" className="text-sm font-medium text-foreground/80 hover:text-accent" onClick={() => setIsOpen(false)}>Control & Automation Systems</Link>
            <Link href="/services/system-integration" className="text-sm font-medium text-foreground/80 hover:text-accent" onClick={() => setIsOpen(false)}>EE&I System Integration</Link>
            <Link href="/services/reverse-engineering" className="text-sm font-medium text-foreground/80 hover:text-accent" onClick={() => setIsOpen(false)}>Reverse Engineering</Link>
            <Link href="/services/engineering-support" className="text-sm font-medium text-foreground/80 hover:text-accent" onClick={() => setIsOpen(false)}>Engineering Services</Link>
            <Link href="/services/components-supply" className="text-sm font-medium text-foreground/80 hover:text-accent" onClick={() => setIsOpen(false)}>Industrial Components Supply</Link>
          </div>

          <Link href="/about" className="text-base font-semibold hover:text-accent py-1" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" className="text-base font-semibold hover:text-accent py-1" onClick={() => setIsOpen(false)}>Contact</Link>
          <hr className="border-border my-1" />
          <Button className="w-full bg-accent hover:bg-accent/90 text-white rounded-lg" asChild onClick={() => setIsOpen(false)}>
            <Link href="/contact">Request Quote</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
