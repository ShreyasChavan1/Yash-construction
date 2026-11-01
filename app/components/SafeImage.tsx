"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * next/image that shows a clean placeholder if the file is missing, so photos
 * can be added one at a time without broken-image icons.
 * The parent must be positioned (`relative` / `absolute`) and have a size or aspect ratio.
 * `label=""` renders an empty fill (use for hero backgrounds).
 */
export default function SafeImage({
  src,
  alt,
  sizes = "(min-width: 1024px) 33vw, 100vw",
  className = "",
  priority = false,
  label = "Photo to be added",
  tone = "light",
}: {
  src?: string | null;
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
  label?: string;
  tone?: "light" | "dark";
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    if (!label) return <div className="absolute inset-0" aria-hidden="true" />;
    const dark = tone === "dark";
    return (
      <div
        role="img"
        aria-label={alt}
        className={`absolute inset-0 flex items-center justify-center px-4 text-center ${
          dark ? "bg-white/[0.04]" : "bg-black/[0.04]"
        }`}
      >
        <span
          className={`font-mono text-[10px] uppercase tracking-[0.2em] ${
            dark ? "text-white/35" : "text-black/35"
          }`}
        >
          {label}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
