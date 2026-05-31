/**
 * The SHOGHMOUM symbol — the geometric "window/cube" mark (4 corner brackets +
 * a central bar = "the center point"), extracted from the brand book.
 * Rendered as a CSS mask of /brand/symbol.svg so its color follows `currentColor`
 * (one source of truth: aubergine on light, blush on dark). Decorative by default.
 */
export function SymbolMark({
  className = "h-8 w-8",
  title,
}: {
  className?: string;
  title?: string;
}) {
  const mask = {
    maskImage: "url(/brand/symbol.svg)",
    WebkitMaskImage: "url(/brand/symbol.svg)",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskPosition: "center",
    WebkitMaskPosition: "center",
    maskSize: "contain",
    WebkitMaskSize: "contain",
  } as const;
  return (
    <span
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      className={`inline-block bg-current ${className}`}
      style={mask}
    />
  );
}
