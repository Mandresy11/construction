"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "./icons/Iconify";

type NavItem = { label: string; href: string; active?: boolean };

export function MobileNav({ items, light = false }: { items: NavItem[]; light?: boolean }) {
  const [open, setOpen] = useState(false);
  const barColor = light && !open ? "bg-cream" : "bg-ink";
  const borderColor = light && !open ? "border-cream/40" : "border-ink/20";

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <div className="flex items-center lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOpen((v) => !v)}
        className={`${
          open
            ? "fixed right-8 top-8 z-[2147483647] border-ink/15 bg-white shadow-[0_12px_30px_rgba(20,20,15,0.18)]"
            : `relative z-50 ${borderColor}`
        } flex h-10 w-10 flex-col items-center justify-center gap-1.5 border transition`}
      >
        <span
          className={`h-0.5 w-5 ${barColor} transition ${open ? "translate-y-2 rotate-45" : ""}`}
        />
        <span className={`h-0.5 w-5 ${barColor} transition ${open ? "opacity-0" : ""}`} />
        <span
          className={`h-0.5 w-5 ${barColor} transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {open ? (
        <nav
          id="mobile-nav-panel"
          className="fixed inset-0 z-[2147483646] isolate flex h-[100dvh] min-h-screen w-screen flex-col overflow-y-auto bg-cream px-6 py-7 text-ink"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,var(--red)_0_32%,var(--blue-logo)_32%_68%,var(--ink)_68%_100%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(145deg,rgba(226,55,42,0.10)_0%,transparent_38%),repeating-linear-gradient(135deg,rgba(20,20,15,0.045)_0_1px,transparent_1px_18px)]"
          />

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="relative z-10 flex w-fit items-center gap-3"
          >
            <span className="flex h-15 w-15 shrink-0 items-center justify-center rounded-md border border-ink/10 bg-white p-1.5 shadow-[0_12px_30px_rgba(20,20,15,0.12)]">
              <Image
                src="/exemple/logo.png"
                alt="Nemrod's Emergence Construction"
                width={1254}
                height={1254}
                className="h-full w-full object-contain"
              />
            </span>
            <span>
              <span className="block font-display text-base uppercase leading-none">
                Nemrod&apos;s
              </span>
              <span className="mt-1 block text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-red">
                Emergence
              </span>
            </span>
          </Link>

          <ul className="relative z-10 mt-10 flex flex-col gap-2 text-base font-semibold uppercase tracking-wide">
            {items.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={
                    item.active
                      ? "flex items-center justify-between rounded-md border border-blue/15 bg-white px-4 py-4 text-blue shadow-[0_10px_24px_rgba(20,20,15,0.08)]"
                      : "flex items-center justify-between rounded-md border border-transparent px-4 py-4 text-ink/75 transition hover:border-ink/10 hover:bg-white/70 hover:text-ink"
                  }
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span
                      aria-hidden="true"
                      className={item.active ? "text-xs text-red" : "text-xs text-ink/35"}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="truncate">{item.label.toUpperCase()}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={item.active ? "text-red" : "text-ink/25"}
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="relative z-10 mt-auto pt-10">
            <div className="mb-4 rounded-md border border-ink/10 bg-ink px-4 py-4 text-cream shadow-[0_18px_40px_rgba(20,20,15,0.18)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cream/45">
                Contact direct
              </p>
              <a
                href="tel:+262262000000"
                className="mt-3 flex items-center gap-3 text-sm font-semibold"
              >
                <Icon icon="lucide:phone" className="h-4 w-4 text-red" />
                02 62 00 00 00
              </a>
              <p className="mt-2 flex items-center gap-3 text-sm text-cream/65">
                <Icon icon="lucide:map-pin" className="h-4 w-4 text-blue-logo" />
                Toute La Réunion
              </p>
            </div>
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="group flex w-full items-center justify-center gap-3 bg-blue-logo px-6 py-4 text-sm font-semibold uppercase tracking-wide text-ink shadow-[0_14px_30px_rgba(117,192,246,0.24)] transition hover:bg-ink hover:text-cream active:scale-[0.97]"
            >
              Devis gratuit
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </nav>
      ) : null}
    </div>
  );
}
