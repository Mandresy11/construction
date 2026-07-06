"use client";

import { useRef, useState } from "react";
import Image from "next/image";

type Project = {
  id: string;
  title: string;
  place: string;
  type: string;
  services: string[];
  image: string;
};

export function RealisationsCarousel({ projects }: { projects: Project[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setProgress(max > 0 ? track.scrollLeft / max : 0);
  };

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
      <div className="grid grid-cols-2 gap-2 px-6 sm:hidden">
        {projects.slice(0, 5).map((project, i) => (
          <div
            key={project.id}
            className={`border border-cream/25 bg-cream/10 p-1 shadow-[0_10px_24px_rgba(0,0,0,0.22)] ${
              i === 2 || i === 5 ? "row-span-2" : ""
            }`}
          >
            <div className={`relative overflow-hidden ${i === 2 || i === 5 ? "h-full min-h-52" : "aspect-square"}`}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="hidden sm:block">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[6vw] bg-[linear-gradient(90deg,rgba(10,10,8,0.7),transparent)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[6vw] bg-[linear-gradient(270deg,rgba(10,10,8,0.7),transparent)]" />

        <div
          ref={trackRef}
          onScroll={onScroll}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-10 pb-2 scroll-pl-10 scrollbar-none md:px-10 md:scroll-pl-10"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative h-[52vh] min-w-[74vw] shrink-0 snap-start overflow-hidden rounded-2xl border border-cream/15 shadow-xl sm:min-w-[55vw] md:min-w-[38vw] xl:min-w-[26vw]"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1280px) 26vw, (min-width: 768px) 38vw, 78vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-ink/80 to-transparent" />
              <div className="absolute inset-x-5 bottom-5">
                <p className="font-display text-lg uppercase leading-tight text-cream">
                  {project.title}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-cream/70">
                  {project.place}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-6 px-6 md:px-10">
          <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-cream/15">
            <div
              className="h-full w-full rounded-full bg-red"
              style={{ transform: `scaleX(${progress})`, transformOrigin: "left" }}
            />
          </div>
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Réalisations précédentes"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/30 text-cream transition hover:bg-cream hover:text-ink"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Réalisations suivantes"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/30 text-cream transition hover:bg-cream hover:text-ink"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
