import Image from "next/image";
import Link from "next/link";

const PRESTATIONS = [
  { label: "Charpente", href: "/#charpente" },
  { label: "Construction bois", href: "/#construction-bois" },
  { label: "Coordination de travaux", href: "/#coordination-de-travaux" },
];

const ENTREPRISE = [
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Avis clients", href: "/avis-clients" },
  { label: "FAQ", href: "/faq" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink px-6 py-12 text-cream md:px-10 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
        <div>
          <Link href="/" className="inline-block">
            <Image
              src="/exemple/logo.png"
              alt="Nemrod's Emergence Construction"
              width={1254}
              height={1254}
              className="h-20 w-20 rounded-lg"
            />
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/60">
            Charpente traditionnelle et construction bois pour les particuliers
            exigeants, partout à La Réunion.
          </p>
          <Link
            href="/#contact"
            className="group mt-6 inline-flex items-center gap-3 bg-blue px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition hover:bg-cream hover:text-ink active:scale-[0.97]"
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

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cream/50">Prestations</p>
          <ul className="mt-4 space-y-2 text-sm">
            {PRESTATIONS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-blue">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cream/50">Entreprise</p>
          <ul className="mt-4 space-y-2 text-sm">
            {ENTREPRISE.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-blue">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-3 border-t border-cream/15 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Nemrod&apos;s Emergence Construction. Tous droits réservés.</p>
        <p className="uppercase tracking-[0.2em]">
          Conçu et bâti <span className="text-red">·</span> Made in La Réunion
        </p>
      </div>
    </footer>
  );
}
