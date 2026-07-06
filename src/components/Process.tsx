import { Reveal } from "./motion/Reveal";
import { Icon } from "./icons/Iconify";

const STEPS = [
  {
    n: "01",
    title: "Étude & devis",
    text: "Visite du terrain, écoute du besoin, devis gratuit sous 48h.",
    icon: "lucide:clipboard-list",
    arc: "60 239",
  },
  {
    n: "02",
    title: "Conception technique",
    text: "Plans de charpente, choix des bois, validation avant chantier.",
    icon: "lucide:drafting-compass",
    arc: "119 239",
  },
  {
    n: "03",
    title: "Construction",
    text: "Taille en atelier, montage sur site par nos équipes qualifiées.",
    icon: "lucide:hammer",
    arc: "179 239",
  },
  {
    n: "04",
    title: "Livraison & suivi",
    text: "Réception des travaux et accompagnement après livraison.",
    icon: "lucide:truck",
    arc: "239 239",
  },
];

function ArrowHead({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 8 12" fill="none" className={className} aria-hidden="true">
      <path
        d="M1 1L7 6L1 11"
        stroke="var(--red)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Process() {
  return (
    <section className="flex flex-col justify-center bg-white px-6 py-10 sm:min-h-[min(100vh,56.25rem)] md:px-10 lg:py-14">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red">
            Notre méthode
          </p>
          <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] tracking-tight lg:text-5xl">
            De l&apos;étude à la livraison
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink/60">
            Un accompagnement clair et structuré à chaque étape pour concrétiser
            votre projet en toute sérénité.
          </p>
        </Reveal>

        {/* Desktop / tablet: horizontal timeline */}
        <div className="mt-10 hidden items-start sm:flex">
          {STEPS.map((step, i) => (
            /* Connectors are aligned to the circle centers (number line 32px +
               12px gap + half of the 80px circle = 84px from the column top),
               not to the variable-height columns. */
            <div key={step.n} className="flex flex-1 items-start">
              {i === 0 ? (
                <span aria-hidden="true" className="mt-20 h-2 w-2 shrink-0 rounded-full bg-red" />
              ) : (
                <span aria-hidden="true" className="mt-19.5 flex h-3 flex-1 items-center">
                  <span className="step-dash h-0.5 flex-1" />
                  <ArrowHead className="ml-1 h-3 w-2 shrink-0" />
                </span>
              )}

              <Reveal
                delay={i * 0.08}
                className="flex min-w-0 flex-col items-center px-3 text-center"
              >
                <span className="font-display text-2xl text-red">{step.n}</span>
                <span className="relative mt-3 flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-ink/15 bg-white transition-transform duration-300 hover:scale-105">
                  <svg
                    viewBox="0 0 80 80"
                    className="absolute inset-0 h-full w-full -rotate-90"
                    aria-hidden="true"
                  >
                    <circle
                      cx="40"
                      cy="40"
                      r="38"
                      fill="none"
                      stroke="var(--red)"
                      strokeWidth="2"
                      strokeDasharray={step.arc}
                      strokeLinecap="butt"
                    />
                  </svg>
                  <Icon icon={step.icon} className="h-9 w-9 text-ink" />
                </span>
                <h3 className="mt-4 font-display text-base uppercase leading-none text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-60 text-sm leading-relaxed text-ink/60">
                  {step.text}
                </p>
              </Reveal>

              {i === STEPS.length - 1 ? (
                <span aria-hidden="true" className="mt-20 h-2 w-2 shrink-0 rounded-full bg-red" />
              ) : (
                <span aria-hidden="true" className="step-dash mt-20.75 h-0.5 flex-1" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile: compact vertical timeline (circle left, text right) */}
        <div className="mt-8 flex flex-col sm:hidden">
          {STEPS.map((step, i) => (
            <Reveal
              key={step.n}
              delay={i * 0.08}
              className={`relative flex gap-4${i < STEPS.length - 1 ? " pb-6" : ""}`}
            >
              {i < STEPS.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="step-dash-v absolute bottom-1 left-7 top-15 w-0.5 -translate-x-1/2"
                />
              ) : null}
              <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-ink/15 bg-white">
                <svg
                  viewBox="0 0 80 80"
                  className="absolute inset-0 h-full w-full -rotate-90"
                  aria-hidden="true"
                >
                  <circle
                    cx="40"
                    cy="40"
                    r="38"
                    fill="none"
                    stroke="var(--red)"
                    strokeWidth="2.5"
                    strokeDasharray={step.arc}
                    strokeLinecap="butt"
                  />
                </svg>
                <Icon icon={step.icon} className="h-6 w-6 text-ink" />
              </span>
              <div className="pt-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-lg leading-none text-red">{step.n}</span>
                  <h3 className="font-display text-base uppercase leading-none text-ink">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-1.5 text-sm leading-snug text-ink/60">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex justify-center border-t border-ink/10 pt-6">
          <a
            href="#services"
            className="group inline-flex shrink-0 items-center justify-center gap-3 bg-red px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition hover:bg-ink active:scale-[0.97]"
          >
            En savoir plus
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
