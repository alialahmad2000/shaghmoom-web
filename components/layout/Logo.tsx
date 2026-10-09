import Image from "next/image";
import Link from "next/link";
import { localePath, type Locale } from "@/lib/i18n";
import { company } from "@/content/site";

/**
 * The logo — kit SVGs only (brand/shoghmoum-brand-kit/02_logo/svg), never
 * re-typeset, recoloured, animated or rasterised. Approved pairings only:
 * sand on maroon, maroon on sand.
 *
 * Ratios: lockup 2.613:1 · Arabic wordmark 3.812:1.
 * PROPOSED minimum widths: lockup 140px, Arabic wordmark 96px.
 * PROPOSED clear space: the height of the SHOGHMOUM line (~22% of the lockup
 * height) on every side — callers keep that much room around it.
 */
type Ground = "maroon" | "sand";

const files = {
  lockup: { maroon: "/brand/shoghmoum-lockup-sand.svg", sand: "/brand/shoghmoum-lockup-maroon.svg" },
  wordmark: { maroon: "/brand/shoghmoum-wordmark-ar-sand.svg", sand: "/brand/shoghmoum-wordmark-ar-maroon.svg" },
} as const;

const LOCKUP_RATIO = 2950.3 / 1129.24;
const WORDMARK_RATIO = 2950.3 / 773.85;

export function LogoMark({
  mark,
  ground,
  width,
  className = "",
  preload = false,
}: {
  mark: "lockup" | "wordmark";
  ground: Ground;
  width: number;
  className?: string;
  preload?: boolean;
}) {
  const ratio = mark === "lockup" ? LOCKUP_RATIO : WORDMARK_RATIO;
  return (
    <Image
      src={files[mark][ground]}
      alt=""
      width={width}
      height={Math.round(width / ratio)}
      unoptimized
      preload={preload}
      className={`block h-auto max-w-none ${className}`}
      style={{ width }}
    />
  );
}

/**
 * Header logo: Arabic wordmark on mobile, lockup on desktop (brand §11).
 * Links home; the accessible name is the brand name.
 */
export function Logo({
  locale,
  ground = "maroon",
}: {
  locale: Locale;
  ground?: Ground;
}) {
  return (
    <Link
      href={localePath(locale, "")}
      aria-label={`${company.shortName} — الصفحة الرئيسية`}
      className="inline-flex shrink-0 items-center"
    >
      <LogoMark mark="wordmark" ground={ground} width={112} className="lg:hidden" preload />
      <LogoMark mark="lockup" ground={ground} width={148} className="hidden lg:block" />
    </Link>
  );
}
