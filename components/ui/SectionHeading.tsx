import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/**
 * The brand heading block — rhythm edge · indent · edge (brand §9):
 * eyebrow and heading flush to the column edge; the divider rule and the body
 * indented; an optional callout back on the edge with its gold bar.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  callout,
  as: As = "h2",
  id,
  size = "h2",
  rule = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  callout?: ReactNode;
  as?: "h1" | "h2" | "h3";
  id?: string;
  size?: "h1" | "h2";
  rule?: boolean;
}) {
  return (
    <Reveal className="flex flex-col items-start">
      {eyebrow && <p className="sh-eyebrow mb-3">{eyebrow}</p>}
      <As id={id} className={size === "h1" ? "text-h1" : "text-h2"}>
        {title}
      </As>
      {rule && <span aria-hidden="true" className="sh-rule mt-6" />}
      {intro && (
        <div className="sh-indent sh-measure mt-6 text-body text-ink/80">{intro}</div>
      )}
      {callout && <p className="sh-callout sh-measure mt-8">{callout}</p>}
    </Reveal>
  );
}
