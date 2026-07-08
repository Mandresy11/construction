"use client";

import { useRef } from "react";
import Image from "next/image";
import { Reveal } from "./motion/Reveal";
import { Icon } from "./icons/Iconify";

type Service = {
  n: string;
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
};

export function ServicesDetailCarousel({ services }: { services: Service[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  // scrollTo sur le point de snap exact de la carte cible : un scrollBy
  // relatif se fait annuler par le re-snap de snap-mandatory dans Chromium.
  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    if (cards.length < 2) return;
    const step = cards[1].offsetLeft - cards[0].offsetLeft;
    const target = Math.min(
      Math.max(Math.round(track.scrollLeft / step) + direction, 0),
      cards.length - 1
    );
    track.scrollTo({
      left: cards[target].offsetLeft - cards[0].offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative mt-10">
      {/* Sur mobile, le track garde le padding gauche de la section et laisse
          une partie de la carte suivante visible pour suggérer le swipe. */}
      <div
        ref={trackRef}
        className="-mr-6 flex touch-pan-x snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-3 pr-6 scrollbar-none md:-mx-10 md:gap-6 md:px-10"
      >
        {services.map((service, i) => (
          <Reveal
            key={service.n}
            delay={i * 0.06}
            y={0}
            className="h-[25.5rem] w-[72vw] shrink-0 snap-start snap-always sm:h-[26rem] sm:w-[55vw] md:w-[38vw] xl:w-[26vw]"
          >
            <div
              id={service.id}
              className="group flex h-full scroll-mt-24 flex-col overflow-hidden rounded-3xl border border-blue-logo/70 bg-white shadow-[0_2px_20px_rgba(20,20,15,0.06)] transition-all duration-300 hover:border-red/45 hover:shadow-[0_10px_30px_rgba(20,20,15,0.10)] md:hover:-translate-y-1"
            >
              <div className="relative h-36 shrink-0 overflow-hidden lg:h-40">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width: 1280px) 26vw, (min-width: 768px) 38vw, 78vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-red font-display text-base text-cream">
                  {service.n}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl uppercase leading-none text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-snug text-ink/60">{service.description}</p>

                <ul className="mt-4 flex flex-col gap-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-xs leading-snug text-ink/75"
                    >
                      <Icon
                        icon="lucide:shield-check"
                        className="mt-0.5 h-4 w-4 shrink-0 text-red"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-7 flex flex-col items-center gap-5">
        <a
          href="#contact"
          className="group flex w-full items-center justify-center gap-3 bg-red px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-cream transition hover:bg-ink active:scale-[0.97] sm:w-auto"
        >
          Demander un devis
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </a>

        <div className="flex justify-center gap-3">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Prestations précédentes"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition hover:bg-ink hover:text-cream"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Prestations suivantes"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition hover:bg-ink hover:text-cream"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
