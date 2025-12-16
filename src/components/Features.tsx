import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import steakImage from "@/assets/steak.webp";
import tiereImage from "@/assets/tiere.webp";
import unsImage from "@/assets/uns.avif";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  isRoute?: boolean;
  delay?: string;
}

const FeatureCard = ({ title, description, image, href, isRoute, delay }: FeatureCardProps) => {
  const content = (
    <>
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="font-body text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
          Mehr erfahren
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </>
  );

  const className = `group block bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-lifted transition-all duration-500 hover:-translate-y-2 ${delay}`;

  if (isRoute) {
    return (
      <Link to={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {content}
    </a>
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
      isRoute: true,
    },
    {
      title: "Unsere Tiere",
      description:
        "Seit 2003 werden all unsere Tiere rein biologisch gehalten und ernährt. Seit 2025 leben sie als Mutterkuh-Kühe. Dazu Schafe, Hühner, Katzen, Esel und ein Hund.",
      image: tiereImage,
      href: "/unsere-tiere",
      isRoute: true,
    },
    {
      title: "Über Uns",
      description:
        "Unser Biohof wird seit 2024 vom Jungbauern Lukas Grab geführt und zusammen mit seinem Vater Martin bewirtschaftet. Tradition trifft auf moderne Bio-Landwirtschaft.",
      image: unsImage,
      href: "/ueber-uns",
      isRoute: true,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Herzlich Willkommen
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
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
