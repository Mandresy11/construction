"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export function MobileCtaBubble() {
  const [pastHero, setPastHero] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const contact = document.getElementById("contact");
    let observer: IntersectionObserver | undefined;
    if (contact) {
      observer = new IntersectionObserver(
        ([entry]) => setContactVisible(entry.isIntersecting),
        { threshold: 0.15 }
      );
      observer.observe(contact);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  const show = pastHero && !contactVisible;

  return (
    <AnimatePresence>
      {show ? (
        <motion.a
          key="mobile-cta"
          href="#contact"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: shouldReduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 right-4 z-50 flex items-center gap-2.5 rounded-full bg-red px-5 py-3.5 text-sm font-semibold uppercase tracking-wide text-cream shadow-[0_10px_30px_rgba(20,20,15,0.35)] active:scale-95 sm:hidden"
        >
          <span aria-hidden="true" className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-cream opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cream" />
          </span>
          Devis gratuit
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
