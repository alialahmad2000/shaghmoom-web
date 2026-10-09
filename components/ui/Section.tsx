import type { ReactNode } from "react";

export type Ground = "maroon" | "sand";

export function opposite(ground: Ground): Ground {
  return ground === "maroon" ? "sand" : "maroon";
}

/**
 * A page block on one of the two brand grounds. Grounds alternate maroon /
 * sand down every page — two consecutive blocks on the same ground is an
 * error (brand §9). `data-ground` lets the verification script walk the order.
 * Grounds are flat exact hex: no gradients, grain or overlays.
 */
export function Section({
  children,
  ground,
  id,
  pattern = false,
  className = "",
  wrap = "default",
  labelledBy,
}: {
  children: ReactNode;
  ground: Ground;
  id?: string;
  /** Star texture at 7% — middle sections only (brand §5). */
  pattern?: boolean;
  className?: string;
  /** Content rail width, or "none" when the caller lays out its own rail. */
  wrap?: "default" | "narrow" | "none";
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      data-ground={ground}
      aria-labelledby={labelledBy}
      className={`relative isolate overflow-hidden py-20 sm:py-28 lg:py-32 ground-${ground} ${
        pattern ? "sh-pattern-star" : ""
      } ${className}`}
    >
      {wrap === "none" ? (
        children
      ) : (
        <div className={`sh-wrap relative ${wrap === "narrow" ? "sh-wrap--narrow" : ""}`}>
          {children}
        </div>
      )}
    </section>
  );
}
