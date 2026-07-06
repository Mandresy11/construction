import Image from "next/image";
import { Reveal } from "./motion/Reveal";
import { Icon } from "./icons/Iconify";

const SERVICES = [
  {
    n: "01",
    title: "Charpente traditionnelle",
    text: "Structures en bois massif pensées pour durer.",
  },
  {
    n: "02",
    title: "Construction bois",
    text: "Maisons, extensions et bungalows en ossature bois.",
  },
  {
    n: "03",
    title: "Coordination de travaux",
    text: "Un interlocuteur unique, du plan à la livraison.",
  },
  {
    n: "04",
    title: "Autres corps de métier",
    text: "Peinture et travaux spécialisés avec nos partenaires.",
  },
];

export function Services() {
  return (
    <section className="bg-cream px-6 py-16 md:px-10 lg:py-24">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red">
          Nos savoir-faire
        </p>
        <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-tight lg:text-5xl">
          Ce que nous construisons
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col">
          {/* Liste éditoriale : gros numéros + séparateurs fins, sans cartes */}
          <div className="flex-1 divide-y divide-ink/10 border-y border-ink/10">
            {SERVICES.map((service, i) => (
              <Reveal key={service.n} delay={i * 0.06}>
                <div className="group flex items-baseline gap-5 py-5 sm:gap-8 lg:py-6">
                  <span className="shrink-0 font-display text-3xl leading-none text-red lg:text-4xl">
                    {service.n}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="wrap-break-word font-display text-lg uppercase leading-none text-ink hyphens-auto lg:text-xl">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-snug text-ink/60">
                      {service.text}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="hidden shrink-0 self-center text-ink/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red sm:block"
                  >
                    →
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-6 flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red/10">
                <Icon icon="lucide:shield-check" className="h-5 w-5 text-red" />
              </span>
              <p className="flex items-baseline gap-2">
                <span className="font-display text-3xl text-ink">15+</span>
                <span className="flex flex-col leading-tight">
                  <span className="text-xs font-semibold uppercase tracking-wide text-ink">
                    Années d&apos;expertise
                  </span>
                  <span className="text-xs uppercase tracking-wide text-ink/50">
                    À La Réunion
                  </span>
                </span>
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="flex flex-col">
          <div className="relative min-h-100 flex-1 overflow-hidden rounded-3xl">
            <Image
              src="/exemple/image1.png"
              alt="Villa bois moderne construite par Nemrod's Emergence Construction, face au relief de La Réunion"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <a
            href="#realisations"
            className="group mt-6 flex items-center justify-center gap-3 self-end bg-ink px-8 py-4 text-sm font-semibold uppercase tracking-wide text-cream transition hover:bg-ink/85 active:scale-[0.97]"
          >
            Voir nos réalisations
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
