import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.avif";

const navItems = [
  { label: "Start", href: "/" },
  { label: "Fleisch ab Hof", href: "/fleisch-ab-hof" },
  { label: "Unsere Tiere", href: "/unsere-tiere" },
  { label: "Impressionen", href: "/impressionen" },
  { label: "Über Uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
];

const bestellenItem = { label: "Bestellen", href: "/bestellen" };

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  const linkClass = (href: string) =>
    `relative font-body text-sm font-medium tracking-[0.12em] uppercase transition-colors duration-500
    after:absolute after:bottom-0 after:left-0 after:h-px after:bg-current after:transition-all after:duration-300
    ${isActive(href) ? "after:w-full" : "after:w-0 hover:after:w-full"}
    ${isScrolled ? "text-foreground" : "text-cream"}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[padding,background-color,border-color,box-shadow] duration-500 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-sm border-b border-border/40 shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Biohof Halten"
            className="h-10 w-10 object-contain transition-opacity duration-300"
          />
          <div className={`hidden sm:flex items-center gap-3 transition-colors duration-500 ${
            isScrolled ? "text-foreground" : "text-cream"
          }`}>
            <span className="w-px h-5 bg-current opacity-30" />
            <span className="font-body text-base font-normal tracking-[0.2em] uppercase">
              Biohof Halten
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={linkClass(item.href)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to={bestellenItem.href}
            className={`font-body text-xs font-medium tracking-widest uppercase border rounded-sm px-3 py-1 transition-all duration-500
              ${isScrolled
                ? "border-foreground/40 text-foreground hover:border-foreground hover:bg-foreground/5"
                : "border-cream/60 text-cream hover:border-cream hover:bg-cream/10"
              }`}
          >
            {bestellenItem.label}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={`w-5 h-5 ${isScrolled ? "text-foreground" : "text-cream"}`} />
          ) : (
            <Menu className={`w-5 h-5 ${isScrolled ? "text-foreground" : "text-cream"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-bark text-cream border-t border-cream/10">
          <div className="container mx-auto px-4 py-6 flex flex-col">
            {[...navItems, bestellenItem].map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`font-heading text-2xl font-light tracking-wide py-4 border-b border-cream/10 transition-colors duration-300
                  ${isActive(item.href) ? "text-gold" : "text-cream hover:text-cream/80"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
