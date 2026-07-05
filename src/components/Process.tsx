import { Reveal } from "./motion/Reveal";
import { ShieldCheckIcon } from "./icons/ShieldCheckIcon";
import { PartnersIcon } from "./icons/ServiceIcons";
import { MedalIcon, ClockIcon } from "./icons/TrustIcons";
import {
  ClipboardIcon,
  BlueprintIcon,
  TrussIcon,
  TruckIcon,
} from "./icons/ProcessIcons";

const STEPS = [
  {
    n: "01",
    title: "Étude & devis",
    text: "Visite du terrain, écoute du besoin, devis gratuit sous 48h.",
    Icon: ClipboardIcon,
    arc: "60 239",
  },
  {
    n: "02",
    title: "Conception technique",
    text: "Plans de charpente, choix des bois, validation avant chantier.",
    Icon: BlueprintIcon,
    arc: "119 239",
  },
  {
    n: "03",
    title: "Construction",
    text: "Taille en atelier, montage sur site par nos équipes qualifiées.",
    Icon: TrussIcon,
    arc: "179 239",
  },
  {
    n: "04",
    title: "Livraison & suivi",
    text: "Réception des travaux et accompagnement après livraison.",
    Icon: TruckIcon,
    arc: "239 239",
  },
];

const TRUST_POINTS = [
  { title: "Expertise", text: "Savoir-faire depuis plus de 10 ans", Icon: MedalIcon },
  { title: "Qualité", text: "Matériaux sélectionnés avec exigence", Icon: ShieldCheckIcon },
  { title: "Réactivité", text: "Délais respectés et maîtrisés", Icon: ClockIcon },
  { title: "Accompagnement", text: "Un interlocuteur unique à vos côtés", Icon: PartnersIcon },
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
                  <step.Icon />
                </span>
                <h3 className="mt-4 font-display text-base uppercase leading-none text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-50 text-sm leading-relaxed text-ink/60">
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
                <span className="[&_svg]:h-6 [&_svg]:w-6">
                  <step.Icon />
                </span>
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

        {/* Trust strip */}
        <div className="mt-8 flex flex-col gap-6 border-t border-ink/10 pt-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="grid grid-cols-2 gap-x-3 gap-y-5 sm:gap-6 lg:flex lg:flex-nowrap lg:items-center lg:gap-5">
            {TRUST_POINTS.map((point) => (
              <div key={point.title} className="flex min-w-0 items-center gap-2">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red/10">
                  <span style={{ "--ink": "var(--red)" } as React.CSSProperties}>
                    <point.Icon className="h-4 w-4" />
                  </span>
                </span>
                <div className="min-w-0 lg:max-w-36">
                  <p className="break-words text-xs font-semibold uppercase tracking-wide text-ink hyphens-auto sm:text-sm">
                    {point.title}
                  </p>
                  <p className="text-xs leading-snug text-ink/60">{point.text}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#services"
            className="group inline-flex shrink-0 items-center justify-center gap-3 self-start bg-red px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition hover:bg-ink active:scale-[0.97] lg:self-auto"
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
