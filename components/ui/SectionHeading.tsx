import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/**
 * Display heading with an optional eyebrow and a hairline tick — echoes
 * architectural drawing labels. The hairline is a measurement-style mark.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "start",
  as: As = "h2",
  tone = "ink",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "start" | "center";
  as?: "h1" | "h2" | "h3";
  tone?: "ink" | "bg";
}) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-start";
  const eyebrowColor = tone === "bg" ? "text-bg/70" : "text-brand";
  const introColor = tone === "bg" ? "text-bg/80" : "text-muted";

  return (
    <Reveal className={`flex flex-col ${alignment}`}>
      {eyebrow && (
        <span
          className={`mb-4 flex items-center gap-3 text-sm font-medium tracking-wide ${eyebrowColor}`}
        >
          <span
            aria-hidden="true"
            className="inline-block h-px w-8 bg-current opacity-60"
          />
          {eyebrow}
        </span>
      )}
      <As className="text-balance text-3xl leading-tight sm:text-4xl lg:text-5xl">
        {title}
      </As>
      {intro && (
        <p className={`mt-6 max-w-2xl text-lg leading-relaxed ${introColor}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
