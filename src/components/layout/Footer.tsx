
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">M</span>
              </div>
              <span className="text-lg font-bold tracking-tight">Mendex</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Engineering enterprise software, intelligent platforms, and scalable digital products for the next generation of business.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Products</h4>
            <ul className="flex flex-col gap-2">
              <li><Link href="/products/ops-marketplace" className="text-sm text-muted-foreground hover:text-primary transition-colors">OPS Marketplace</Link></li>
              <li><Link href="/products/tender-intelligence" className="text-sm text-muted-foreground hover:text-primary transition-colors">AI Tender Intelligence</Link></li>
              <li><Link href="/products/vendor-readiness" className="text-sm text-muted-foreground hover:text-primary transition-colors">PSU Vendor Readiness</Link></li>
              <li><Link href="/products/mendex-one" className="text-sm text-muted-foreground hover:text-primary transition-colors">MendexOne CRM</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Company</h4>
            <ul className="flex flex-col gap-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="flex flex-col gap-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Mendex Platform. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-xs text-muted-foreground">Twitter</span>
            <span className="text-xs text-muted-foreground">LinkedIn</span>
            <span className="text-xs text-muted-foreground">GitHub</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
