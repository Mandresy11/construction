import { Reveal } from "./motion/Reveal";
import { Icon } from "./icons/Iconify";

const CONTACT_CARD =
  "group flex items-center gap-4 rounded-2xl border border-cream/20 bg-ink/15 p-4 backdrop-blur-sm lg:p-5";

const CONTACT_ICON =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream/15 text-cream transition-colors duration-300 group-hover:bg-cream group-hover:text-red lg:h-11 lg:w-11";

export function CtaContact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-red px-6 py-12 text-cream md:px-10 md:py-16 lg:py-24"
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
      >
        <pattern id="cta-grid" width="56" height="56" patternUnits="userSpaceOnUse">
          <path d="M56 0H0V56" fill="none" stroke="var(--cream)" strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#cta-grid)" />
      </svg>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_85%_-10%,rgba(20,20,15,0.3),transparent_55%)]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 hidden h-72 w-72 rounded-full border border-dashed border-cream/25 motion-safe:animate-[spin_60s_linear_infinite] lg:block"
      />

      <Reveal className="relative">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end lg:gap-8">
          <div>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-cream/30 bg-ink/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
              <span aria-hidden="true" className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-cream opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cream" />
              </span>
              Devis gratuit sous 48h
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl uppercase leading-[0.92] tracking-tight lg:mt-5 lg:text-6xl">
              Prêt à construire <span className="text-ink">autrement&nbsp;?</span>
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-cream/85 lg:mt-4">
              Parlez-nous de votre projet : nous revenons vers vous sous 48h avec
              une première estimation, sans engagement.
            </p>
          </div>

          <a
            href="tel:+262262000000"
            className="group flex shrink-0 items-center gap-3 bg-cream px-8 py-4 text-sm font-semibold uppercase tracking-wide text-ink shadow-[0_10px_30px_rgba(20,20,15,0.25)] transition hover:bg-ink hover:text-cream active:scale-[0.97]"
          >
            Obtenir un devis gratuit
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>

        <div className="mt-8 grid gap-3 border-t border-cream/25 pt-6 md:grid-cols-3 lg:mt-12 lg:gap-6 lg:pt-8">
          <a
            href="tel:+262262000000"
            className={`${CONTACT_CARD} transition-colors duration-300 hover:border-cream/45 hover:bg-ink/25`}
          >
            <span className={CONTACT_ICON}>
              <Icon icon="lucide:phone" className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-[0.2em] text-cream/70">
                Téléphone
              </span>
              <span className="mt-1 block font-display text-lg lg:text-xl">
                02 62 00 00 00
              </span>
            </span>
          </a>

          <a
            href="mailto:contact@nemrods-emergence.re"
            className={`${CONTACT_CARD} transition-colors duration-300 hover:border-cream/45 hover:bg-ink/25`}
          >
            <span className={CONTACT_ICON}>
              <Icon icon="lucide:mail" className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs uppercase tracking-[0.2em] text-cream/70">
                Email
              </span>
              <span className="mt-1 block break-all font-display text-base lg:text-lg">
                contact@nemrods-emergence.re
              </span>
            </span>
          </a>

          <div className={CONTACT_CARD}>
            <span className={CONTACT_ICON}>
              <Icon icon="lucide:map-pin" className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-[0.2em] text-cream/70">
                Zone d&apos;intervention
              </span>
              <span className="mt-1 block font-display text-lg lg:text-xl">
                Toute La Réunion
              </span>
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
