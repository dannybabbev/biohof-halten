import logo from "@/assets/logo.avif";

export const Footer = () => {
  return (
    <footer className="bg-bark text-cream border-t border-gold/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Biohof Halten"
                className="h-9 w-9 object-contain"
              />
              <span className="font-body text-sm font-normal tracking-[0.2em] uppercase">
                Biohof Halten
              </span>
            </div>
            <p className="font-heading italic font-light text-cream/60 text-sm tracking-wide">
              Biohof auf 1'000 m.ü.M.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <nav className="flex flex-col gap-3">
            {[
              { label: "Start", href: "/" },
              { label: "Fleisch ab Hof", href: "/fleisch-ab-hof" },
              { label: "Bestellen", href: "/bestellen" },
              { label: "Unsere Tiere", href: "/unsere-tiere" },
              { label: "Impressionen", href: "/impressionen" },
              { label: "Über Uns", href: "/ueber-uns" },
              { label: "Kontakt", href: "/kontakt" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-body text-xs tracking-[0.14em] uppercase text-cream/70 hover:text-cream transition-colors duration-300 w-fit"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Col 3: Contact */}
          <div className="flex flex-col gap-4">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-gold/70">Kontakt</p>
            <div className="font-body text-sm text-cream/80 space-y-1">
              <p className="font-medium text-cream">Familie Grab</p>
              <p>Biberegg, Rothenthurm SZ</p>
              <a
                href="mailto:biohof.halten@gmail.com"
                className="block text-cream/70 hover:text-cream transition-colors duration-300 mt-3"
              >
                biohof.halten@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 pt-6 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-cream/50 text-xs">
            © {new Date().getFullYear()} Biohof Halten
          </p>
          <p className="text-cream/30 text-xs tracking-widest uppercase">
            Handcrafted in der Schweiz
          </p>
        </div>
      </div>
    </footer>
  );
};
