import type { ReactNode } from "react";

export function CardHoverReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`group relative overflow-hidden ${className ?? ""}`}>{children}</div>
  );
}

export function CardHoverRevealMain({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`absolute inset-0 ${className ?? ""}`}>{children}</div>;
}

export function CardHoverRevealContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`absolute inset-x-3 bottom-3 translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
