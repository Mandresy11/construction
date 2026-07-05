function IconBase({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className ?? "h-10 w-10"} aria-hidden="true">
      {children}
    </svg>
  );
}

export function CharpenteIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M32 8L10 52H54L32 8Z" stroke="var(--ink)" strokeWidth="2" />
      <path d="M20 34H44" stroke="var(--ink)" strokeWidth="2" />
      <path d="M16 43H48" stroke="var(--ink)" strokeWidth="2" />
      <rect x="28" y="52" width="8" height="4" fill="var(--red)" />
    </IconBase>
  );
}

export function CoordinationIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <rect x="12" y="10" width="40" height="46" stroke="var(--ink)" strokeWidth="2" />
      <path d="M20 22H44" stroke="var(--ink)" strokeWidth="2" />
      <path d="M20 32H44" stroke="var(--ink)" strokeWidth="2" />
      <path d="M20 42H36" stroke="var(--ink)" strokeWidth="2" />
      <rect x="20" y="42" width="4" height="4" fill="var(--red)" />
    </IconBase>
  );
}

export function ConstructionBoisIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <rect x="10" y="30" width="44" height="22" stroke="var(--ink)" strokeWidth="2" />
      <path d="M10 30L32 12L54 30" stroke="var(--ink)" strokeWidth="2" />
      <path d="M32 12V30" stroke="var(--ink)" strokeWidth="2" />
      <rect x="29" y="41" width="6" height="11" fill="var(--red)" />
    </IconBase>
  );
}

export function PartnersIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <circle cx="20" cy="24" r="8" stroke="var(--ink)" strokeWidth="2" />
      <circle cx="44" cy="24" r="8" stroke="var(--ink)" strokeWidth="2" />
      <path d="M14 52C14 44 20 40 20 40C20 40 26 44 26 52" stroke="var(--ink)" strokeWidth="2" />
      <path d="M38 52C38 44 44 40 44 40C44 40 50 44 50 52" stroke="var(--ink)" strokeWidth="2" />
      <rect x="29" y="21" width="6" height="6" fill="var(--red)" />
    </IconBase>
  );
}
