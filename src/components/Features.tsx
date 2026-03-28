import { Link } from "react-router-dom";
import steakImage from "@/assets/steak.webp";
import tiereImage from "@/assets/tiere.webp";
import unsImage from "@/assets/uns.avif";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  delay?: string;
}

const FeatureCard = ({ title, description, image, href, delay }: FeatureCardProps) => {
  return (
    <Link
      to={href}
      className={`group block bg-card rounded-sm overflow-hidden hover:shadow-lifted transition-all duration-500 ${delay ?? ""}`}
    >
      <div className="aspect-[3/2] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-light tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
          {title}
        </h3>
        <p className="font-body text-sm text-muted-foreground mb-5 leading-relaxed font-light">
          {description}
        </p>
        <span className="font-body text-xs uppercase tracking-[0.18em] text-earth border-b border-earth/40 hover:border-earth transition-colors duration-300 pb-px">
          Mehr erfahren
        </span>
      </div>
    </Link>
  );
};

export const Features = () => {
  const features = [
    {
      title: "Fleisch ab Hof",
      description:
        "Frisch ab Hof verkaufen wir verschiedene Mischpakete mit feinstem Bio-Kalb- oder Rindfleisch abgepackt und vakuumiert. Auf Vorbestellung auch halbe oder ganze Tiere.",
      image: steakImage,
      href: "/fleisch-ab-hof",
    },
    {
      title: "Unsere Tiere",
      description:
        "Seit 2003 werden all unsere Tiere rein biologisch gehalten und ernährt. Seit 2025 leben sie als Mutterkuh-Kühe. Dazu Schafe, Hühner, Katzen, Esel und ein Hund.",
      image: tiereImage,
      href: "/unsere-tiere",
    },
    {
      title: "Über Uns",
      description:
        "Unser Biohof wird seit 2024 vom Jungbauern Lukas Grab geführt und zusammen mit seinem Vater Martin bewirtschaftet. Tradition trifft auf moderne Bio-Landwirtschaft.",
      image: unsImage,
      href: "/ueber-uns",
    },
  ];

  return (
    <section id="features" className="py-24 bg-background border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-8 h-px bg-gold mx-auto mb-6" />
          <h2 className="font-heading text-4xl md:text-5xl font-light tracking-tight text-foreground">
            Herzlich Willkommen
          </h2>
          <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mt-3">
            Direkt vom Hof · Seit 2003 zertifiziert biologisch
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={`animate-fade-in-delay-${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
