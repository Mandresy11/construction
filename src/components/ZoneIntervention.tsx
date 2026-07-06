import Image from "next/image";
import { Reveal } from "./motion/Reveal";
import { SectionPhotoBg } from "./SectionPhotoBg";
import { MapPinIcon } from "./icons/MapPinIcon";

const COMMUNES = [
  "Saint-Denis",
  "Sainte-Marie",
  "Saint-André",
  "Saint-Benoît",
  "Saint-Joseph",
  "Saint-Pierre",
  "Le Tampon",
  "Saint-Louis",
  "Saint-Leu",
  "Saint-Paul",
  "Saint-Gilles-les-Bains",
  "Cilaos",
  "Salazie",
];

// Coordinates below are calibrated to the actual island silhouette inside
// carteRéunion.png (a 1536x1024 / 3:2 image). The container now matches that
// aspect ratio exactly (no object-contain letterboxing), so these are the
// raw pixel fractions of the source image and markers land precisely on land.
const SAINT_DENIS = { left: "58.2%", top: "5.5%" };
const SAINT_PIERRE = { left: "49.6%", top: "72.1%" };

const MARKERS = [
  { left: "72.3%", top: "15.5%" }, // Saint-André (NE)
  { left: "82.8%", top: "34.5%" }, // Saint-Benoît (E)
  { left: "76.3%", top: "59.6%" }, // Saint-Joseph (SE)
  { left: "50%", top: "49%" }, // Saint-Louis (SW)
  { left: "33%", top: "34.5%" }, // Saint-Paul (W)
  { left: "45.2%", top: "13%" }, // Saint-Leu (NW)
];

const HAUTS_MARKERS = [
  { left: "54%", top: "24%" }, // Salazie
  { left: "62%", top: "38%" }, // Cilaos
];

export function ZoneIntervention() {
  return (
    <SectionPhotoBg
      src="/exemple/back5.png"
      alt=""
      overlay="linear-gradient(180deg, rgba(5,5,5,0.8) 0%, rgba(5,5,5,0.9) 100%)"
      className="px-6 py-16 text-cream md:px-10 lg:py-24"
    >
      {/* 3fr/4fr : la colonne carte doit être plus large que la colonne texte
          pour que l'île rende à la même taille que dans la maquette exemple6
          (~32vw de large), impossible avec une grille 50/50. */}
      <div className="grid gap-16 lg:grid-cols-[3fr_4fr] lg:items-center lg:gap-16">
        <Reveal className="flex flex-col justify-center">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-red">
            <MapPinIcon className="h-4 w-4" />
            Zone d&apos;intervention
          </p>
          <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-tight lg:text-5xl">
            Nous intervenons
            <br />
            partout à la <span className="text-red">Réunion</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/70">
            Charpente, construction bois et coordination de travaux : nos
            équipes se déplacent sur toute l&apos;île, du littoral aux hauts,
            de Saint-Denis à Saint-Pierre en passant par Saint-Paul.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {COMMUNES.slice(0, 8).map((commune) => (
              <span
                key={commune}
                className="inline-flex items-center gap-2 rounded-md border border-cream/15 bg-cream/5 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-cream/85"
              >
                <MapPinIcon className="h-3.5 w-3.5" />
                {commune}
              </span>
            ))}
            <span className="inline-flex items-center rounded-md border border-dashed border-cream/25 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-cream/60">
              + {COMMUNES.length - 8} autres communes
            </span>
          </div>

          <a
            href="#contact"
            className="group mt-8 inline-flex w-fit items-center gap-3 bg-red px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-cream transition hover:bg-cream hover:text-ink active:scale-[0.97]"
          >
            Obtenir un devis gratuit
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.1} className="flex justify-center">
          <div className="relative mx-auto mt-14 aspect-3/2 w-full sm:mt-16">
            <span
              aria-hidden="true"
              className="absolute inset-[-8%] rounded-full border border-dashed border-red/20"
            />

            <div className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-[calc(100%+2rem)] flex-col items-center gap-1.5">
              <span className="whitespace-nowrap rounded-md border border-cream/20 bg-ink/80 px-3 py-1.5 text-xs font-semibold text-cream shadow-lg backdrop-blur-sm">
                Saint-Denis
              </span>
              <span aria-hidden="true" className="h-4 w-px border-l border-dashed border-red/50" />
            </div>

            <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-[calc(100%+2rem)] flex-col items-center gap-1.5">
              <span aria-hidden="true" className="h-4 w-px border-l border-dashed border-red/50" />
              <span className="whitespace-nowrap rounded-md border border-cream/20 bg-ink/80 px-3 py-1.5 text-xs font-semibold text-cream shadow-lg backdrop-blur-sm">
                Saint-Pierre
              </span>
            </div>

            <Image
              src="/exemple/carteRéunion.png"
              alt="Carte stylisée de La Réunion avec la zone d'intervention"
              fill
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="object-contain"
            />

            <span
              aria-hidden="true"
              className="ring-pulse absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-red/40"
              style={SAINT_DENIS}
            />
            <span
              aria-hidden="true"
              className="absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red"
              style={SAINT_DENIS}
            />

            <span
              aria-hidden="true"
              className="ring-pulse absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-red/40"
              style={SAINT_PIERRE}
            />
            <span
              aria-hidden="true"
              className="absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red"
              style={SAINT_PIERRE}
            />

            {MARKERS.map((marker, i) => (
              <span
                key={i}
                aria-hidden="true"
                className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red/80"
                style={marker}
              />
            ))}

            {HAUTS_MARKERS.map((marker, i) => (
              <span
                key={i}
                aria-hidden="true"
                className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue"
                style={marker}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </SectionPhotoBg>
  );
}
