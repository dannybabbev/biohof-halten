import { Button } from "@/components/ui/button";
import { FileText, Mail } from "lucide-react";
import bestellformular from "@/assets/docs/Bestellformular.pdf";

export const OrderSection = () => {
  return (
    <section id="kontakt" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Bio-Fleisch bestellen
          </h2>
          <p className="font-body text-lg text-primary-foreground/90 mb-8">
            Bestellen Sie ganz einfach online Bio-Kalbsfleisch ab Hof. Oder laden Sie das PDF-Bestellformular herunter und senden Sie es ausgefüllt an uns.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="gap-2">
              <FileText className="w-5 h-5" />
              Online bestellen
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              className="gap-2 border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a
                href={bestellformular}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="w-5 h-5" />
                PDF-Formular
              </a>
            </Button>
          </div>

          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="font-heading text-2xl font-semibold mb-4">Kontakt</h3>
            <div className="font-body space-y-2 text-primary-foreground/90">
              <p className="font-semibold">Biohof Halten</p>
              <p>Familie Grab</p>
              <p>Biberegg, Rothenthurm SZ</p>
              <p className="mt-4">
                <a 
                  href="mailto:biohof.halten@gmail.com" 
                  className="hover:text-primary-foreground transition-colors underline underline-offset-4"
                >
                  biohof.halten@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
