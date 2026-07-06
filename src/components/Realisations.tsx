import { RealisationsCarousel } from "./RealisationsCarousel";
import { SectionPhotoBg } from "./SectionPhotoBg";

const PROJECTS = [
  {
    id: "villa-panoramique",
    title: "Villa bois panoramique",
    place: "Saint-Paul",
    type: "Villa",
    services: ["Charpente", "Construction bois"],
    image: "/image/chantier1.png",
  },
  {
    id: "interieur-bois",
    title: "Aménagement intérieur bois",
    place: "Saint-Denis",
    type: "Intérieur",
    services: ["Aménagement", "Menuiserie"],
    image: "/image/chantier2.png",
  },
  {
    id: "carport-allee",
    title: "Carport & allée couverte",
    place: "Saint-Leu",
    type: "Carport",
    services: ["Structure bois", "Carport"],
    image: "/image/chantier3.png",
  },
  {
    id: "terrasse-belvedere",
    title: "Terrasse belvédère",
    place: "Cilaos",
    type: "Terrasse",
    services: ["Charpente", "Terrasse"],
    image: "/image/chantier4.png",
  },
  {
    id: "bungalow-jardin",
    title: "Bungalow de jardin",
    place: "Saint-André",
    type: "Bungalow",
    services: ["Bungalow", "Construction bois"],
    image: "/image/chantier5.png",
  },
  {
    id: "villa-piscine",
    title: "Villa & piscine à débordement",
    place: "Saint-Gilles-les-Bains",
    type: "Villa",
    services: ["Piscine", "Terrasse"],
    image: "/image/chantier6.png",
  },
  {
    id: "extension-bois",
    title: "Extension bois sur maison existante",
    place: "Saint-Pierre",
    type: "Extension",
    services: ["Extension", "Coordination de travaux"],
    image: "/image/chantier7.png",
  },
  {
    id: "villa-bassin",
    title: "Villa bois & bassin miroir",
    place: "Salazie",
    type: "Villa",
    services: ["Construction bois", "Piscine"],
    image: "/image/chantier8.png",
  },
];

function PortfolioCta({ className }: { className: string }) {
  return (
    <a
      href="#contact"
      className={`group items-center justify-center gap-3 bg-red px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-cream transition hover:bg-cream hover:text-ink active:scale-[0.97] ${className}`}
    >
      Démarrer votre projet
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  );
}

export function Realisations() {
  return (
    <section id="realisations" className="bg-ink">
      <SectionPhotoBg
        src="/exemple/back3.png"
        alt=""
        overlay="linear-gradient(180deg, rgba(10,10,8,0.82) 0%, rgba(10,10,8,0.92) 100%)"
        className="pb-14 pt-16 text-cream lg:pb-16 lg:pt-24"
      >
        <div className="flex flex-col gap-8 px-6 sm:flex-row sm:items-end sm:justify-between md:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red">
              Portfolio
            </p>
            <h2 className="mt-3 max-w-xl font-display text-4xl uppercase leading-[0.95] tracking-tight lg:text-5xl">
              Nos réalisations
            </h2>
          </div>
          {/* En mobile, le CTA passe sous le carousel (voir plus bas) */}
          <PortfolioCta className="hidden w-fit shrink-0 sm:inline-flex" />
        </div>

        <RealisationsCarousel projects={PROJECTS} />

        <div className="mt-8 px-6 sm:hidden">
          <PortfolioCta className="flex w-full" />
        </div>
      </SectionPhotoBg>
    </section>
  );
}
