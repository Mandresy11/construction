"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const EASE_LUXE = [0.22, 1, 0.36, 1] as const;

type FaqItem = { q: string; a: string };

export function FaqList({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduce = useReducedMotion();

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.q}
            className={`rounded-2xl border backdrop-blur-sm transition-colors duration-300 ${
              isOpen
                ? "border-red/50 bg-ink/60"
                : "border-cream/10 bg-ink/40 hover:border-cream/30"
            }`}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full cursor-pointer items-center gap-4 px-5 py-4 text-left"
            >
              <span
                aria-hidden="true"
                className={`shrink-0 font-display text-lg transition-colors duration-300 ${
                  isOpen ? "text-red" : "text-cream/40"
                }`}
              >
                0{i + 1}
              </span>
              <span className="flex-1 font-display text-lg uppercase leading-snug text-cream">
                {item.q}
              </span>
              <motion.span
                aria-hidden="true"
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: shouldReduce ? 0 : 0.3, ease: EASE_LUXE }}
                className="shrink-0 text-2xl text-red"
              >
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: shouldReduce ? 0 : 0.35, ease: EASE_LUXE }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl px-5 pb-5 pl-14 text-sm leading-relaxed text-cream/70">
                    {item.a}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
