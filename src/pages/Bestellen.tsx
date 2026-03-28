import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import heroImage from "@/assets/hero.avif";
import bestellformular from "@/assets/docs/Bestellformular.pdf";
import { FileText } from "lucide-react";

const zeitraumOptions = [
  { value: "Frühling (März/April)", label: "Frühling (März/April)" },
  { value: "Herbst (Oktober/November)", label: "Herbst (Oktober/November)" },
];

const vakuumOptions = [
  { value: "Klein (für 1-2 Personen)", label: "Klein (für 1-2 Personen)" },
  { value: "Normal (3-4 Personen)", label: "Normal (3-4 Personen)" },
  { value: "Grossverpackung (einzelne Teile in einem Beutel vakuumiert)", label: "Grossverpackung" },
];

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="font-body text-xs tracking-[0.18em] uppercase text-muted-foreground mb-4">
    {children}
  </p>
);

interface ChoiceCardGroupProps {
  name: string;
  options: { value: string; label: string }[];
  selected: string;
  onChange: (value: string) => void;
}

const ChoiceCardGroup = ({ name, options, selected, onChange }: ChoiceCardGroupProps) => (
  <div className="flex flex-col gap-2">
    {options.map((opt) => (
      <label
        key={opt.value}
        className={`flex items-center gap-3 border rounded-sm px-4 py-3 cursor-pointer transition-all duration-300 ${
          selected === opt.value
            ? "border-primary bg-primary/5"
            : "border-border/60 hover:border-primary/40"
        }`}
      >
        <input
          type="radio"
          name={name}
          value={opt.value}
          checked={selected === opt.value}
          onChange={() => onChange(opt.value)}
          className="accent-primary"
        />
        <span className="font-body text-sm text-foreground">{opt.label}</span>
      </label>
    ))}
  </div>
);

