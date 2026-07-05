function IconBase({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-10 w-10" aria-hidden="true">
      {children}
    </svg>
  );
}

export function ClipboardIcon() {
  return (
    <IconBase>
      <rect x="16" y="10" width="32" height="46" rx="2" stroke="var(--ink)" strokeWidth="2" />
      <rect x="24" y="6" width="16" height="8" rx="2" fill="var(--ink)" />
      <path d="M22 26H34" stroke="var(--ink)" strokeWidth="2" />
      <path d="M22 34H34" stroke="var(--ink)" strokeWidth="2" />
      <path d="M22 42H30" stroke="var(--ink)" strokeWidth="2" />
      <path
        d="M40 44L48 36L52 40L44 48L39 49L40 44Z"
        stroke="var(--ink)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function BlueprintIcon() {
  return (
    <IconBase>
      <rect x="12" y="12" width="34" height="40" stroke="var(--ink)" strokeWidth="2" />
      <path d="M18 20H40" stroke="var(--ink)" strokeWidth="2" />
      <path d="M18 28H32" stroke="var(--ink)" strokeWidth="2" />
      <path d="M18 36H40" stroke="var(--ink)" strokeWidth="2" />
      <path d="M18 44H28" stroke="var(--ink)" strokeWidth="2" />
      <path
        d="M38 42L50 30L54 34L42 46L37 47L38 42Z"
        stroke="var(--ink)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function TrussIcon() {
  return (
    <IconBase>
      <path d="M12 46V30L32 14L52 30V46" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 30H52" stroke="var(--ink)" strokeWidth="2" />
      <path d="M20 46V34" stroke="var(--ink)" strokeWidth="2" />
      <path d="M44 46V34" stroke="var(--ink)" strokeWidth="2" />
    </IconBase>
  );
}

export function TruckIcon() {
  return (
    <IconBase>
      <rect x="8" y="26" width="28" height="18" stroke="var(--ink)" strokeWidth="2" />
      <path d="M36 32H46L52 38V44H36V32Z" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="18" cy="46" r="4" stroke="var(--ink)" strokeWidth="2" />
      <circle cx="44" cy="46" r="4" stroke="var(--ink)" strokeWidth="2" />
      <path
        d="M14 34L18 38L26 30"
        stroke="var(--red)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}
