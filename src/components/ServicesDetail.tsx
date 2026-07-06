import { Reveal } from "./motion/Reveal";
import { SectionPhotoBg } from "./SectionPhotoBg";
import { ServicesDetailCarousel } from "./ServicesDetailCarousel";

const SERVICES_DETAIL = [
  {
    n: "01",
    id: "charpente",
    title: "Charpente traditionnelle",
    description: "Structures en bois massif taillées sur mesure, conçues pour durer.",
    features: [
      "Bois massif, climat tropical",
      "Plans calculés sur mesure",
      "Garantie décennale",
    ],
    image: "/image/background/background.png",
    imageAlt:
      "Charpente traditionnelle en bois massif construite par Nemrod's Emergence Construction",
  },
  {
    n: "02",
    id: "construction-bois",
    title: "Construction bois",
    description: "Villas, extensions et bungalows en ossature bois, sur mesure.",
    features: [
      "Isolation thermique supérieure",
      "Chantier préfabriqué en atelier",
      "Un seul interlocuteur",
    ],
    image: "/exemple/image1.png",
    imageAlt:
      "Villa bois moderne construite par Nemrod's Emergence Construction, face au relief de La Réunion",
  },
  {
    n: "03",
    id: "coordination-de-travaux",
    title: "Coordination de travaux",
    description: "Un interlocuteur unique pour coordonner tous les corps de métier.",
    features: [
      "Planning maîtrisé",
      "Partenaires qualifiés",
      "Suivi jusqu'à réception",
    ],
    image: "/image/chantier6.png",
    imageAlt: "Villa et piscine à débordement, chantier multi-corps de métier coordonné",
  },
  {
    n: "04",
    id: "extension-renovation",
    title: "Extension & rénovation",
    description: "Agrandissement, surélévation ou rénovation de structures bois existantes.",
    features: [
      "Diagnostic de l'existant",
      "Raccord invisible à la structure",
      "Chantier propre et rapide",
    ],
    image: "/image/chantier7.png",
    imageAlt: "Extension bois sur maison existante réalisée par Nemrod's Emergence Construction",
  },
  {
    n: "05",
    id: "terrasse-carport",
    title: "Terrasse & carport bois",
    description: "Terrasses, pergolas et carports en bois massif, adaptés au climat tropical.",
    features: [
      "Bois classe 4 traité autoclave",
      "Toiture bac acier ou tuile",
      "Pose en 1 à 2 semaines",
    ],
    image: "/image/chantier4.png",
    imageAlt: "Terrasse belvédère en bois construite par Nemrod's Emergence Construction",
  },
  {
    n: "06",
    id: "amenagement-interieur",
    title: "Aménagement intérieur bois",
    description: "Menuiserie et agencements bois sur mesure, du sol au plafond.",
    features: [
      "Menuiserie sur mesure",
      "Finitions soignées",
      "Essences locales ou importées",
    ],
    image: "/image/chantier2.png",
    imageAlt: "Aménagement intérieur bois réalisé par Nemrod's Emergence Construction",
  },
];

export function ServicesDetail() {
  return (
    <SectionPhotoBg
      src="/image/chantier3.png"
      alt=""
      overlay="linear-gradient(180deg, rgba(241,239,230,0.86) 0%, rgba(241,239,230,0.95) 100%)"
      className="px-6 py-12 text-ink md:px-10 lg:py-24"
    >
      <section id="services">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red">
            Nos prestations
          </p>
          <h2 className="mt-4 font-display text-3xl uppercase leading-[0.95] tracking-tight text-ink lg:text-4xl">
            Nos services en détail
          </h2>
        </Reveal>

        <ServicesDetailCarousel services={SERVICES_DETAIL} />
      </section>
    </SectionPhotoBg>
  );
}
