import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Truck, Package, FileText, Mail } from "lucide-react";
import steakImage from "@/assets/steak.webp";
import heroImage from "@/assets/hero.avif";
import bestellformular from "@/assets/docs/Bestellformular.pdf";

const FleischAbHof = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bark/70 via-bark/55 to-background" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-cream">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
              Fleisch ab Hof
            </h1>
            <p className="font-body text-lg md:text-xl text-cream/90 mb-8">
              Frisches Bio-Fleisch direkt vom Bauernhof
            </p>
          </div>
        </div>
      </section>

      {/* Next Sale Announcement */}
      <section className="py-8 bg-primary/10 border-y border-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <Calendar className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <p className="font-heading text-lg md:text-xl text-foreground font-semibold">
                Nächster Bio-Kalbfleisch-Verkauf (10 mon. Kalb) am 14. November 2025 von 18:00 bis 20:00
              </p>
              <p className="font-body text-muted-foreground mt-1">
                mit Kaffee und Austausch. Bestellungen nehmen wir gerne ab sofort entgegen!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-6 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-center justify-center gap-3 text-center">
            <Truck className="w-5 h-5 text-forest flex-shrink-0" />
            <p className="font-body text-muted-foreground">
              Abholung in diesem Zeitraum oder Lieferung mit Aufpreis von 1.50 CHF pro Kilometer möglich.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Mischpakete */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl text-foreground mb-2">
                  Bio Kalbfleisch Mischpakete
                </h2>
                <p className="font-heading text-2xl text-primary font-semibold">
                  39.- CHF pro Kilogramm
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border shadow-soft">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full">
                    Neu
                  </span>
                  <h3 className="font-heading text-xl text-foreground">
                    Mischpakete Gross mit Rabatt
                  </h3>
                </div>
                <p className="font-body text-muted-foreground mb-4">
                  Pro 1/4-Kalb gibt es einen Rabatt von 2.5%:
                </p>
                <ul className="space-y-2 font-body">
                  <li className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-foreground">1/4-Kalb Mischpaket à 39.-/kg</span>
                    <span className="text-primary font-semibold">– 2.5%</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-foreground">1/2-Kalb Mischpaket à 39.-/kg</span>
                    <span className="text-primary font-semibold">– 5%</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-foreground">3/4-Kalb Mischpaket à 39.-/kg</span>
                    <span className="text-primary font-semibold">– 7.5%</span>
                  </li>
                  <li className="flex justify-between items-center py-2">
                    <span className="text-foreground">1/1-Kalb Mischpaket à 39.-/kg</span>
                    <span className="text-primary font-semibold">– 10%</span>
                  </li>
                </ul>
              </div>

              <p className="font-body text-muted-foreground">
                Mischpakete können in <strong className="text-foreground">5kg</strong> (Paketgewicht zwischen 4.5-5.5kg) oder <strong className="text-foreground">10kg</strong> (Paketgewicht zwischen 9.5-10.5kg) Grössen bestellt werden.
              </p>
            </div>

            {/* Right Column - Package Contents */}
            <div className="space-y-8">
              <div className="rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={steakImage}
                  alt="Bio Kalbfleisch Mischpaket"
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="bg-cream/30 rounded-2xl p-6 border border-earth/20">
                <div className="flex items-center gap-2 mb-4">
                  <Package className="w-5 h-5 text-earth" />
                  <h3 className="font-heading text-xl text-foreground">
                    Inhalt der Mischpakete:
                  </h3>
                </div>
                <ul className="space-y-2 font-body text-foreground">
                  <li className="flex justify-between py-1">
                    <span>Hackfleisch</span>
                    <span className="text-muted-foreground">~1.5kg bzw. ~3kg</span>
                  </li>
                  <li className="flex justify-between py-1">
                    <span>Geschnetzeltes</span>
                    <span className="text-muted-foreground">~0.5kg bzw. ~1kg</span>
                  </li>
                  <li className="flex justify-between py-1">
                    <span>Voressen</span>
                    <span className="text-muted-foreground">~0.5kg bzw. ~1kg</span>
                  </li>
                  <li className="flex justify-between py-1">
                    <span>Braten</span>
                    <span className="text-muted-foreground">~0.75kg bzw. ~1.5kg</span>
                  </li>
                  <li className="flex justify-between py-1">
                    <span>Steak</span>
                    <span className="text-muted-foreground">~0.5kg bzw. ~1kg</span>
                  </li>
                  <li className="flex justify-between py-1">
                    <span>Koteletten</span>
                    <span className="text-muted-foreground">~0.5kg bzw. ~1kg</span>
                  </li>
                  <li className="flex justify-between py-1">
                    <span>Schnitzel</span>
                    <span className="text-muted-foreground">~0.75kg bzw. ~1.5kg</span>
                  </li>
                </ul>
                <p className="font-body text-sm text-muted-foreground mt-4 pt-4 border-t border-earth/20">
                  Die Produkte sind in der Standardgrösse 2 Portionen (~300g pro Beutel) abgepackt und vakuumiert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Halbes oder ganzes Tier */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl text-foreground mb-2">
              Halbes oder ganzes Tier
            </h2>
            <p className="font-heading text-2xl text-primary font-semibold mb-6">
              34.- CHF oder 32.- CHF pro Kilogramm
            </p>
            
            <p className="font-body text-muted-foreground mb-8">
              Auf Vorbestellung können für Gastronomie-Betriebe oder Privathaushalte halbe oder ganze Kälber / Rinder zerlegt und in Grosspackungen vakuumiert gekauft werden.
            </p>

            <div className="bg-card rounded-2xl p-6 border border-border shadow-soft mb-8">
              <h3 className="font-heading text-xl text-foreground mb-4">
                Im Paket "halbes" bzw. "ganzes Kalb" vorhanden:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {["Filet", "Hackfleisch", "Geschnetzeltes", "Voressen", "Braten", "Steak", "Koteletten", "Haxen", "Schnitzel"].map((item) => (
                  <span key={item} className="bg-cream/50 text-foreground px-4 py-2 rounded-lg text-center font-body">
                    {item}
                  </span>
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground mt-4">
                Je nach Körpergewicht variiert die Paketgrösse zwischen 45-50kg bzw. 90-100kg.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spezialitäten */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl text-foreground mb-4">
              Spezialitäten
            </h2>
            <p className="font-body text-muted-foreground mb-8">
              Je nach Vorrat können bei Abholung der Bestellung weitere Spezialitäten dazugekauft werden:
            </p>

            <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-soft">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {[
                  { name: "Filet", price: "11.00 CHF" },
                  { name: "Hackfleisch", price: "3.50 CHF" },
                  { name: "Geschnetzeltes", price: "6.90 CHF" },
                  { name: "Voressen", price: "4.00 CHF" },
                  { name: "Braten", price: "7.30 CHF" },
                  { name: "Steak", price: "8.50 CHF" },
                  { name: "Koteletten", price: "6.50 CHF" },
                  { name: "Haxen", price: "4.20 CHF" },
                  { name: "Schnitzel", price: "8.90 CHF" },
                ].map((item, index) => (
                  <div
                    key={item.name}
                    className={`flex justify-between items-center p-4 ${
                      index % 2 === 0 ? "bg-card" : "bg-muted/30"
                    } border-b border-border/50 last:border-b-0`}
                  >
                    <span className="font-body text-foreground">{item.name}</span>
                    <span className="font-heading text-primary font-semibold">
                      {item.price} <span className="text-xs text-muted-foreground font-normal">pro 100g</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="font-body text-sm text-muted-foreground mt-4">
              Bitte geben Sie Ihren Spezialitätenwunsch bei der Bestellung unter Bemerkung an. Wir werden versuchen, diese zu berücksichtigen.
            </p>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section className="py-16 bg-gradient-to-b from-forest/10 to-earth/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl text-foreground mb-4">
              Jetzt bestellen
            </h2>
            <p className="font-body text-muted-foreground mb-8">
              Bestellen Sie ganz einfach online oder laden Sie das PDF-Bestellformular herunter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a
                  href="https://forms.office.com/Pages/ResponsePage.aspx?id=lo6hBWM2BEuhbYJj383oPf0H53KPSl5IuXT4ea5p15ZUNThNNUFDMU5ROFYwVjVXNTlIT1RPSEE0WS4u"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Online-Bestellformular
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a
                  href={bestellformular}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PDF herunterladen
                </a>
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span className="font-body text-sm">
                Oder senden Sie das ausgefüllte Formular an:{" "}
                <a href="mailto:biohof.halten@gmail.com" className="text-primary hover:underline">
                  biohof.halten@gmail.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FleischAbHof;
