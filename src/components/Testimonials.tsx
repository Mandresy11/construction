import Image from "next/image";
import { Reveal } from "./motion/Reveal";
import { GoogleIcon } from "./icons/GoogleIcon";
import { ReviewsCarousel } from "./ReviewsCarousel";


const REVIEWS = [
  {
    name: "Jean-Luc R.",
    place: "Saint-Denis",
    date: "il y a 2 mois",
    quote:
      "Chantier tenu dans les délais annoncés, et un seul interlocuteur du devis à la livraison. C'est rare.",
  },
  {
    name: "Corinne P.",
    place: "Saint-Pierre",
    date: "il y a 3 semaines",
    quote:
      "La charpente est nickel, les finitions aussi. On sent le savoir-faire artisanal derrière.",
  },
  {
    name: "Franck M.",
    place: "Saint-Paul",
    date: "il y a 1 mois",
    quote:
      "Devis clair, équipe ponctuelle et travail soigné. Je recommande sans hésiter.",
  },
  {
    name: "Isabelle T.",
    place: "Le Tampon",
    date: "il y a 5 mois",
    quote:
      "Une équipe à l'écoute, du premier rendez-vous jusqu'à la réception du chantier. Rien à redire.",
  },
  {
    name: "Michel D.",
    place: "Saint-André",
    date: "il y a 6 mois",
    quote:
      "Rapport qualité-prix excellent pour une charpente traditionnelle. Travail très soigné.",
  },
  {
    name: "Sandrine L.",
    place: "Saint-Leu",
    date: "il y a 2 semaines",
    quote:
      "Super suivi de chantier, toujours joignables. Le résultat dépasse nos attentes.",
  },
];

export function Testimonials() {
  return (
    <section
      id="avis-clients"
      className="relative isolate overflow-hidden bg-cream py-16 text-center lg:py-24"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/image/chantier2.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "50% 45%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(241,239,230,0.9) 0%, rgba(241,239,230,0.96) 100%)",
          }}
        />
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 z-0 -translate-x-1/2 select-none font-display text-[14rem] leading-none text-red/5 lg:text-[20rem]"
      >
        &ldquo;
      </span>

      <Reveal className="relative mx-auto max-w-2xl px-6 md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red">
          Avis clients
        </p>
        <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] tracking-tight text-ink lg:text-5xl">
          Ce qu&apos;en disent <span className="text-red">nos clients</span>
        </h2>
      </Reveal>

      <div className="relative z-10">
        <ReviewsCarousel reviews={REVIEWS} />
      </div>

      <Reveal delay={0.2} className="relative z-10 mt-4 flex justify-center px-6 md:px-10">
        <a
          href="https://www.google.com/search?q=Nemrod%27s+Emergence+Construction+avis"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-ink px-6 py-4 text-sm font-semibold uppercase tracking-wide text-cream transition hover:bg-ink/85 active:scale-[0.97]"
        >
          <GoogleIcon className="h-5 w-5" />
          Voir nos avis Google
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </a>
      </Reveal>
    </section>
  );
}
