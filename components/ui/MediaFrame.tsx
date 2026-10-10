import Image from "next/image";

/**
 * A real photo when one exists; otherwise a flat placeholder on the ground
 * with a dashed outline and the caption beside it — never stock, never a
 * broken image, and nothing laid over a photo. Setting `ready: true` on the
 * content entry swaps in the real file.
 */
export function MediaFrame({
  src,
  alt,
  ready,
  aspect = "4 / 3",
  preload = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  className = "",
}: {
  src: string;
  alt: string;
  ready: boolean;
  aspect?: string;
  preload?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-brand ${className}`} style={{ aspectRatio: aspect }}>
      {ready ? (
        <Image src={src} alt={alt} fill sizes={sizes} preload={preload} className="object-cover" />
      ) : (
        <div className="absolute inset-0 grid place-items-center p-6 text-center">
          <span aria-hidden="true" className="sh-dash-box absolute inset-0 text-ink/40" />
          <span className="relative text-sm text-ink/75">{alt}</span>
        </div>
      )}
    </div>
  );
}
