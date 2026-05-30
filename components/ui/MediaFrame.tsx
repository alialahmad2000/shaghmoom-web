import Image from "next/image";

/**
 * Renders a real photo when ready, otherwise a refined placeholder —
 * a maroon/bone block with the architectural grid motif, corner ticks, and an
 * Arabic caption. Never a broken image or generic stock (§12). Swapping in a
 * real photo at the given `src` upgrades it automatically (set ready: true).
 */
export function MediaFrame({
  src,
  alt,
  ready,
  aspect = "4 / 3",
  priority = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  className = "",
  rounded = "rounded-2xl",
}: {
  src: string;
  alt: string;
  ready: boolean;
  aspect?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  rounded?: string;
}) {
  return (
    <div
      className={`relative isolate overflow-hidden ${rounded} bg-bg-alt ${className}`}
      style={{ aspectRatio: aspect }}
    >
      {ready ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <Placeholder caption={alt} />
      )}
    </div>
  );
}

function Placeholder({ caption }: { caption: string }) {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-brand-tint to-bg-alt">
      {/* blueprint grid */}
      <div
        aria-hidden="true"
        className="blueprint absolute inset-0 opacity-70"
      />
      {/* corner ticks — measurement-style marks */}
      <CornerTicks />
      {/* caption */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <span className="inline-flex items-center gap-2 rounded-full bg-surface/80 px-3 py-1.5 text-xs text-muted backdrop-blur-sm">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-brand"
          />
          {caption}
        </span>
      </div>
    </div>
  );
}

function CornerTicks() {
  const tick =
    "absolute h-5 w-5 border-brand/35 transition-opacity";
  return (
    <div aria-hidden="true" className="absolute inset-3">
      <span className={`${tick} start-0 top-0 border-s border-t`} />
      <span className={`${tick} end-0 top-0 border-e border-t`} />
      <span className={`${tick} bottom-0 start-0 border-b border-s`} />
      <span className={`${tick} bottom-0 end-0 border-b border-e`} />
    </div>
  );
}
