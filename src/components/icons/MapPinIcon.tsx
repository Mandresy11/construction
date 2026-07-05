export function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21.5S19 14.6 19 9.5A7 7 0 105 9.5C5 14.6 12 21.5 12 21.5Z"
        stroke="var(--red)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.5" stroke="var(--red)" strokeWidth="1.8" />
    </svg>
  );
}
