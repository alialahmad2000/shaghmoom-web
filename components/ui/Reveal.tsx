"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { createElement, type ReactNode } from "react";

/**
 * The signature reveal (§5): details surface to the attentive.
 * A short, eased entrance — never bouncy. Honors prefers-reduced-motion.
 * Use `index` on siblings for a calm, staggered surfacing.
 */
type RevealProps = {
  children: ReactNode;
  index?: number;
  /** Stagger step in seconds. */
  step?: number;
  /** Translate distance in px (from below). */
  y?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article" | "header";
  once?: boolean;
  /**
   * Render visible immediately, with no opacity:0 entrance. Use for
   * above-the-fold / LCP content so the largest paint isn't gated behind a
   * client-side animation (a scroll-reveal on the LCP element delays LCP).
   */
  immediate?: boolean;
};

export function Reveal({
  children,
  index = 0,
  step = 0.08,
  y = 16,
  className,
  as = "div",
  once = true,
  immediate = false,
}: RevealProps) {
  const reduce = useReducedMotion();

  // Paint immediately (no opacity:0) — keeps LCP fast for hero content.
  if (immediate) {
    return createElement(as, className ? { className } : null, children);
  }

  const MotionTag = motion[as];

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: reduce ? 0 : index * step,
      },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.25, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </MotionTag>
  );
}
