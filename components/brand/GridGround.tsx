/**
 * «شبكة القياس» with the icon standing on it — beside the heading of inner
 * pages on wide screens only (brand §5, §6, sheet p.6). On phones the page
 * header uses the full-width grid alone: the cropped icon crowded the header
 * there (owner, 2026-10-12). Decorative.
 */
const ICON =
  "M 443.65 857.47 L 402.06 595.48 C 402.06 595.48 590.22 538.4 581.57 475.27 C 576.14 431 443.49 395.73 443.49 395.73 L 443.49 351.02 C 446.84 348.09 448.47 346.66 451.82 343.74 L 896.89 404.23 L 896.89 441.39 C 896.73 441.42 688.3 459.94 596.09 552.16 C 503.88 644.37 480.81 857.47 480.81 857.47 M 453.25 0 L 494.83 261.99 C 494.83 261.99 306.68 319.08 315.32 382.21 C 320.75 426.48 453.41 461.75 453.41 461.75 L 453.41 506.46 C 450.05 509.39 445.08 513.73 445.08 513.73 L 0 453.25 L 0 416.09 C 0.17 416.06 208.59 397.54 300.81 305.32 C 393.02 213.11 416.08 0 416.08 0";

export function GridGround({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 aspect-square select-none ${className}`}
    >
      <div className="sh-grid-field absolute inset-0" />
      <svg
        focusable="false"
        viewBox="0 0 896.89 857.47"
        className="absolute left-1/2 top-1/2 w-[62%] -translate-x-1/2 -translate-y-1/2 text-ink opacity-[0.09]"
      >
        <path fill="currentColor" d={ICON} />
      </svg>
    </div>
  );
}
