import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import heroImage from "@/assets/hero.avif";
import cat from "@/assets/impressions/cat.webp";
import cats from "@/assets/impressions/cats.webp";
import cows from "@/assets/impressions/cows.webp";
import cowsAvif from "@/assets/impressions/cows.avif";
import donkey from "@/assets/impressions/denkey.avif";
import dog from "@/assets/impressions/dog.webp";
import house from "@/assets/impressions/house.webp";
import house2 from "@/assets/impressions/house2.webp";

const galleryImages = [
  { src: house, alt: "Bauernhof im Abendlicht", span: "md:col-span-2 md:row-span-2" },
  { src: cowsAvif, alt: "Braunvieh auf der Weide", span: "" },
  { src: dog, alt: "Hofhund im Feld", span: "" },
  { src: cats, alt: "Katzen auf Entdeckungstour", span: "md:row-span-2" },
  { src: donkey, alt: "Esel im Stall", span: "" },
  { src: cows, alt: "Kühe im Sonnenschein", span: "" },
  { src: house2, alt: "Biohof mit Weiden", span: "md:col-span-2" },
  { src: cat, alt: "Verschmuste Hofkatze", span: "" },
];

const Impressionen = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = (e?: React.MouseEvent | KeyboardEvent) => {
    e?.stopPropagation?.();
    setActiveIndex(null);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") closeLightbox(e);
      if (e.key === "ArrowRight")
        setActiveIndex((prev) => (prev === null ? prev : (prev + 1) % galleryImages.length));
      if (e.key === "ArrowLeft")
        setActiveIndex((prev) =>
          prev === null ? prev : (prev - 1 + galleryImages.length) % galleryImages.length
        );
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <PageHero
        title="Impressionen"
        subtitle="Momentaufnahmen von unserem Biohof: Tiere, Natur und Menschen auf 1'000 m.ü.M."
        kicker="Biohof Halten"
        image={heroImage}
        alignment="center"
      />

      <main>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
              {galleryImages.map((image) => (
                <figure
                  key={image.alt}
                  className={`relative overflow-hidden rounded-sm ${image.span}`}
                >
                  <a
                    href={image.src}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveIndex(galleryImages.findIndex((item) => item.alt === image.alt));
                    }}
                    className="block h-full"
                    aria-label={`${image.alt} in voller Grösse ansehen`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-110"
                    />
                    <figcaption className="absolute inset-0 bg-gradient-to-t from-bark/80 via-bark/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end">
                      <span className="p-4 text-cream font-body text-xs uppercase tracking-[0.18em]">
                        {image.alt}
                      </span>
                    </figcaption>
                  </a>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {activeIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-bark/95 backdrop-blur-md flex items-center justify-center px-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative max-w-5xl w-full max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                className="absolute top-0 right-0 -mt-10 font-heading text-2xl font-light text-cream/70 hover:text-cream transition-colors duration-300 z-10 pr-1"
                onClick={closeLightbox}
                aria-label="Schliessen"
              >
                ×
              </button>

              <div className="relative rounded-sm overflow-hidden">
                <img
                  src={galleryImages[activeIndex].src}
                  alt={galleryImages[activeIndex].alt}
                  className="w-full max-h-[70vh] object-contain bg-bark/60"
                />
                <p className="absolute bottom-3 left-4 text-cream font-body text-xs uppercase tracking-[0.18em]">
                  {galleryImages[activeIndex].alt}
                </p>
              </div>

              {/* Prev / Next */}
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
                <button
                  className="pointer-events-auto -ml-12 font-heading text-3xl font-light text-cream/60 hover:text-cream transition-colors duration-300 w-10 flex items-center justify-center"
                  aria-label="Vorheriges Bild"
                  onClick={() =>
                    setActiveIndex((prev) =>
                      prev === null ? prev : (prev - 1 + galleryImages.length) % galleryImages.length
                    )
                  }
                >
                  ‹
                </button>
                <button
                  className="pointer-events-auto -mr-12 font-heading text-3xl font-light text-cream/60 hover:text-cream transition-colors duration-300 w-10 flex items-center justify-center"
                  aria-label="Nächstes Bild"
                  onClick={() =>
                    setActiveIndex((prev) =>
                      prev === null ? prev : (prev + 1) % galleryImages.length
                    )
                  }
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Impressionen;
