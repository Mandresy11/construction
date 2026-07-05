import Image from "next/image";
import type { ReactNode } from "react";

export function SectionPhotoBg({
  overlay,
  objectPosition = "50% 50%",
  className,
  children,
  src = "/image/back.png",
  alt = "",
  priority = false,
}: {
  overlay: string;
  objectPosition?: string;
  className?: string;
  children: ReactNode;
  src?: string;
  alt?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition }}
      />
      <div className="absolute inset-0" style={{ background: overlay }} aria-hidden="true" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
