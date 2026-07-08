import Image from "next/image";
import { Reveal } from "./motion/Reveal";
import { Icon } from "./icons/Iconify";

export function CtaContact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-ink px-6 py-12 text-cream md:px-10 md:py-16 lg:py-24"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/image/chantier7.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "50% 50%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(20,20,15,0.86) 0%, rgba(20,20,15,0.68) 52%, rgba(20,20,15,0.34) 100%)",
          }}
        />
      </div>

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 h-full w-full opacity-[0.07]"
      >
        <pattern id="cta-grid" width="56" height="56" patternUnits="userSpaceOnUse">
          <path d="M56 0H0V56" fill="none" stroke="var(--cream)" strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#cta-grid)" />
      </svg>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(120%_120%_at_85%_-10%,rgba(20,20,15,0.3),transparent_55%)]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 z-10 hidden h-72 w-72 rounded-full border border-dashed border-cream/25 motion-safe:animate-[spin_60s_linear_infinite] lg:block"
      />

      <Reveal className="relative z-20">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end lg:gap-8">
          <div>
            <p className="inline-flex items-center gap-2 bg-cream px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink shadow-[0_10px_24px_rgba(20,20,15,0.25)]">
              <Icon icon="lucide:clock-4" className="h-4 w-4" />
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
      </Reveal>
    </section>
  );
}
