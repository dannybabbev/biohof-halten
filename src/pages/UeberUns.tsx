import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import grabBertozzi from "@/assets/uber-uns/grab-bertozzi.webp";
import grabHubli from "@/assets/uber-uns/grab-hubli.avif";
import bioKnospe from "@/assets/docs/Bio-Knospe_AnerkGrab.pdf";
import zuchtfamilie from "@/assets/docs/Zuchtfamilie_Grab.pdf";
import heroImage from "@/assets/hero.avif";

const families = [
  {
    family: "Fam. Grab-Bertozzi",
    names: "Lukas und Raphaela",
    image: grabBertozzi,
    paragraphs: [
      "Lukas ist gelernter Landwirt EFZ und arbeitet seit 2010 auf unserem Hof. Seit 2016 bewirtschaftet er den Betrieb zusammen mit seinem Vater in der Generationengemeinschaft.",
      "Raphaela ist gelernte Sek l-Lehrerin und kümmert sich neben ihrem Beruf um die Hof-Finanzen und die Direktvermarktung.",
    ],
  },
  {
    family: "Fam. Grab-Hubli",
    names: "Doris und Martin",
    image: grabHubli,
    paragraphs: [
      "Doris ist die gute Seele unseres Hofes. Sie unterstützt uns bei jeglichen Arbeiten und hegt und pflegt unsere Gemüsegärten.",
      "Martin ist ebenfalls gelernter Landwirt EFZ und leidenschaftlicher Braun-Swiss-Züchter, seit Mai 2021 hat er zudem zwei eingetragene Zuchtfamilien. 2003 baute er den Stall um und wechselte von der konventionellen auf die biologische Landwirtschaft.",
    ],
  },
];

const documents = [
  { label: "Bio-Knospe", href: bioKnospe },
  { label: "Zuchtfamilien-Urkunde", href: zuchtfamilie },
];

const UeberUns = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <PageHero
        title="Über Uns"
        subtitle="Lernen Sie die Familien kennen, die mit Herzblut den Biohof Halten prägen."
        kicker="Zwei Generationen · Ein Hof"
        image={heroImage}
        alignment="center"
      />

      <main>
        {/* Family Profiles */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-0">
              {families.map((family, index) => (
                <article
                  key={family.family}
                  className={`grid md:grid-cols-[1.2fr_1fr] gap-0 items-stretch overflow-hidden border-t border-gold/20 ${
                    index === families.length - 1 ? "border-b border-gold/20" : ""
                  }`}
                >
                  <div className="p-8 md:p-12 space-y-4">
                    <p className="font-body text-xs tracking-[0.18em] uppercase text-gold/80">
                      {family.family}
                    </p>
                    <h2 className="font-heading text-2xl font-light tracking-tight text-foreground">
                      {family.names}
                    </h2>
                    <div className="font-body text-sm text-muted-foreground leading-relaxed space-y-4">
                      {family.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                  <div className="relative min-h-[260px]">
                    <img
                      src={family.image}
                      alt={family.family}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bark/15 to-transparent" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Stats & Certificates */}
        <section className="py-20 border-t border-border/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-2">
              <div className="space-y-3">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-gold/70">Hofnummer</p>
                <p className="font-heading text-6xl font-light text-foreground">10562</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Unsere offizielle Betriebsnummer für alle Nachweise und Zertifizierungen.
                </p>
              </div>

              <div className="space-y-4">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-gold/70">Zertifikate & Nachweise</p>
                <h3 className="font-heading text-2xl font-light text-foreground">Aktuelle Dokumente</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Unsere Zertifizierungen zum Download.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {documents.map((doc) => (
                    <a
                      key={doc.label}
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center border border-earth/40 text-earth text-xs uppercase tracking-widest px-4 py-2 rounded-sm hover:bg-earth hover:text-cream transition-all duration-500"
                    >
                      {doc.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UeberUns;
