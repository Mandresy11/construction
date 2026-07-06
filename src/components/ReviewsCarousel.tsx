"use client";

import { useRef } from "react";
import { GoogleIcon } from "./icons/GoogleIcon";

type Review = { name: string; place: string; date: string; quote: string };

export function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 20 : track.clientWidth * 0.85;
    track.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <div className="mt-12">
      {/* scroll-pl identique au padding : sans lui, snap-mandatory aligne la
          première carte sur le bord du scrollport et « mange » le padding. */}
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-6 pb-2 scrollbar-none scroll-pl-6 md:px-10 md:scroll-pl-10 lg:px-[max(0px,calc((100vw-72rem)/2))] lg:scroll-pl-[max(0px,calc((100vw-72rem)/2))] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((review) => (
          <div
            key={review.name}
            data-card
            className="flex w-[85vw] shrink-0 snap-start flex-col rounded-2xl border border-ink/5 bg-white p-6 text-left shadow-[0_2px_20px_rgba(20,20,15,0.06)] transition duration-300 hover:-translate-y-1 hover:border-red/20 hover:shadow-[0_10px_30px_rgba(20,20,15,0.10)] sm:w-[60vw] lg:w-[calc(69.5rem/3)]"
          >
            <div className="flex items-start justify-between">
              <span
                aria-hidden="true"
                className="font-display text-5xl leading-none text-red"
              >
                &ldquo;
              </span>
              <GoogleIcon className="h-5 w-5" />
            </div>
            <p className="mt-4 flex-1 text-base leading-relaxed text-ink">
              &ldquo;{review.quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-4">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red/10 text-sm font-semibold text-red"
              >
                {review.name.charAt(0)}
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{review.name}</p>
                <p className="mt-0.5 text-sm text-ink/50">
                  {review.place} · {review.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Avis précédents"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition hover:bg-ink hover:text-cream"
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Avis suivants"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition hover:bg-ink hover:text-cream"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
