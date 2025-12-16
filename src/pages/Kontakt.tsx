import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.avif";
import bestellformular from "@/assets/docs/Bestellformular.pdf";

const Kontakt = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bark/70 via-bark/55 to-background" />

          <div className="relative container mx-auto px-4 text-center max-w-3xl space-y-6 text-cream">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
              Kontakt
            </h1>
            <p className="font-body text-lg text-cream/90 leading-relaxed">
              Kontaktieren Sie uns gerne via E-Mail{" "}
              <a href="mailto:biohof.halten@gmail.com" className="underline underline-offset-4">
                biohof.halten@gmail.com
              </a>
            </p>
          </div>
        </section>

        <section id="kontakt" className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="bg-card rounded-2xl shadow-soft border border-border p-6 md:p-8 space-y-6">
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-2">
                    Schreiben Sie uns
                  </h2>
                  <p className="font-body text-muted-foreground">
                    Wir melden uns so schnell wie möglich.
                  </p>
                </div>

                <form className="space-y-4">
                  <div className="space-y-2">
                    <label className="block font-body text-sm text-muted-foreground" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 font-body focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block font-body text-sm text-muted-foreground" htmlFor="email">
                      E-Mail-Adresse <span className="text-primary">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 font-body focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block font-body text-sm text-muted-foreground" htmlFor="phone">
                      Telefonnummer
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 font-body focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block font-body text-sm text-muted-foreground" htmlFor="message">
                      Nachricht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 font-body focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Es gilt unsere Datenschutzerklärung.
                  </p>

                  <Button type="submit" variant="hero" size="lg" className="w-full md:w-auto">
                    Nachricht senden
                  </Button>
                </form>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-elegant border border-border h-full min-h-[320px]">
                <iframe
                  title="Biohof Halten Karte"
                  src="https://www.google.com/maps?q=Halten%202,%206418%20Rothenthurm&output=embed"
                  className="w-full h-full min-h-[320px]"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-card border border-border shadow-soft rounded-2xl p-8 space-y-6 text-center">
              <h3 className="font-heading text-2xl md:text-3xl font-bold">
                Bestellen Sie ganz einfach online Bio-Kalbsfleisch ab Hof
              </h3>
              <p className="font-body text-muted-foreground">
                Oder laden Sie das{" "}
                <a
                  href={bestellformular}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold underline underline-offset-4"
                >
                  PDF-Bestellformular
                </a>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  asChild
                >
                  <a
                    href="https://forms.office.com/Pages/ResponsePage.aspx?id=lo6hBWM2BEuhbYJj383oPf0H53KPSl5IuXT4ea5p15ZUNThNNUFDMU5ROFYwVjVXNTlIT1RPSEE0WS4u"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Online-Bestellformular
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Kontakt;
