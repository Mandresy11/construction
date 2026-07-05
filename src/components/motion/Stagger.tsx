"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE_LUXE = [0.22, 1, 0.36, 1] as const;

export function StaggerGroup({
  children,
  className,
  delay = 0,
  stagger = 0.09,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  amount?: number;
}) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: shouldReduce ? 0 : stagger,
            delayChildren: shouldReduce ? 0 : delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      // The hidden state must not depend on shouldReduce: it is serialized
      // into the SSR style attribute, and useReducedMotion() always returns
      // false on the server — branching here causes a hydration mismatch.
      // A zero-duration transition removes all perceived motion instead.
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: shouldReduce ? 0 : 0.7, ease: EASE_LUXE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
