export function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 4L34 9V19C34 27 28 33 20 36C12 33 6 27 6 19V9L20 4Z"
        stroke="var(--ink)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M13 19L18 24L27 14"
        stroke="var(--red)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
