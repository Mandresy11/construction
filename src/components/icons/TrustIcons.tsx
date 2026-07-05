function IconBase({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className ?? "h-5 w-5"} aria-hidden="true">
      {children}
    </svg>
  );
}

export function MedalIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M14 4L10 17" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
      <path d="M26 4L30 17" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="20" cy="24" r="10" stroke="var(--ink)" strokeWidth="2" />
      <path
        d="M16 24.5L19 27.5L24.5 21"
        stroke="var(--red)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function ClockIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <circle cx="20" cy="20" r="14" stroke="var(--ink)" strokeWidth="2" />
      <path
        d="M20 12V20L26 24"
        stroke="var(--red)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function StarIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path
        d="M20 5L24.5 15L35 16.5L27.5 24L29 34.5L20 29.5L11 34.5L12.5 24L5 16.5L15.5 15L20 5Z"
        stroke="var(--ink)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function HouseIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M8 20L20 9L32 20" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 17V33H28V17" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M17 33V24H23V33" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
    </IconBase>
  );
}
