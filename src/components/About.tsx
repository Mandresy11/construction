import Image from "next/image";
import { Reveal } from "./motion/Reveal";
import { CountUp } from "./motion/CountUp";
import { Icon } from "./icons/Iconify";

const STATS = [
  {
    value: 15,
    suffix: " ans",
    label: "D'expérience",
    text: "Un savoir-faire local éprouvé depuis 2009",
    icon: "lucide:star",
  },
  {
    value: 120,
    suffix: "+",
    label: "Chantiers livrés",
    text: "Du particulier aux grands projets professionnels",
    icon: "lucide:house",
  },
  {
    value: 100,
    suffix: "%",
    label: "Bois qualifié",
    text: "Sélection rigoureuse pour des constructions durables",
    icon: "lucide:shield-check",
  },
];

function AboutCta({ className }: { className: string }) {
  return (
    <div className={`flex-wrap items-center gap-6 ${className}`}>
      <a
        href="#services"
        className="group inline-flex items-center gap-3 bg-red px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-cream transition hover:bg-ink active:scale-[0.97]"
      >
        Découvrir notre savoir-faire
        <span
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </a>
      <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-ink">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/20">
          <svg viewBox="0 0 24 24" className="ml-0.5 h-3.5 w-3.5 fill-ink" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        Voir notre vidéo
      </span>
    </div>
  );
}

export function About() {
  return (
    <section id="a-propos" className="overflow-hidden bg-sand px-6 py-16 md:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <Reveal className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red">
              Qui sommes-nous
            </p>
            <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-tight lg:text-5xl">
              Une équipe réunionnaise,
              <br />
              Pas un sous-traitant
              <br />
              <span className="text-red">de plus</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink/70">
              Nemrod&apos;s Emergence Construction est née à La Réunion, pour La
              Réunion. Nous taillons chaque charpente sur mesure et suivons nos
              chantiers du premier plan jusqu&apos;à la dernière vis. Pour vos
              autres travaux, nous vous mettons en relation avec{" "}
              <strong className="font-semibold text-ink">
                nos partenaires de confiance
              </strong>
              .
            </p>

            {/* En mobile, le CTA est déplacé sous la photo (voir plus bas) */}
            <AboutCta className="mt-8 hidden sm:flex" />
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <span
              aria-hidden="true"
              className="absolute -right-8 -top-8 hidden h-72 w-72 rounded-full border border-dashed border-red/30 motion-safe:animate-[spin_60s_linear_infinite] lg:block"
            />
            <div aria-hidden="true" className="absolute -right-2 top-6 z-10 hidden grid-cols-5 gap-1.5 lg:grid">
              {Array.from({ length: 20 }).map((_, i) => (
                <span key={i} className="h-1 w-1 rounded-full bg-red/40" />
              ))}
            </div>
            <span
              aria-hidden="true"
              className="absolute right-20 top-3 z-10 hidden h-2.5 w-2.5 rounded-full bg-red lg:block"
            />

            <div className="relative h-96 overflow-hidden lg:h-120">
              <Image
                src="/image/back.png"
                alt="Chantier de charpente bois de Nemrod's Emergence Construction, face au relief de La Réunion"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover mix-blend-multiply"
                style={{ objectPosition: "70% 50%" }}
              />

              <span
                aria-hidden="true"
                className="absolute bottom-20 left-8 hidden h-8 w-8 items-center justify-center rounded-full border border-ink/30 bg-cream/70 backdrop-blur-sm lg:flex"
              >
                <span className="h-2 w-2 rounded-full bg-red" />
              </span>
              <p
                aria-hidden="true"
                className="absolute bottom-6 left-8 hidden italic text-red/70 lg:block"
              >
                Réunion.
              </p>
            </div>

            <AboutCta className="mt-6 flex sm:hidden" />
          </Reveal>
        </div>

        <Reveal
          delay={0.15}
          className="relative z-10 mt-8 hidden rounded-3xl bg-white p-6 shadow-[0_10px_50px_rgba(20,20,15,0.08)] sm:block sm:p-8 lg:mt-12 lg:p-10"
        >
          <div className="grid gap-8 divide-ink/10 sm:grid-cols-3 sm:divide-x">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex items-start gap-4 sm:px-6 sm:first:pl-0">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red/10">
                  <Icon icon={stat.icon} className="h-6 w-6 text-red" />
                </span>
                <div>
                  <p className="flex items-baseline gap-0.5 font-display text-3xl leading-none text-blue">
                    <CountUp to={stat.value} />
                    <span className="text-ink">{stat.suffix}</span>
                  </p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-ink">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-sm leading-snug text-ink/60">{stat.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
