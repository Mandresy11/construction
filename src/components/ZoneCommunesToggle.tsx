"use client";

import { useState } from "react";
import { Icon } from "./icons/Iconify";

const VISIBLE_COMMUNES = 4;

export function ZoneCommunesToggle({ communes }: { communes: string[] }) {
  const [expanded, setExpanded] = useState(false);
  const visibleCommunes = expanded ? communes : communes.slice(0, VISIBLE_COMMUNES);
  const hiddenCount = Math.max(communes.length - VISIBLE_COMMUNES, 0);

  return (
    <div className="mt-8 flex flex-wrap gap-2.5">
      {visibleCommunes.map((commune) => (
        <span
          key={commune}
          className="inline-flex items-center gap-2 rounded-md border border-cream/15 bg-cream/5 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-cream/85"
        >
          <Icon icon="lucide:map-pin" className="h-3.5 w-3.5 text-red" />
          {commune}
        </span>
      ))}

      {hiddenCount > 0 ? (
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((value) => !value)}
          className="inline-flex items-center rounded-md border border-dashed border-cream/25 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-cream/70 transition hover:border-red/50 hover:text-cream"
        >
          {expanded ? "Voir moins" : `+ ${hiddenCount} autres communes`}
        </button>
      ) : null}
    </div>
  );
}
