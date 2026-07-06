import Image from "next/image";
import { Reveal } from "./motion/Reveal";
import { SectionPhotoBg } from "./SectionPhotoBg";
import { ShieldCheckIcon } from "./icons/ShieldCheckIcon";

const SERVICES_DETAIL = [
  {
    n: "01",
    id: "charpente",
    title: "Charpente traditionnelle",
    description: "Structures en bois massif taillées sur mesure, conçues pour durer.",
    features: [
      "Bois massif, climat tropical",
      "Plans calculés sur mesure",
      "Garantie décennale",
    ],
    image: "/image/background/background.png",
    imageAlt:
      "Charpente traditionnelle en bois massif construite par Nemrod's Emergence Construction",
  },
  {
    n: "02",
    id: "construction-bois",
    title: "Construction bois",
    description: "Villas, extensions et bungalows en ossature bois, sur mesure.",
    features: [
      "Isolation thermique supérieure",
      "Chantier préfabriqué en atelier",
      "Un seul interlocuteur",
    ],
    image: "/exemple/image1.png",
    imageAlt:
      "Villa bois moderne construite par Nemrod's Emergence Construction, face au relief de La Réunion",
  },
  {
    n: "03",
    id: "coordination-de-travaux",
    title: "Coordination de travaux",
    description: "Un interlocuteur unique pour coordonner tous les corps de métier.",
    features: [
      "Planning maîtrisé",
      "Partenaires qualifiés",
      "Suivi jusqu'à réception",
    ],
    image: "/image/chantier7.png",
    imageAlt: "Extension bois coordonnée par Nemrod's Emergence Construction",
  },
];

export function ServicesDetail() {
  return (
    <SectionPhotoBg
      src="/exemple/back3.png"
      alt=""
      overlay="linear-gradient(180deg, rgba(10,10,8,0.15) 0%, rgba(10,10,8,0.35) 100%)"
      className="px-6 py-12 text-cream md:px-10 lg:py-24"
    >
      <section id="services">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red">
            Nos prestations
          </p>
          <h2 className="mt-4 font-display text-3xl uppercase leading-[0.95] tracking-tight text-cream lg:text-4xl">
            Nos services en détail
          </h2>
        </Reveal>

        {/* Carousel full-bleed en mobile : la carte suivante dépasse à droite
            pour signaler qu'on peut swiper. */}
        <div className="-mx-6 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 scrollbar-none md:-mx-10 md:px-10 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0">
          {SERVICES_DETAIL.map((service, i) => (
            <Reveal
              key={service.n}
              delay={i * 0.08}
              className="h-full w-[76vw] shrink-0 snap-start sm:w-[55vw] lg:w-auto"
            >
              <div
                id={service.id}
                className="group flex h-full scroll-mt-24 flex-col overflow-hidden rounded-3xl border border-cream/10 bg-ink/50 backdrop-blur-sm transition-colors duration-300 hover:border-cream/25"
              >
                <div className="relative h-36 shrink-0 overflow-hidden lg:h-40">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-red font-display text-base text-cream">
                    {service.n}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl uppercase leading-none text-cream">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-snug text-cream/60">{service.description}</p>

                  <ul className="mt-4 flex flex-col gap-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-xs leading-snug text-cream/75"
                      >
                        <span style={{ "--ink": "var(--red)" } as React.CSSProperties}>
                          <ShieldCheckIcon className="mt-0.5 h-4 w-4 shrink-0" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-5">
                    <a
                      href="#contact"
                      className="group/link flex w-full items-center justify-center gap-3 border border-cream/35 px-5 py-3.5 text-sm font-semibold uppercase tracking-wide text-cream transition hover:border-red hover:bg-red active:scale-[0.97]"
                    >
                      Demander un devis
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover/link:translate-x-1"
                      >
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </SectionPhotoBg>
  );
}
