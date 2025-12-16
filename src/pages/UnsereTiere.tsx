import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
      "In unserem Stall befinden sich Kühe und Kälber von zwei preisgekrönten Braun-Swiss- Zuchtfamilien.",
      "Bei der Aufzucht ist uns aber nicht nur die Abstammung wichtig, sondern auch, dass all unsere Tiere genügend Platz und die Möglichkeit auf Freigang haben.",
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
      label: "Erfahren Sie hier mehr über die irischen Dexter",
      href: "https://swissdexters.ch/",
    },
  },
  {
    title: "Unsere Schafe",
    subtitle: "Heidschnucken für Landschaftspflege",
    description: [
      "Fast zeitgleich mit unserer Hündin sind auch fünf Heidschnucken-Schafe auf dem Hof eingezogen.",
      "Frida, Helga, Olga, Rosa und Wilma helfen uns nicht nur bei der Landschaftspflege, indem sie die Stauden in den Weiden fressen, sondern versorgen uns auch mit Wolle für wasserdichte Filzhüte oder wärmende Filzhausschuhe.",
    ],
    image: tiereSchaf,
  },
  {
    title: "Unsere Hühner",
    subtitle: "Schweizer & Appenzeller Freilandhühner",
    description: [
      "2020 ging der Hühner-Wunsch der Bauernfrauen in Erfüllung und zwei Schweizer und zwei Appenzeller Hühner zogen ihr neues Zuhause.",
      "Sie sind wortwörtlich Bio-Freiland-Hühner und dürfen sich auf dem ganzen Hof frei bewegen. Zur Übernachtung steht ihnen ein fahrbarer Hühnerstall zur Verfügung, in welchem sie auch fast täglich je ein Ei legen.",
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

      {/* Hero */}
      <section
        id="tiere"
        className="relative pt-32 pb-20 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${tiereHero})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bark/70 via-bark/60 to-background" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl text-cream">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-cream/20 text-cream text-sm font-semibold mb-4">
              Vielfalt auf 1'000 m.ü.M.
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Unsere Tiere
            </h1>
            <p className="font-body text-lg md:text-xl text-cream/90 leading-relaxed">
              Auf dem Biohof Halten leben unsere Tiere in Mutterkuh-Haltung mit viel Freilauf,
              frischer Bergluft und respektvollem Umgang. Seit 2003 führen wir den Hof rein
              biologisch – Gesundheit, Platz und Ruhe stehen für uns an erster Stelle.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-4">
              Lerne unsere Hofbewohner kennen
            </h2>
            <p className="font-body text-muted-foreground">
              Vom preisgekrönten Braunvieh bis zu den neugierigen Katzen – jedes Tier hat seinen Platz,
              seine Aufgabe und bekommt die Zeit, die es braucht.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 shadow-elegant">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {animalGroups.map((animal) => (
                <article
                  key={animal.title}
                  className="min-w-full grid md:grid-cols-2 bg-card"
                >
                  <div className="relative h-64 md:h-full">
                    <img
                      src={animal.image}
                      alt={animal.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bark/30 to-transparent" />
                  </div>
                  <div className="p-6 md:p-10 flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-semibold text-primary/80 uppercase tracking-wide">
                        {animal.subtitle}
                      </p>
                      <h3 className="font-heading text-2xl md:text-3xl text-foreground">
                        {animal.title}
                      </h3>
                    </div>
                    <div className="font-body text-muted-foreground leading-relaxed space-y-3">
                      {animal.description.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    {animal.link && (
                      <a
                        href={animal.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                      >
                        {animal.link.label}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
              {animalGroups.map((animal, index) => (
                <button
                  key={animal.title}
                  className={`h-2.5 rounded-full transition-all ${
                    currentSlide === index
                      ? "w-8 bg-primary"
                      : "w-2.5 bg-border hover:bg-primary/60"
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Zu ${animal.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-cream/60 via-cream/50 to-forest/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-heading text-3xl text-bark font-bold">
              Noch mehr Eindrücke von unseren Tieren
            </h2>
            <p className="font-body text-lg text-bark/80">
              In der Galerie zeigen wir weitere Momente aus dem Alltag mit Kühen, Dexter-Rindern, Schafen,
              Hühnern, Katzen, Esel und natürlich Mali.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="lg"
                asChild
              >
                <a
                  href="https://www.biohofhalten.ch/impressionen/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Impressionen ansehen
                </a>
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                asChild
              >
                <a href="/#kontakt">
                  Kontakt aufnehmen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UnsereTiere;
