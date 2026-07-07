import Image from "next/image";
import { Reveal } from "./motion/Reveal";
import { ZoneCommunesToggle } from "./ZoneCommunesToggle";
import { Icon } from "./icons/Iconify";

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
// carteRéunion.png (a 1536x1024 / 3:2 image, island spanning ~x 26-83% /
// y 13-78% of the frame). The container matches that aspect ratio exactly
// (no object-contain letterboxing), so these are raw pixel fractions of the
// source image and markers land precisely on the coastline.
const SAINT_DENIS = { left: "46%", top: "16%" };
const SAINT_PIERRE = { left: "63%", top: "71.5%" };

const MARKERS = [
  { left: "63%", top: "22%" }, // Saint-André (NE)
  { left: "74.5%", top: "38%" }, // Saint-Benoît (E)
  { left: "72.5%", top: "63%" }, // Saint-Joseph (SE)
  { left: "47.5%", top: "58%" }, // Saint-Louis (SW)
  { left: "33%", top: "38%" }, // Saint-Paul (W)
  { left: "35.5%", top: "25%" }, // Saint-Leu (NW)
];

const HAUTS_MARKERS = [
  { left: "50%", top: "32%" }, // Salazie
  { left: "52%", top: "48%" }, // Cilaos
];

function ReunionMap({ className = "" }: { className?: string }) {
  return (
    <div className={`relative mx-auto aspect-3/2 w-full ${className}`}>
      <span
        aria-hidden="true"
        className="absolute inset-[-8%] rounded-full border border-dashed border-red/20"
      />

      <Image
        src="/exemple/carteRéunion.png"
        alt="Carte stylisée de La Réunion avec la zone d'intervention"
        fill
        sizes="(min-width: 1024px) 40vw, 80vw"
        className="object-contain"
      />

      <div
        className="absolute flex -translate-x-1/2 -translate-y-[calc(100%+1.25rem)] flex-col items-center gap-1.5"
        style={SAINT_DENIS}
      >
        <span className="whitespace-nowrap rounded-md border border-cream/20 bg-ink/80 px-3 py-1.5 text-xs font-semibold text-cream shadow-lg backdrop-blur-sm">
          Saint-Denis
        </span>
        <span aria-hidden="true" className="h-4 w-px border-l border-dashed border-red/50" />
      </div>

      <div
        className="absolute flex -translate-x-1/2 translate-y-5 flex-col items-center gap-1.5"
        style={SAINT_PIERRE}
      >
        <span aria-hidden="true" className="h-4 w-px border-l border-dashed border-red/50" />
        <span className="whitespace-nowrap rounded-md border border-cream/20 bg-ink/80 px-3 py-1.5 text-xs font-semibold text-cream shadow-lg backdrop-blur-sm">
          Saint-Pierre
        </span>
      </div>

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
  );
}

export function ZoneIntervention() {
  return (
    <section className="bg-ink px-6 py-16 text-cream sm:pt-36 md:px-10 md:pt-40 lg:pt-44 lg:pb-24">
      {/* 3fr/4fr : la colonne carte doit être plus large que la colonne texte
          pour que l'île rende à la même taille que dans la maquette exemple6
          (~32vw de large), impossible avec une grille 50/50. */}
      <div className="grid gap-16 lg:grid-cols-[3fr_4fr] lg:items-center lg:gap-16">
        <Reveal className="flex flex-col justify-center">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-red">
            <Icon icon="lucide:map-pin" className="h-4 w-4" />
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

          <ReunionMap className="mt-8 max-w-xl lg:hidden" />

          <ZoneCommunesToggle communes={COMMUNES} />

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

        <Reveal delay={0.1} className="hidden justify-center lg:flex">
          <ReunionMap className="mt-14 sm:mt-16" />
        </Reveal>
      </div>
    </section>
  );
}
