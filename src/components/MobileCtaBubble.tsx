"use client";

import { motion, useReducedMotion } from "motion/react";
import { Icon } from "./icons/Iconify";

export function MobileCtaBubble() {
  const shouldReduce = useReducedMotion();

  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-5 right-5 z-[60] flex items-center gap-2.5 rounded-full bg-red py-2 pl-4 pr-2 text-xs font-semibold uppercase tracking-wide text-cream shadow-[0_8px_24px_rgba(20,20,15,0.3)] transition active:scale-95 sm:hidden"
    >
      Devis gratuit
      <span
        aria-hidden="true"
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cream text-red"
      >
        <Icon icon="lucide:arrow-up-right" className="h-4 w-4" />
      </span>
    </motion.a>
  );
}
