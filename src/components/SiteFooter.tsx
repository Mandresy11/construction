import Image from "next/image";
import Link from "next/link";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface SiteFooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

export function SiteFooter({
  logo = {
    src: "/exemple/logo.png",
    alt: "Nemrod's Emergence Construction",
    title: "Nemrod's Emergence",
    url: "/",
  },
  tagline = "Charpente traditionnelle et construction bois pour les particuliers exigeants, partout à La Réunion.",
  menuItems = [
    {
      title: "Prestations",
      links: [
        { text: "Charpente", url: "/#charpente" },
        { text: "Construction bois", url: "/#construction-bois" },
        { text: "Coordination de travaux", url: "/#coordination-de-travaux" },
      ],
    },
    {
      title: "Entreprise",
      links: [
        { text: "Réalisations", url: "/#realisations" },
        { text: "À propos", url: "/#a-propos" },
        { text: "Avis clients", url: "/#avis-clients" },
        { text: "FAQ", url: "/#faq" },
      ],
    },
    {
      title: "Contact",
      links: [
        { text: "02 62 00 00 00", url: "tel:+262262000000" },
        { text: "contact@nemrods-emergence.re", url: "mailto:contact@nemrods-emergence.re" },
        { text: "Toute La Réunion", url: "/#contact" },
      ],
    },
  ],
  copyright = `© ${new Date().getFullYear()} Nemrod's Emergence Construction. Tous droits réservés.`,
  bottomLinks = [
    { text: "Mentions légales", url: "#" },
    { text: "Politique de confidentialité", url: "#" },
  ],
}: SiteFooterProps) {
  return (
    <footer className="bg-ink px-6 py-12 text-cream md:px-10 lg:py-16">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
        <div className="col-span-2 mb-4 lg:mb-0">
          <div className="flex items-center gap-3">
            <Link
              href={logo.url}
              className="flex shrink-0 items-center justify-center rounded-md bg-cream p-1.5"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={1254}
                height={1254}
                className="h-11 w-11"
              />
            </Link>
            <p className="font-display text-base uppercase leading-tight">{logo.title}</p>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">{tagline}</p>
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

        {menuItems.map((section) => (
          <div key={section.title}>
            <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-cream/50">
              {section.title}
            </h3>
            <ul className="space-y-3 text-sm">
              {section.links.map((link) => (
                <li key={link.text}>
                  <Link href={link.url} className="transition hover:text-blue">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col justify-between gap-4 border-t border-cream/15 pt-6 text-xs text-cream/50 md:flex-row md:items-center">
        <p>
          {copyright} <span className="text-red">·</span>{" "}
          <span className="uppercase tracking-[0.15em]">Made in La Réunion</span>
        </p>
        <ul className="flex flex-wrap gap-4">
          {bottomLinks.map((link) => (
            <li key={link.text}>
              <Link href={link.url} className="underline transition hover:text-blue">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Wordmark signature, tronqué par le bas du footer */}
      <div
        aria-hidden="true"
        className="pointer-events-none -mx-6 -mb-12 mt-8 select-none overflow-hidden md:-mx-10 lg:-mb-16"
      >
        <p className="translate-y-[30%] whitespace-nowrap text-center font-display text-[19vw] leading-none text-cream/5 lg:text-[15vw]">
          NEMROD&apos;S
        </p>
      </div>
    </footer>
  );
}
