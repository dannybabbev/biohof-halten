import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
import { FileText, Mail } from "lucide-react";

const Bestellen = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Vielen Dank für Ihre Bestellung! Wir werden uns in Kürze bei Ihnen melden.");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bark/70 via-bark/55 to-background" />

          <div className="relative container mx-auto px-4 text-center max-w-3xl space-y-6 text-cream">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
              Online-Bestellformular Fleisch ab Hof
            </h1>
            <p className="font-body text-lg text-cream/90 leading-relaxed">
              Bio-Kalbfleisch von www.biohofhalten.ch
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-2xl shadow-soft border border-border p-6 md:p-8 space-y-8">
                <div className="space-y-4">
                  <p className="font-body text-muted-foreground">
                    Die Bestellung wird über ein Microsoft-Forms-Formular abgewickelt. Mit der Übermittlung bestätigen Sie automatisch die Nutzungsbedingungen.
                  </p>
                  <p className="font-body text-muted-foreground">
                    Falls Sie dies nicht möchten, laden Sie bitte das{" "}
                    <a
                      href={bestellformular}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold underline underline-offset-4"
                    >
                      PDF-Bestellformular
                    </a>{" "}
                    auf unserer Webseite herunter und senden Sie dieses ausgefüllt an{" "}
                    <a href="mailto:biohof.halten@gmail.com" className="text-primary hover:underline">
                      biohof.halten@gmail.com
                    </a>
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Kontaktangaben */}
                  <div className="space-y-4">
                    <h3 className="font-heading text-xl font-semibold">Kontaktangaben</h3>
                    <div className="space-y-2">
                      <Label htmlFor="contact">Name und Nummer/Mail</Label>
                      <Input
                        id="contact"
                        placeholder="Ihr Name und wie wir Sie erreichen können"
                        required
                      />
                    </div>
                  </div>

                  {/* Zeitraum */}
                  <div className="space-y-4">
                    <h3 className="font-heading text-xl font-semibold">Zeitraum</h3>
                    <RadioGroup defaultValue="fruehling" className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fruehling" id="fruehling" />
                        <Label htmlFor="fruehling">Frühling (März/April)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="herbst" id="herbst" />
                        <Label htmlFor="herbst">Herbst (Oktober/November)</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Paket */}
                  <div className="space-y-4">
                    <h3 className="font-heading text-xl font-semibold">Paket</h3>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Wählen Sie ein Paket aus" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3kg">3 kg Probierpaket</SelectItem>
                        <SelectItem value="5kg">5 kg Mischpaket</SelectItem>
                        <SelectItem value="10kg">10 kg Mischpaket</SelectItem>
                        <SelectItem value="1/4">1/4 Kalb</SelectItem>
                        <SelectItem value="1/2">1/2 Kalb</SelectItem>
                        <SelectItem value="ganz">ganzes Kalb</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Vakuumiergrösse */}
                  <div className="space-y-4">
                    <h3 className="font-heading text-xl font-semibold">Vakuumiergrösse</h3>
                    <RadioGroup defaultValue="normal" className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="klein" id="klein" />
                        <Label htmlFor="klein">Klein (für 1-2 Personen)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="normal" id="normal" />
                        <Label htmlFor="normal">Normal (3-4 Personen)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="gross" id="gross" />
                        <Label htmlFor="gross">Grossverpackung (einzelne Teile in einem Beutel vakuumiert)</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Bemerkung */}
                  <div className="space-y-4">
                    <h3 className="font-heading text-xl font-semibold">Bemerkung</h3>
                    <div className="space-y-2">
                      <Label htmlFor="remark">Ihre Mitteilung an uns</Label>
                      <Textarea
                        id="remark"
                        placeholder="Besondere Wünsche oder Anmerkungen"
                        rows={4}
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Bestellung absenden
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Support Info */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Mail className="w-5 h-5" />
                <span className="font-body">
                  Fragen? Kontaktieren Sie uns unter:{" "}
                  <a href="mailto:biohof.halten@gmail.com" className="text-primary hover:underline">
                    biohof.halten@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Bestellen;

