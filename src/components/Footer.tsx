export const Footer = () => {
  return (
    <footer className="py-12 bg-bark text-cream">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-cream/20 border border-cream/40 flex items-center justify-center">
              <span className="font-heading font-bold text-cream">BH</span>
            </div>
            <span className="font-heading text-lg font-semibold">Biohof Halten</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#start" className="text-cream/80 hover:text-cream transition-colors">Start</a>
            <a href="#fleisch" className="text-cream/80 hover:text-cream transition-colors">Fleisch ab Hof</a>
            <a href="/unsere-tiere" className="text-cream/80 hover:text-cream transition-colors">Unsere Tiere</a>
            <a href="/ueber-uns" className="text-cream/80 hover:text-cream transition-colors">Über Uns</a>
            <a href="#kontakt" className="text-cream/80 hover:text-cream transition-colors">Kontakt</a>
          </nav>

          <p className="text-cream/60 text-sm">
            © {new Date().getFullYear()} Biohof Halten
          </p>
        </div>
      </div>
    </footer>
  );
};
