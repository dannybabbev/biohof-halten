import heroImage from "@/assets/hero.avif";

export const Hero = () => {
  return (
    <section
      id="start"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-bark/75 via-bark/30 to-bark/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-bark/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl text-left">
          {/* Eyebrow */}
          <p className="font-body text-xs tracking-[0.25em] uppercase text-cream/60 mb-4 animate-fade-in">
            Biberegg · Rothenthurm SZ
          </p>

          {/* Gold hairline */}
          <div className="w-8 h-px bg-gold/60 mb-6 animate-reveal-line" />

          {/* Headline */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-cream mb-6 animate-fade-in-up">
            Biohof Halten
          </h1>

          {/* Subtitle */}
          <p className="font-body text-lg font-light text-cream/80 max-w-xl mb-10 animate-fade-in-delay-1">
            Der Biohof auf knapp 1'000 m.ü.M. in Biberegg von der Familie Grab geführt.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-start animate-fade-in-delay-2">
            <a
              href="/fleisch-ab-hof"
              className="inline-flex items-center justify-center px-8 py-3 font-body text-sm font-medium tracking-[0.1em] uppercase border border-cream/80 text-cream hover:bg-cream/10 transition-all duration-500 rounded-sm"
            >
              Fleisch ab Hof
            </a>
            <a
              href="#features"
              className="inline-flex items-center font-body text-sm text-cream/50 tracking-[0.2em] uppercase hover:text-cream/80 transition-colors duration-500"
            >
              Mehr erfahren ↓
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-body text-cream/40 text-xs tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-6 bg-cream/30 animate-reveal-line" />
      </div>
    </section>
  );
};
