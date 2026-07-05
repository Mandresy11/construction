"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

export function CountUp({
  to,
  className,
  duration = 1.4,
}: {
  to: number;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const shouldReduce = useReducedMotion();
  const value = useMotionValue(0);
  const spring = useSpring(value, { duration: duration * 1000, bounce: 0 });

  // The server renders the final value (SEO / no-JS). On the client, zero it
  // out before first paint so the count-up starts from 0 when scrolled into view.
  useLayoutEffect(() => {
    if (!shouldReduce && ref.current) ref.current.textContent = "0";
  }, [shouldReduce]);

  useEffect(() => {
    if (!inView) return;
    if (shouldReduce) {
      if (ref.current) ref.current.textContent = String(to);
      return;
    }
    value.set(to);
  }, [inView, shouldReduce, to, value]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = String(Math.round(v));
    });
  }, [spring]);

  return (
    <span ref={ref} className={className}>
      {to}
    </span>
  );
}
