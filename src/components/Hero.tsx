import { StaggerGroup, StaggerItem } from "./motion/Stagger";

const OFFERS = [
  {
    value: "25%",
    label: "De réduction",
    line2: "Sur les matériaux",
    line2Accent: true,
    line3: "Pour tous vos projets bois",
  },
  {
    value: "10x",
    label: "Paiement",
    line2: "Des matériaux en 10 fois",
    line2Accent: false,
    line3: "Sans frais, sans dossier compliqué",
  },
  {
    value: "40€/h",
    label: "Main-d'œuvre",
    labelAccent: true,
    line2: "Qualifiée & expérimentée",
    line2Accent: false,
    line3: "",
  },
];

export function Hero() {
  return (
    // min-h-svh en mobile : le hero remplit tout l'écran du téléphone
    // (svh = hauteur stable, ne saute pas quand la barre du navigateur se
    // replie). Le header étant fixed, il flotte par-dessus.
    <section className="relative isolate flex min-h-svh flex-col overflow-hidden text-cream sm:min-h-[640px] lg:min-h-[820px]">
      <video
        className="absolute inset-0 h-full w-full object-cover object-[60%_42%]"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/image/background/background.png"
        aria-hidden="true"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-ink/5" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-transparent to-ink/70" />

      <div className="relative z-10 flex flex-1 flex-col">
        <StaggerGroup
          className="flex flex-1 flex-col justify-center px-6 py-10 md:px-10 lg:max-w-3xl lg:px-16"
          delay={0.15}
        >
          <StaggerItem>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cream">
              <span className="border-b-2 border-red pb-1">Charpente bois &amp; construction</span>
            </p>
          </StaggerItem>

          <StaggerItem y={32}>
            <h1 className="font-display uppercase tracking-tight text-[13vw] leading-[0.92] sm:text-[8vw] lg:text-[clamp(2.75rem,4.6vw,5.2rem)]">
              Construire autrement
              <br />
              à la Réunion
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-6 whitespace-nowrap font-display text-xs uppercase leading-tight sm:text-lg">
              L&apos;expertise bois. L&apos;accompagnement de A à Z.
            </p>
            {/* En mobile on garde seulement la tagline : le hero respire mieux */}
            <p className="mt-3 hidden max-w-lg text-sm leading-relaxed text-cream/80 sm:block">
              Charpente traditionnelle et construction bois pour les
              particuliers et les professionnels. De l&apos;étude à la
              livraison, nous coordonnons chaque étape de votre projet.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group flex items-center gap-3 bg-blue-logo px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ink transition hover:bg-ink hover:text-cream active:scale-[0.97]"
              >
                Obtenir un devis gratuit
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
              <a
                href="#realisations"
                className="group flex items-center gap-3 border border-blue-logo/70 bg-blue-logo/15 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition hover:border-blue-logo hover:bg-blue-logo hover:text-ink active:scale-[0.97]"
              >
                Voir nos réalisations
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </StaggerItem>
        </StaggerGroup>

        <StaggerGroup
          className="hidden divide-y divide-cream/20 border-t border-cream/20 bg-ink/45 sm:grid sm:grid-cols-3 sm:divide-x sm:divide-y-0"
          delay={0.5}
          stagger={0.12}
        >
          {OFFERS.map((offer) => (
            <StaggerItem key={offer.value} className="flex flex-col px-6 py-6 md:px-10">
              <div>
                <p className="flex flex-wrap items-baseline gap-x-2 font-display text-3xl leading-none sm:text-4xl">
                  <span>{offer.value}</span>
                  <span
                    className={`text-sm font-sans font-semibold whitespace-nowrap ${
                      offer.labelAccent ? "text-red" : "text-cream"
                    }`}
                  >
                    {offer.label}
                  </span>
                </p>
                <p
                  className={`mt-2 text-sm uppercase tracking-wide ${
                    offer.line2Accent ? "text-red" : "text-cream/90"
                  }`}
                >
                  {offer.line2}
                </p>
                {offer.line3 ? (
                  <p className="mt-1 text-xs uppercase tracking-wide text-cream/60">
                    {offer.line3}
                  </p>
                ) : null}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
