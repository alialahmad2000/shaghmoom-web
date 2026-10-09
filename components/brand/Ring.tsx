import { arDigits } from "@/lib/digits";

/** A numbered ring for counted, ordered things (stations, stages, cards). */
export function Ring({
  n,
  className = "",
  size = "md",
}: {
  n: number;
  className?: string;
  size?: "sm" | "md";
}) {
  const dim = size === "sm" ? "h-10 w-10 text-base" : "h-12 w-12 text-lg";
  return (
    <span
      aria-hidden="true"
      className={`grid shrink-0 place-items-center rounded-full border-2 border-current font-semibold leading-none ${dim} ${className}`}
    >
      {arDigits(n)}
    </span>
  );
}
