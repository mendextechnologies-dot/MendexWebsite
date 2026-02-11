
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
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/products/ops-marketplace">OPS Marketplace</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/mendex-one">MendexOne CRM</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">Services</Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">Log in</Button>
            <Button size="sm">Get Started</Button>
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
          <Link href="/" className="text-lg font-medium">Home</Link>
          <div className="flex flex-col gap-2 pl-4">
            <span className="text-muted-foreground text-sm uppercase font-bold">Products</span>
            <Link href="/products/ops-marketplace" className="text-lg">OPS Marketplace</Link>
            <Link href="/products/mendex-one" className="text-lg">MendexOne CRM</Link>
          </div>
          <Link href="/services" className="text-lg font-medium">Services</Link>
          <Link href="/about" className="text-lg font-medium">About</Link>
          <Link href="/contact" className="text-lg font-medium">Contact</Link>
          <hr className="border-border" />
          <Button className="w-full">Get Started</Button>
        </div>
      )}
    </nav>
  );
}
