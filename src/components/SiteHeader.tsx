"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNav } from "./MobileNav";
import { NAV_ITEMS } from "@/lib/nav";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between gap-6 px-6 py-4 md:px-10">
      {/* Pastille crème : le logo est en PNG transparent aux traits noirs,
          invisible directement sur fond sombre. */}
      <Link href="/" className="flex shrink-0 items-center justify-center rounded-md bg-cream p-1.5">
        <Image
          src="/exemple/logo.png"
          alt="Nemrod's Emergence Construction"
          width={1254}
          height={1254}
          priority
          className="h-13 w-13"
        />
      </Link>

      <nav className="hidden flex-1 justify-center lg:flex">
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] font-medium tracking-tight">
          {NAV_ITEMS.map((item) => {
            const active = item.href === pathname;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    active
                      ? "border-b-2 border-red pb-1 text-cream"
                      : "pb-1 text-cream/85 transition hover:text-cream"
                  }
                >
                  {item.label.toUpperCase()}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <MobileNav
        items={NAV_ITEMS.map((item) => ({ ...item, active: item.href === pathname }))}
        light
      />

      <Link
        href="/#contact"
        className="group hidden shrink-0 items-center gap-3 bg-blue px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition hover:bg-ink active:scale-[0.97] lg:flex"
      >
        Devis gratuit
        <span
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </Link>
    </header>
  );
}
