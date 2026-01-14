import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-border">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center">
              <span className="text-white font-bold text-lg">EC</span>
            </div>
            <span className="font-bold text-lg text-primary hidden sm:inline">
              Electro Center
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-secondary font-medium transition-colors">
              Home
            </Link>
            <Link href="/chi-siamo" className="text-foreground hover:text-secondary font-medium transition-colors">
              Chi Siamo
            </Link>
            <a
              href="tel:095448928"
              className="px-6 py-2 bg-secondary text-primary font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              Chiamaci
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <Link
              href="/"
              className="block py-2 text-foreground hover:text-secondary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/chi-siamo"
              className="block py-2 text-foreground hover:text-secondary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Chi Siamo
            </Link>
            <a
              href="tel:095448928"
              className="block mt-4 px-4 py-2 bg-secondary text-primary font-semibold rounded-lg text-center hover:shadow-lg transition-all"
            >
              Chiamaci
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
