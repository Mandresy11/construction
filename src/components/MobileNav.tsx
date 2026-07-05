"use client";

import Link from "next/link";
import { useState } from "react";

type NavItem = { label: string; href: string; active?: boolean };

export function MobileNav({ items, light = false }: { items: NavItem[]; light?: boolean }) {
  const [open, setOpen] = useState(false);
  const barColor = light && !open ? "bg-cream" : "bg-ink";
  const borderColor = light && !open ? "border-cream/40" : "border-ink/20";

  return (
    <div className="flex items-center lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOpen((v) => !v)}
        className={`relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 border ${borderColor}`}
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
          className="fixed inset-0 z-40 flex flex-col gap-8 overflow-y-auto bg-cream px-6 pt-24 pb-10"
        >
          <ul className="flex flex-col gap-5 text-lg font-medium">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={
                    item.active
                      ? "text-blue"
                      : "text-ink/80 transition hover:text-ink"
                  }
                >
                  {item.label.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
