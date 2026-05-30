import type { ReactNode } from "react";
import { Container } from "./Container";

/**
 * Section with consistent vertical rhythm and an optional blueprint grid motif.
 * Generous negative space is the luxury (§4) — sections breathe.
 */
export function Section({
  children,
  id,
  tone = "bg",
  grid = false,
  className = "",
  containerSize = "default",
  bare = false,
}: {
  children: ReactNode;
  id?: string;
  tone?: "bg" | "alt" | "deep" | "brand";
  /** Render the faint architectural grid texture behind the content. */
  grid?: boolean;
  className?: string;
  containerSize?: "default" | "narrow" | "wide";
  /** Skip the inner Container (caller manages its own layout). */
  bare?: boolean;
}) {
  const toneClass =
    tone === "alt"
      ? "bg-bg-alt text-ink"
      : tone === "deep"
        ? "bg-brand-deep text-bg"
        : tone === "brand"
          ? "bg-brand text-bg"
          : "bg-bg text-ink";

  return (
    <section
      id={id}
      className={`relative isolate overflow-hidden py-20 sm:py-28 lg:py-32 ${toneClass} ${className}`}
    >
      {grid && (
        <div
          aria-hidden="true"
          className="blueprint pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        />
      )}
      {bare ? (
        children
      ) : (
        <Container size={containerSize} className="relative">
          {children}
        </Container>
      )}
    </section>
  );
}
