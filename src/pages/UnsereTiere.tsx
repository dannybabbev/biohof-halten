import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import tiereHero from "@/assets/tiere.webp";
import tiereHund from "@/assets/tiere/tiere-hund.avif";
import tiereKuhe from "@/assets/tiere/tiere-kuhe.avif";
import tiereDexter from "@/assets/tiere/tiere-dexter.webp";
import tiereSchaf from "@/assets/tiere/toiere-schaf.avif";
import tiereHuhner from "@/assets/tiere/tiere-huhner.webp";
import tiereKatzen from "@/assets/tiere/tiere-katzen.webp";
import tiereEsel from "@/assets/tiere/tiere-esel.webp";

const animalGroups = [
  {
    title: "Unser Hund",
    subtitle: "Mali, Australischer Kelpie",
    description: [
      "Mali ist unser Australischer Kelpie und unterstützt uns tatkräftig bei der Arbeit.",
      "Sie ist im März 2019 geboren und ein junger Wirbelwind.",
    ],
    image: tiereHund,
  },
  {
    title: "Braun-Swiss Kühe und Kälber",
    subtitle: "Preisgekrönte Zuchtfamilien",
    description: [
      "In unserem Stall befinden sich Kühe und Kälber von zwei preisgekrönten Braun-Swiss-Zuchtfamilien.",
      "Bei der Aufzucht ist uns nicht nur die Abstammung wichtig, sondern auch, dass all unsere Tiere genügend Platz und die Möglichkeit auf Freigang haben.",
    ],
    image: tiereKuhe,
  },
  {
    title: "Irische Dexter",
    subtitle: "Seit 1995 in Mutterkuh-Haltung",
    description: [
      "Als dritter Bauernhof in der Schweiz haben wir 1995 mit der Haltung und Züchtung irischer Dexter begonnen. Auf unserem Hof leben sie in der Mutterkuh-Haltung, das bedeutet, dass die Rinder bis zum Weiterverkauf oder zur Schlachtung bei der Mutter bleiben.",
      "Die irischen Dexter sind leicht an ihrer Grösse zu erkennen. Sie sind kleiner als herkömmliches Rindvieh. Ein neugeborenes Kalb ist beispielsweise so gross wie unser ausgewachsener Kelpie.",
    ],
    image: tiereDexter,
    link: {
      label: "Mehr über die irischen Dexter",
      href: "https://swissdexters.ch/",
    },
  },
  {
    title: "Unsere Schafe",
    subtitle: "Heidschnucken für Landschaftspflege",
    description: [
      "Fast zeitgleich mit unserer Hündin sind auch fünf Heidschnucken-Schafe auf dem Hof eingezogen.",
      "Frida, Helga, Olga, Rosa und Wilma helfen uns nicht nur bei der Landschaftspflege, sondern versorgen uns auch mit Wolle für wasserdichte Filzhüte oder wärmende Filzhausschuhe.",
    ],
    image: tiereSchaf,
  },
  {
    title: "Unsere Hühner",
    subtitle: "Schweizer & Appenzeller Freilandhühner",
    description: [
      "2020 ging der Hühner-Wunsch der Bauernfrauen in Erfüllung und zwei Schweizer und zwei Appenzeller Hühner zogen ihr neues Zuhause.",
      "Sie sind wortwörtlich Bio-Freiland-Hühner und dürfen sich auf dem ganzen Hof frei bewegen. Zur Übernachtung steht ihnen ein fahrbarer Hühnerstall zur Verfügung.",
    ],
    image: tiereHuhner,
  },
  {
    title: "Unsere Katzen",
    subtitle: "Verschmuste Jägerinnen",
    description: [
      "Unsere vier verschmusten Jäger sind liebevolle und zutrauliche Hofkatzen, welche nie Nein zu Streicheleinheiten sagen würden.",
      "Mind. einmal im Jahr haben wir von unseren beiden Müttern (Mamma und June) Babykatzen, welche auf der Suche nach einem neuen Zuhause sind.",
    ],
    image: tiereKatzen,
  },
  {
    title: "Unser Esel und seine Gattin",
    subtitle: "Charles & Flora",
    description: [
      "Unser Esel Charles und seine Gattin Flora leben nun schon seit fast acht Jahren bei uns.",
      "Mit einem Stück Brot oder einer Kartoffel gewinnt man sofort ihr Herz und kann sie streicheln und striegeln.",
    ],
    image: tiereEsel,
  },
];

const UnsereTiere = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = animalGroups.length;

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 5000);
    return () => window.clearInterval(intervalId);
  }, [slideCount]);

  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <PageHero
        title="Unsere Tiere"
        subtitle="Auf dem Biohof Halten leben unsere Tiere in Mutterkuh-Haltung mit viel Freilauf, frischer Bergluft und respektvollem Umgang."
        kicker="Vielfalt auf 1'000 m.ü.M."
        image={tiereHero}
      />

      {/* Carousel Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <div className="w-8 h-px bg-gold mx-auto mb-6" />
            <h2 className="font-heading text-3xl font-light tracking-tight text-foreground">
              Lerne unsere Hofbewohner kennen
            </h2>
            <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed">
              Vom preisgekrönten Braunvieh bis zu den neugierigen Katzen — jedes Tier hat seinen Platz.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-sm border border-border/50 bg-card">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {animalGroups.map((animal) => (
                <article
                  key={animal.title}
                  className="min-w-full grid md:grid-cols-2 bg-card"
                >
                  <div className="relative h-64 md:h-full min-h-[280px]">
                    <img
                      src={animal.image}
                      alt={animal.title}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bark/20 to-transparent" />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col gap-4 justify-center">
                    <div className="flex flex-col gap-1.5">
                      <p className="font-body text-xs text-gold/80 tracking-[0.2em] uppercase">
                        {animal.subtitle}
                      </p>
                      <h3 className="font-heading text-2xl md:text-3xl font-light tracking-tight text-foreground">
                        {animal.title}
                      </h3>
                    </div>
                    <div className="font-body text-sm text-muted-foreground leading-relaxed space-y-3">
                      {animal.description.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    {animal.link && (
                      <a
                        href={animal.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-xs uppercase tracking-[0.18em] text-earth border-b border-earth/40 hover:border-earth transition-colors duration-300 pb-px w-fit mt-2"
                      >
                        {animal.link.label}
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {/* Dots */}
            <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
              {animalGroups.map((animal, index) => (
                <button
                  key={animal.title}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "w-6 bg-gold"
                      : "w-1.5 bg-border/60 hover:bg-gold/40"
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Zu ${animal.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Terminal CTA */}
      <section className="py-20 bg-bark text-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-8 h-px bg-gold/60 mx-auto mb-8" />
            <h2 className="font-heading text-3xl font-light tracking-tight mb-4">
              Noch mehr Eindrücke
            </h2>
            <p className="font-body text-base font-light text-cream/70 mb-10 leading-relaxed">
              In der Galerie zeigen wir weitere Momente aus dem Alltag mit Kühen, Dexter-Rindern, Schafen, Hühnern, Katzen, Esel und natürlich Mali.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/impressionen"
                className="inline-flex items-center justify-center px-8 py-3 font-body text-sm font-medium tracking-[0.1em] uppercase border border-cream/70 text-cream hover:bg-cream/10 transition-all duration-500 rounded-sm"
              >
                Impressionen ansehen
              </a>
              <a
                href="/kontakt"
                className="inline-flex items-center font-body text-sm text-cream/55 tracking-[0.2em] uppercase hover:text-cream/80 transition-colors duration-500"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UnsereTiere;
