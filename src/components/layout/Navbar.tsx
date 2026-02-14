
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X, Landmark, Briefcase } from "lucide-react";
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
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors focus:outline-none">
                Products <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                <DropdownMenuItem asChild>
                  <Link href="/products/ops-marketplace" className="flex flex-col items-start gap-1 p-3">
                    <span className="font-bold">OPS Marketplace</span>
                    <span className="text-xs text-muted-foreground">Expert Matching Platform</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/tender-intelligence" className="flex flex-col items-start gap-1 p-3">
                    <span className="font-bold">AI Tender Intelligence</span>
                    <span className="text-xs text-muted-foreground">Analyze Tenders in Minutes</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/vendor-readiness" className="flex flex-col items-start gap-1 p-3">
                    <span className="font-bold">PSU Vendor Readiness</span>
                    <span className="text-xs text-muted-foreground">Get Vendor-Ready Faster</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/mendex-one" className="flex flex-col items-start gap-1 p-3">
                    <span className="font-bold">MendexOne CRM</span>
                    <span className="text-xs text-muted-foreground">Workflow-Driven Sales</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/mendex-one-hrms" className="flex flex-col items-start gap-1 p-3">
                    <span className="font-bold">MendexOne HRMS</span>
                    <span className="text-xs text-muted-foreground">Modern HR Management</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors focus:outline-none">
                Services <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-80">
                <DropdownMenuItem asChild>
                  <Link href="/services" className="flex items-center gap-3 p-3">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <div className="flex flex-col">
                      <span className="font-bold">All Services</span>
                      <span className="text-xs text-muted-foreground">Our full expertise portfolio</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/government-compliance" className="flex items-center gap-3 p-3">
                    <Landmark className="w-5 h-5 text-accent" />
                    <div className="flex flex-col">
                      <span className="font-bold">Gov Business & Compliance</span>
                      <span className="text-xs text-muted-foreground">Registration & Statutory Infra</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
          </div>

          <div className="hidden md:flex items-center">
            <Button size="sm" asChild>
              <Link href="/contact">Work With Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border py-4 px-4 flex flex-col gap-4">
          <Link href="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Home</Link>
          <div className="flex flex-col gap-2 pl-4">
            <span className="text-muted-foreground text-sm uppercase font-bold">Products</span>
            <Link href="/products/ops-marketplace" className="text-lg" onClick={() => setIsOpen(false)}>OPS Marketplace</Link>
            <Link href="/products/tender-intelligence" className="text-lg" onClick={() => setIsOpen(false)}>AI Tender Intelligence</Link>
            <Link href="/products/vendor-readiness" className="text-lg" onClick={() => setIsOpen(false)}>PSU Vendor Readiness</Link>
            <Link href="/products/mendex-one" className="text-lg" onClick={() => setIsOpen(false)}>MendexOne CRM</Link>
            <Link href="/products/mendex-one-hrms" className="text-lg" onClick={() => setIsOpen(false)}>MendexOne HRMS</Link>
          </div>
          <div className="flex flex-col gap-2 pl-4">
            <span className="text-muted-foreground text-sm uppercase font-bold">Services</span>
            <Link href="/services" className="text-lg" onClick={() => setIsOpen(false)}>Overview</Link>
            <Link href="/services/government-compliance" className="text-lg" onClick={() => setIsOpen(false)}>Gov Compliance</Link>
          </div>
          <Link href="/about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
          <hr className="border-border" />
          <Button className="w-full" asChild onClick={() => setIsOpen(false)}>
            <Link href="/contact">Work With Us</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
