import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.avif";

export const Hero = () => {
  return (
    <section
      id="start"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-bark/60 via-bark/40 to-bark/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 animate-fade-in-up">
          Biohof Halten
        </h1>
        <p className="font-body text-lg md:text-xl lg:text-2xl text-cream/90 max-w-3xl mx-auto mb-4 animate-fade-in-delay-1">
          Der Biohof auf knapp 1'000 m.ü.M. in Biberegg (Rothenthurm SZ) von der Familie Grab geführt und umfasst ca. 30 ha Land und 50 Stück Vieh.
        </p>
        <p className="font-body text-base md:text-lg text-cream/80 max-w-2xl mx-auto mb-10 animate-fade-in-delay-2">
          Mit viel Herz und Liebe ziehen wir nicht nur unsere Braun-Swiss und irischen Dexter Kühe und Kälber auf, sondern bewirtschaften auch unseren Wald und unser Berg- sowie Streuland.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
          <Button variant="hero" size="xl" asChild>
            <a href="#fleisch">Fleisch ab Hof</a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#kontakt">Kontakt</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-cream/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-cream/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};
