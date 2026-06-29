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
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">Power Solutions</Link>
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
          <Link href="/services" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Power Solutions</Link>
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
