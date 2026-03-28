import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Calendar, Truck, Package, FileText, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import steakImage from "@/assets/steak.webp";
import heroImage from "@/assets/hero.avif";
import bestellformular from "@/assets/docs/Bestellformular.pdf";

const FleischAbHof = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <PageHero
        title="Fleisch ab Hof"
        subtitle="Frisches Bio-Fleisch direkt vom Bauernhof"
        kicker="Biohof Halten · Rothenthurm SZ"
        image={heroImage}
      />

      {/* Announcement Banner */}
      <section className="py-6 bg-gold/8 border-y border-gold/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-3">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
              <Calendar className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-heading text-lg font-light text-foreground">
                  Nächster Bio-Kalbfleisch-Verkauf (10 mon. Kalb) am 14. November 2025 von 18:00 bis 20:00
                </p>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  mit Kaffee und Austausch · Bestellungen nehmen wir gerne ab sofort entgegen
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-2 border-t border-gold/10">
              <Truck className="w-4 h-4 text-stone flex-shrink-0" />
              <p className="font-body text-sm text-muted-foreground">
                Abholung in diesem Zeitraum oder Lieferung mit Aufpreis von 1.50 CHF pro Kilometer möglich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

            {/* Left Column - Mischpakete */}
            <div className="space-y-10">
              <div>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-gold/70 mb-3">Standardangebot</p>
                <h2 className="font-heading text-3xl font-light text-foreground mb-2">
                  Bio Kalbfleisch Mischpakete
                </h2>
                <p className="font-heading text-2xl font-light text-earth">
                  39.— CHF pro Kilogramm
                </p>
              </div>

              {/* Discount table — left-border block style */}
              <div className="border-l-2 border-gold/40 pl-6 py-2 space-y-1">
                <p className="font-body text-xs tracking-[0.15em] uppercase text-gold/60 mb-4">
                  Mischpakete Gross mit Rabatt
                </p>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  Pro 1/4-Kalb gibt es einen Rabatt von 2.5%:
                </p>
                {[
                  { label: "1/4-Kalb Mischpaket à 39.—/kg", discount: "– 2.5%" },
                  { label: "1/2-Kalb Mischpaket à 39.—/kg", discount: "– 5%" },
                  { label: "3/4-Kalb Mischpaket à 39.—/kg", discount: "– 7.5%" },
                  { label: "1/1-Kalb Mischpaket à 39.—/kg", discount: "– 10%" },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-center py-2.5 border-b border-border/40 last:border-b-0">
                    <span className="font-body text-sm text-foreground">{row.label}</span>
                    <span className="font-heading text-base font-light text-primary">{row.discount}</span>
                  </div>
                ))}
              </div>

              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Mischpakete können in <strong className="text-foreground font-medium">5 kg</strong> (4.5–5.5 kg) oder <strong className="text-foreground font-medium">10 kg</strong> (9.5–10.5 kg) Grössen bestellt werden.
              </p>
            </div>

            {/* Right Column - Package Contents */}
            <div className="space-y-8">
              <div className="rounded-sm overflow-hidden">
                <img
                  src={steakImage}
                  alt="Bio Kalbfleisch Mischpaket"
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="rounded-sm border border-border/50 p-6">
                <div className="flex items-center gap-2 mb-5">
                  <Package className="w-4 h-4 text-gold/70" />
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-gold/70">
                    Inhalt der Mischpakete
                  </p>
                </div>
                <div className="space-y-0">
                  {[
                    { name: "Hackfleisch", amount: "~1.5 kg / ~3 kg" },
                    { name: "Geschnetzeltes", amount: "~0.5 kg / ~1 kg" },
                    { name: "Voressen", amount: "~0.5 kg / ~1 kg" },
                    { name: "Braten", amount: "~0.75 kg / ~1.5 kg" },
                    { name: "Steak", amount: "~0.5 kg / ~1 kg" },
                    { name: "Koteletten", amount: "~0.5 kg / ~1 kg" },
                    { name: "Schnitzel", amount: "~0.75 kg / ~1.5 kg" },
                  ].map((item) => (
                    <div key={item.name} className="flex justify-between py-2.5 border-b border-border/40 last:border-b-0">
                      <span className="font-body text-sm text-foreground">{item.name}</span>
                      <span className="font-body text-sm text-muted-foreground">{item.amount}</span>
                    </div>
                  ))}
                </div>
                <p className="font-body text-xs text-muted-foreground mt-4 pt-4 border-t border-border/40 leading-relaxed">
                  Die Produkte sind in der Standardgrösse 2 Portionen (~300 g pro Beutel) abgepackt und vakuumiert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Halbes oder ganzes Tier */}
      <section className="py-20 border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-gold/70 mb-3">Auf Vorbestellung</p>
            <h2 className="font-heading text-3xl font-light text-foreground mb-2">
              Halbes oder ganzes Tier
            </h2>
            <p className="font-heading text-2xl font-light text-earth mb-6">
              34.— CHF oder 32.— CHF pro Kilogramm
            </p>

            <p className="font-body text-sm text-muted-foreground mb-10 leading-relaxed max-w-2xl">
              Auf Vorbestellung können für Gastronomie-Betriebe oder Privathaushalte halbe oder ganze Kälber / Rinder zerlegt und in Grosspackungen vakuumiert gekauft werden.
            </p>

            <div className="rounded-sm border border-border/50 p-6">
              <p className="font-body text-xs tracking-[0.15em] uppercase text-gold/70 mb-5">
                Im Paket «halbes» bzw. «ganzes Kalb» vorhanden
              </p>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                {["Filet", "Hackfleisch", "Geschnetzeltes", "Voressen", "Braten", "Steak", "Koteletten", "Haxen", "Schnitzel"].map((item) => (
                  <span key={item} className="border border-border/60 rounded-sm text-xs tracking-wide uppercase text-foreground px-3 py-2 text-center font-body">
                    {item}
                  </span>
                ))}
              </div>
              <p className="font-body text-xs text-muted-foreground mt-5 pt-4 border-t border-border/40">
                Je nach Körpergewicht variiert die Paketgrösse zwischen 45–50 kg bzw. 90–100 kg.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spezialitäten */}
      <section className="py-20 border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-gold/70 mb-3">Je nach Vorrat</p>
            <h2 className="font-heading text-3xl font-light text-foreground mb-4">
              Spezialitäten
            </h2>
            <p className="font-body text-sm text-muted-foreground mb-8 leading-relaxed">
              Bei Abholung der Bestellung können weitere Spezialitäten dazugekauft werden.
            </p>

            <div className="rounded-sm border border-border/50 overflow-hidden">
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
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-center px-6 py-3.5 border-b border-border/40 last:border-b-0"
                >
                  <span className="font-body text-sm text-foreground">{item.name}</span>
                  <span className="font-heading text-base font-light text-primary">
                    {item.price} <span className="font-body text-xs text-muted-foreground">pro 100 g</span>
                  </span>
                </div>
              ))}
            </div>

            <p className="font-body text-xs text-muted-foreground mt-4 leading-relaxed">
              Bitte geben Sie Ihren Spezialitätenwunsch bei der Bestellung unter Bemerkung an. Wir versuchen, diese zu berücksichtigen.
            </p>
          </div>
        </div>
      </section>

      {/* Terminal CTA */}
      <section className="py-20 bg-bark text-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-8 h-px bg-gold/60 mx-auto mb-8" />
            <h2 className="font-heading text-3xl font-light tracking-tight mb-4">
              Jetzt bestellen
            </h2>
            <p className="font-body text-base font-light text-cream/70 mb-10 leading-relaxed">
              Bestellen Sie ganz einfach online oder laden Sie das PDF-Bestellformular herunter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/bestellen"
                className="inline-flex items-center gap-2 px-8 py-3 font-body text-sm font-medium tracking-[0.1em] uppercase border border-cream/70 text-cream hover:bg-cream/10 transition-all duration-500 rounded-sm"
              >
                <FileText className="w-4 h-4" />
                Online-Bestellformular
              </Link>
              <a
                href={bestellformular}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm text-cream/55 tracking-[0.15em] uppercase hover:text-cream/80 transition-colors duration-500"
              >
                <Mail className="w-4 h-4" />
                PDF herunterladen
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FleischAbHof;
