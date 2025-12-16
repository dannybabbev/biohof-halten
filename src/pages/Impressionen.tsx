import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
      if (e.key === "ArrowRight") setActiveIndex((prev) => (prev === null ? prev : (prev + 1) % galleryImages.length));
      if (e.key === "ArrowLeft") setActiveIndex((prev) =>
        prev === null ? prev : (prev - 1 + galleryImages.length) % galleryImages.length
      );
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bark/70 via-bark/55 to-background" />

          <div className="relative container mx-auto px-4 text-center max-w-3xl space-y-6 text-cream">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
              Impressionen
            </h1>
            <p className="font-body text-lg text-cream/90 leading-relaxed">
              Momentaufnahmen von unserem Biohof: Tiere, Natur und Menschen, die den Alltag auf 1'000 m.ü.M.
              prägen.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[180px] md:auto-rows-[220px] gap-4 md:gap-6">
              {galleryImages.map((image) => (
                <figure
                  key={image.alt}
                  className={`relative overflow-hidden rounded-2xl shadow-elegant border border-border/60 ${image.span}`}
                >
                  <a
                    href={image.src}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveIndex(galleryImages.findIndex((item) => item.alt === image.alt));
                    }}
                    className="block h-full"
                    aria-label={`${image.alt} in voller Größe ansehen`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <figcaption className="absolute inset-0 bg-gradient-to-t from-bark/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                      <span className="p-4 text-cream font-semibold drop-shadow-soft">
                        {image.alt}
                      </span>
                    </figcaption>
                  </a>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {activeIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative max-w-5xl w-full max-h-[80vh] bg-bark/80 rounded-2xl overflow-hidden border border-cream/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute top-3 right-3 bg-black/70 text-cream px-3 py-1 rounded-full text-sm font-semibold hover:bg-black/90 transition-colors z-10"
                onClick={closeLightbox}
              >
                Schließen
              </button>
              <div className="relative">
                <img
                  src={galleryImages[activeIndex].src}
                  alt={galleryImages[activeIndex].alt}
                  className="w-full max-h-[70vh] object-contain bg-black/60"
                />
                <p className="absolute bottom-3 left-4 text-cream font-semibold drop-shadow-soft">
                  {galleryImages[activeIndex].alt}
                </p>
              </div>
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 pointer-events-none">
                <button
                  className="pointer-events-auto bg-black/50 hover:bg-black/70 text-cream rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold"
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
                  className="pointer-events-auto bg-black/50 hover:bg-black/70 text-cream rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold"
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
