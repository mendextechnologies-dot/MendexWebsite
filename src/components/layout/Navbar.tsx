"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X, Landmark, Briefcase, Zap } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Mendex</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-accent transition-colors">Home</Link>
            
            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-accent transition-colors outline-none cursor-pointer">
                Products <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 p-2 bg-white/95 backdrop-blur-md border border-border rounded-xl shadow-xl">
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer hover:bg-muted/50 p-2">
                  <Link href="/products/ops-marketplace" className="flex flex-col gap-0.5">
                    <span className="font-semibold text-sm">OPS Marketplace</span>
                    <span className="text-xs text-muted-foreground">Expert matching & workspaces</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer hover:bg-muted/50 p-2">
                  <Link href="/products/mendex-one" className="flex flex-col gap-0.5">
                    <span className="font-semibold text-sm">MendexOne CRM</span>
                    <span className="text-xs text-muted-foreground">Workflow lead automation</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer hover:bg-muted/50 p-2">
                  <Link href="/products/swacomply" className="flex flex-col gap-0.5">
                    <span className="font-semibold text-sm">SwaComply AI</span>
                    <span className="text-xs text-muted-foreground">Compliance & registers</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-accent transition-colors outline-none cursor-pointer">
                Services <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 p-2 bg-white/95 backdrop-blur-md border border-border rounded-xl shadow-xl">
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer hover:bg-muted/50 p-2">
                  <Link href="/services" className="flex flex-col gap-0.5">
                    <span className="font-semibold text-sm">All Services</span>
                    <span className="text-xs text-muted-foreground">Browse our entire capabilities</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer hover:bg-muted/50 p-2">
                  <Link href="/services/government-compliance" className="flex flex-col gap-0.5">
                    <span className="font-semibold text-sm">Government Compliance</span>
                    <span className="text-xs text-muted-foreground">PSU readiness & registration</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer hover:bg-muted/50 p-2">
                  <Link href="/services/engineering-supply" className="flex flex-col gap-0.5">
                    <span className="font-semibold text-sm">Engineering & Supply</span>
                    <span className="text-xs text-muted-foreground">Custom power & cloud solutions</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/about" className="text-sm font-medium hover:text-accent transition-colors">About</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-accent transition-colors">Contact</Link>
          </div>

          <div className="hidden md:flex items-center">
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-white rounded-lg px-4" asChild>
              <Link href="/contact">Work With Us</Link>
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
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Products</span>
            <Link href="/products/ops-marketplace" className="text-sm font-medium text-foreground/80 hover:text-accent" onClick={() => setIsOpen(false)}>OPS Marketplace</Link>
            <Link href="/products/mendex-one" className="text-sm font-medium text-foreground/80 hover:text-accent" onClick={() => setIsOpen(false)}>MendexOne CRM</Link>
            <Link href="/products/swacomply" className="text-sm font-medium text-foreground/80 hover:text-accent" onClick={() => setIsOpen(false)}>SwaComply AI</Link>
          </div>

          <div className="flex flex-col gap-1.5 pl-2 border-l border-border">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Services</span>
            <Link href="/services" className="text-sm font-medium text-foreground/80 hover:text-accent" onClick={() => setIsOpen(false)}>All Services</Link>
            <Link href="/services/government-compliance" className="text-sm font-medium text-foreground/80 hover:text-accent" onClick={() => setIsOpen(false)}>Government Compliance</Link>
            <Link href="/services/engineering-supply" className="text-sm font-medium text-foreground/80 hover:text-accent" onClick={() => setIsOpen(false)}>Engineering & Supply</Link>
          </div>

          <Link href="/about" className="text-base font-semibold hover:text-accent py-1" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" className="text-base font-semibold hover:text-accent py-1" onClick={() => setIsOpen(false)}>Contact</Link>
          <hr className="border-border my-1" />
          <Button className="w-full bg-accent hover:bg-accent/90 text-white rounded-lg" asChild onClick={() => setIsOpen(false)}>
            <Link href="/contact">Work With Us</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
