interface PageHeroProps {
  title: string;
  subtitle?: string;
  kicker?: string;
  image: string;
  alignment?: "center" | "left";
}

export const PageHero = ({
  title,
  subtitle,
  kicker,
  image,
  alignment = "left",
}: PageHeroProps) => {
  const isCenter = alignment === "center";

  return (
    <section className="relative h-[420px] md:h-[480px] flex items-end overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bark/70 via-bark/35 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pb-16 md:pb-20">
        <div className={`max-w-3xl ${isCenter ? "mx-auto text-center" : ""}`}>
          {kicker && (
            <p className="font-body text-xs tracking-[0.22em] uppercase text-cream/50 mb-4">
              {kicker}
            </p>
          )}
          <div className={`w-8 h-px bg-gold/50 mb-5 ${isCenter ? "mx-auto" : ""}`} />
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-cream">
            {title}
          </h1>
          {subtitle && (
            <p className="font-body text-base font-light text-cream/75 max-w-xl mt-4 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
