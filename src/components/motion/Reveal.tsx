"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE_LUXE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  className,
  y = 24,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      // `initial` is serialized into the SSR style attribute, where
      // useReducedMotion() is always false — branching it on shouldReduce
      // causes a hydration mismatch. Zero duration removes motion instead.
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: shouldReduce ? 0 : 0.7,
        delay: shouldReduce ? 0 : delay,
        ease: EASE_LUXE,
      }}
    >
      {children}
    </motion.div>
  );
}
