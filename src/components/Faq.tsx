import { Reveal } from "./motion/Reveal";
import { SectionPhotoBg } from "./SectionPhotoBg";
import { FaqList } from "./FaqList";

const FAQS = [
  {
    q: "Le devis est-il vraiment gratuit ?",
    a: "Oui. Nous nous déplaçons sur le terrain, étudions votre projet et vous remettons un devis détaillé sans engagement, sous 48h.",
  },
  {
    q: "Dans quelles communes intervenez-vous ?",
    a: "Nous intervenons sur toute l'île de La Réunion, de Saint-Denis à Saint-Pierre en passant par Saint-Paul et les hauts.",
  },
  {
    q: "Quels délais pour une charpente sur mesure ?",
    a: "Comptez en moyenne 6 à 10 semaines entre la validation des plans et la pose, selon la complexité de la structure.",
  },
  {
    q: "Proposez-vous un paiement échelonné ?",
    a: "Oui, le paiement des matériaux peut être étalé en 10 fois sans frais ni dossier compliqué.",
  },
  {
    q: "Vos chantiers sont-ils garantis ?",
    a: "Toutes nos réalisations sont couvertes par la garantie décennale et suivies jusqu'à la réception des travaux.",
  },
];

export function Faq() {
  return (
    <SectionPhotoBg
      src="/image/chantier4.png"
      alt=""
      overlay="linear-gradient(180deg, rgba(10,10,8,0.82) 0%, rgba(10,10,8,0.9) 100%)"
      className="px-6 py-16 text-cream md:px-10 lg:py-24"
    >
      <section id="faq" className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red">
            Questions fréquentes
          </p>
          <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] tracking-tight lg:text-5xl">
            Tout savoir avant de démarrer
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/70">
            Délais, financement, garanties : voici les réponses aux questions
            que l&apos;on nous pose le plus souvent. Votre cas est particulier ?
            Parlons-en directement.
          </p>
          <a
            href="#contact"
            className="group mt-8 hidden items-center gap-3 bg-red px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-cream transition hover:bg-cream hover:text-ink active:scale-[0.97] lg:inline-flex"
          >
            Poser votre question
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <FaqList items={FAQS} />
        </Reveal>

        <Reveal delay={0.15} className="lg:hidden">
          <a
            href="#contact"
            className="group flex w-full items-center justify-center gap-3 bg-red px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-cream transition hover:bg-cream hover:text-ink active:scale-[0.97]"
          >
            Poser votre question
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </Reveal>
      </section>
    </SectionPhotoBg>
  );
}
