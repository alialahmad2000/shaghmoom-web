import type { ReactNode } from "react";

/** Content rail with the brand gutter (≥16px on phones), logical padding. */
export function Container({
  children,
  className = "",
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow";
}) {
  return (
    <div className={`sh-wrap ${size === "narrow" ? "sh-wrap--narrow" : ""} ${className}`}>
      {children}
    </div>
  );
}
