import { FileText } from "lucide-react";
import bestellformular from "@/assets/docs/Bestellformular.pdf";

export const OrderSection = () => {
  return (
    <section id="kontakt" className="py-24 bg-bark text-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">

          {/* Left: CTA */}
          <div>
            <div className="w-8 h-px bg-gold/60 mb-8" />
            <h2 className="font-heading text-4xl md:text-5xl font-light tracking-tight mb-6">
              <em className="not-italic font-light italic">Bio-Fleisch</em>{" "}bestellen
            </h2>
            <p className="font-body text-base font-light text-cream/75 mb-10 leading-relaxed">
              Bestellen Sie ganz einfach online Bio-Kalbsfleisch ab Hof. Oder laden Sie das PDF-Bestellformular herunter und senden Sie es ausgefüllt an uns.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="/bestellen"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 font-body text-sm font-medium tracking-[0.1em] uppercase border border-cream/70 text-cream hover:bg-cream/10 transition-all duration-500 rounded-sm"
              >
                Online bestellen
              </a>
              <a
                href={bestellformular}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm text-cream/55 tracking-[0.15em] uppercase hover:text-cream/80 transition-colors duration-500"
              >
                <FileText className="w-4 h-4" />
                PDF-Formular
              </a>
            </div>
          </div>

          {/* Right: Contact info */}
          <div className="lg:pl-8 lg:border-l border-cream/10">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-gold/70 mb-6">Kontakt</p>
            <div className="space-y-4">
              {[
                { label: "Hof", value: "Biohof Halten" },
                { label: "Familie", value: "Familie Grab" },
                { label: "Ort", value: "Biberegg, Rothenthurm SZ" },
              ].map((item) => (
                <div key={item.label} className="pb-4 border-b border-cream/10">
                  <p className="font-body text-xs tracking-[0.14em] uppercase text-gold/60 mb-1">{item.label}</p>
                  <p className="font-body text-base text-cream">{item.value}</p>
                </div>
              ))}
              <div className="pb-4">
                <p className="font-body text-xs tracking-[0.14em] uppercase text-gold/60 mb-1">E-Mail</p>
                <a
                  href="mailto:biohof.halten@gmail.com"
                  className="font-body text-base text-cream hover:text-cream/80 transition-colors duration-300"
                >
                  biohof.halten@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
