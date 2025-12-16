import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import grabBertozzi from "@/assets/uber-uns/grab-bertozzi.webp";
import grabHubli from "@/assets/uber-uns/grab-hubli.avif";

const families = [
  {
    family: "Fam. Grab-Bertozzi",
    names: "Lukas und Raphaela",
    image: grabBertozzi,
    paragraphs: [
      "Lukas ist gelernter Landwirt EFZ und arbeitet seit 2010 auf unserem Hof. Seit 2016 bewirtschaftet er den Betrieb zusammen mit seinem Vater in der  Generationengemein-schaft.",
      "Raphaela ist gelernte Sek l-Lehrerin und kümmert sich neben ihrem Beruf um die Hof-Finanzen und die Direktvermarktung .",
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
  {
    label: "Bio-Knospe",
    href: "https://storage.e.jimdo.com/file/b3fcab3f-af72-40b2-b0c0-f52188b575c3/Bio-Knospe_AnerkGrab.pdf",
  },
  {
    label: "Zuchtfamilien-Urkunde",
    href: "https://storage.e.jimdo.com/file/c8590b87-bcc6-4622-80c8-fb275cbff6ce/Zuchtfamilie_Grab.pdf",
  },
];

const UeberUns = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-b from-forest/15 via-cream/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
                Über Uns
              </h1>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Lernen Sie die Familien kennen, die mit Herzblut den Biohof Halten prägen.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                {documents.map((doc) => (
                  <a
                    key={doc.href}
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
                  >
                    {doc.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-10">
              {families.map((family) => (
                <article
                  key={family.family}
                  className="grid md:grid-cols-[1.2fr_1fr] gap-8 items-start bg-card rounded-3xl border border-border shadow-soft overflow-hidden"
                >
                  <div className="p-8 space-y-4">
                    <h2 className="font-heading text-xl text-primary uppercase tracking-wide">
                      {family.family}
                    </h2>
                    <h3 className="font-heading text-3xl text-foreground">
                      {family.names}
                    </h3>
                    <div className="font-body text-muted-foreground leading-relaxed space-y-4">
                      {family.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                  <div className="relative h-full min-h-[260px]">
                    <img
                      src={family.image}
                      alt={family.family}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bark/25 to-transparent" />
                  </div>
                </article>
              ))}

              <div className="bg-cream/50 border border-earth/30 rounded-2xl p-6 text-center space-y-4">
                <h3 className="font-heading text-2xl text-foreground">
                  Unsere Bio-Knospen-Anerkennung und die Zuchfamilien-Urkunde finden Sie hier
                </h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  {documents.map((doc) => (
                    <a
                      key={doc.label}
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-lifted transition-all"
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
