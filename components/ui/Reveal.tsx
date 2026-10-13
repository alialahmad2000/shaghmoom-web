"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * A light surfacing as a block scrolls into view. The server always renders
 * the content visible: a block is only held back (in CSS, see .sh-reveal) when
 * the browser confirms, after hydration, that it is still below the viewport.
 * So nothing can stay blank if the script is slow or fails, and whatever is on
 * screen at load never flickers. Honors prefers-reduced-motion (in CSS).
 */
type RevealProps = {
  children: ReactNode;
  /** Sibling order, for a short stagger. */
  index?: number;
  /** Stagger step in seconds (kept for callers; the total is capped). */
  step?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article" | "header";
  /** Render plainly, with no entrance at all (forms, first-screen content). */
  immediate?: boolean;
};

export function Reveal({
  children,
  index = 0,
  step = 0.05,
  className,
  as = "div",
  immediate = false,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (immediate || !el || typeof IntersectionObserver === "undefined") return;
    // Already on screen (or above it) when the script arrives: leave it alone.
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.style.transitionDelay = `${Math.min(index * step, 0.12)}s`;
    el.classList.add("sh-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px 8% 0px", threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [immediate, index, step]);

  const Tag = as as ElementType;
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
