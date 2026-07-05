import type { ReactNode } from "react";

const VARIANTS = {
  default: "bg-blue text-cream",
  secondary: "bg-cream/15 text-cream border border-cream/25",
  outline: "bg-white text-ink/70 border border-ink/10",
};

export function Badge({
  children,
  className = "",
  variant = "default",
}: {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof VARIANTS;
}) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-xs font-semibold uppercase tracking-wide ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
