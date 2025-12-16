import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.avif";

const navItems = [
  { label: "Start", href: "/" },
  { label: "Fleisch ab Hof", href: "/fleisch-ab-hof" },
  { label: "Unsere Tiere", href: "/unsere-tiere" },
  { label: "Über Uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/#kontakt" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Biohof Halten"
            className="h-12 w-12 object-contain transition-opacity duration-300"
          />
          <span className={`font-heading text-xl font-semibold hidden sm:block transition-colors duration-300 ${
            isScrolled ? "text-foreground" : "text-cream"
          }`}>
            Biohof Halten
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            item.href.startsWith("/#") ? (
              <a
                key={item.label}
                href={item.href}
                className={`font-body font-medium transition-colors duration-300 hover:opacity-80 ${
                  isScrolled ? "text-foreground" : "text-cream"
                }`}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className={`font-body font-medium transition-colors duration-300 hover:opacity-80 ${
                  isScrolled ? "text-foreground" : "text-cream"
                }`}
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-cream"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-cream"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border mt-2">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              item.href.startsWith("/#") ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-body font-medium text-foreground py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="font-body font-medium text-foreground py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