const Bestellen = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [zeitraum, setZeitraum] = useState("Frühling (März/April)");
  const [vakuum, setVakuum] = useState("Normal (3-4 Personen)");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const GOOGLE_FORM_URL =
      "https://docs.google.com/forms/d/e/1FAIpQLSfO5eieRlc6HjeSsp7U1qlw548HwUSl3GYnMHLFgwpIate1Pg/formResponse";

    const mappedData = new URLSearchParams();
    mappedData.append("entry.569909213", formData.get("contact") as string || "");
    mappedData.append("entry.1266230171", zeitraum);
    mappedData.append("entry.1470760738", formData.get("paket") as string || "");
    mappedData.append("entry.410461177", vakuum);
    mappedData.append("entry.559525787", formData.get("remark") as string || "");

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: mappedData,
      });

      setIsSubmitted(true);
      toast.success("Vielen Dank! Ihre Bestellung wurde erfolgreich übermittelt.");
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Fehler beim Senden. Bitte versuchen Sie es später erneut.");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <PageHero
        title="Online bestellen"
        subtitle="Bio-Kalbfleisch direkt vom Biohof Halten"
        kicker="Fleisch ab Hof · Rothenthurm SZ"
        image={heroImage}
        alignment="center"
      />

      <main>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="bg-card rounded-sm border border-border/50 p-6 md:p-10 space-y-10">
                {isSubmitted ? (
                  /* Success state */
                  <div className="py-16 text-center space-y-6 animate-fade-in">
                    <div className="w-12 h-px bg-gold mx-auto" />
                    <h2 className="font-heading text-3xl font-light text-foreground">
                      Vielen Dank!
                    </h2>
                    <p className="font-body text-base text-muted-foreground">
                      Ihre Bestellung wurde erfolgreich übermittelt. Wir melden uns in Kürze.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="font-body text-xs uppercase tracking-[0.18em] text-earth border-b border-earth/40 hover:border-earth transition-colors duration-300 pb-px mt-4"
                    >
                      Weiteres Paket bestellen
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Info */}
                    <div className="space-y-3 pb-2 border-b border-border/40">
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        Die Bestellung wird über ein Google-Formular abgewickelt. Mit der Übermittlung bestätigen Sie die Nutzungsbedingungen.
                      </p>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        Alternativ:{" "}
                        <a
                          href={bestellformular}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-earth underline underline-offset-4 hover:text-earth-light transition-colors"
                        >
                          PDF-Bestellformular
                        </a>{" "}
                        herunterladen und an{" "}
                        <a href="mailto:biohof.halten@gmail.com" className="text-earth hover:underline">
                          biohof.halten@gmail.com
                        </a>{" "}
                        senden.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-10">
                      {/* Kontaktangaben */}
                      <div className="space-y-3">
                        <SectionLabel>Kontaktangaben</SectionLabel>
                        <div className="space-y-1.5">
                          <Label htmlFor="contact" className="font-body text-xs uppercase tracking-[0.1em] text-muted-foreground">
                            Name und Nummer / Mail
                          </Label>
                          <input
                            id="contact"
                            name="contact"
                            type="text"
                            placeholder="Ihr Name und wie wir Sie erreichen können"
                            required
                            className="w-full rounded-sm border border-border/60 bg-background px-3 py-2.5 font-body text-sm focus:outline-none focus:border-primary transition-colors duration-300"
                          />
                        </div>
                      </div>

                      {/* Zeitraum */}
                      <div className="space-y-3">
                        <SectionLabel>Zeitraum</SectionLabel>
                        <ChoiceCardGroup
                          name="zeitraum"
                          options={zeitraumOptions}
                          selected={zeitraum}
                          onChange={setZeitraum}
                        />
                      </div>

                      {/* Paket */}
                      <div className="space-y-3">
                        <SectionLabel>Paket</SectionLabel>
                        <Select name="paket" required>
                          <SelectTrigger className="rounded-sm border-border/60 font-body text-sm focus:ring-0 focus:border-primary">
                            <SelectValue placeholder="Paket auswählen" />
                          </SelectTrigger>
                          <SelectContent>
                            {["3 kg Probierpaket", "5 kg Mischpaket", "10 kg Mischpaket", "1/4 Kalb", "1/2 Kalb", "ganzes Kalb"].map((v) => (
                              <SelectItem key={v} value={v} className="font-body text-sm">{v}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Vakuumiergrösse */}
                      <div className="space-y-3">
                        <SectionLabel>Vakuumiergrösse</SectionLabel>
                        <ChoiceCardGroup
                          name="vakuum"
                          options={vakuumOptions}
                          selected={vakuum}
                          onChange={setVakuum}
                        />
                      </div>

                      {/* Bemerkung */}
                      <div className="space-y-3">
                        <SectionLabel>Bemerkung</SectionLabel>
                        <div className="space-y-1.5">
                          <Label htmlFor="remark" className="font-body text-xs uppercase tracking-[0.1em] text-muted-foreground">
                            Ihre Mitteilung an uns
                          </Label>
                          <Textarea
                            id="remark"
                            name="remark"
                            placeholder="Besondere Wünsche oder Anmerkungen"
                            rows={4}
                            className="rounded-sm border-border/60 font-body text-sm focus:ring-0 focus:border-primary resize-none"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 font-body text-sm font-medium tracking-[0.1em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-500 rounded-sm"
                      >
                        <FileText className="w-4 h-4" />
                        Bestellung absenden
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Terminal CTA */}
        <section className="py-16 bg-bark text-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <p className="font-body text-xs tracking-[0.2em] uppercase text-gold/70 mb-3">Fragen?</p>
              <p className="font-body text-base font-light text-cream/70">
                Kontaktieren Sie uns unter{" "}
                <a
                  href="mailto:biohof.halten@gmail.com"
                  className="text-cream hover:text-cream/80 underline underline-offset-4 transition-colors duration-300"
                >
                  biohof.halten@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Bestellen;
