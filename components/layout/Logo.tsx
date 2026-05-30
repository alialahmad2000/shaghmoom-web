import Link from "next/link";
import { localePath, type Locale } from "@/lib/i18n";
import { company } from "@/content/site";

/**
 * Brand wordmark. A refined typographic lockup that works now; when the
 * official logo lands at /public/brand/logo.svg, swap this for an <Image>.
 * Sample the exact maroon from that file into app/globals.css.
 */
export function Logo({
  locale,
  tone = "ink",
}: {
  locale: Locale;
  tone?: "ink" | "bg";
}) {
  const main = tone === "bg" ? "text-bg" : "text-ink";
  const accent = tone === "bg" ? "text-bg/60" : "text-brand";

  return (
    <Link
      href={localePath(locale, "")}
      className="group inline-flex flex-col leading-none focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-4"
      aria-label={`${company.shortName} — الصفحة الرئيسية`}
    >
      <span className={`font-display text-2xl tracking-tight ${main}`}>
        {company.shortName}
      </span>
      {/* Decorative romanization — hidden from the a11y tree so the link's
          accessible name matches its visible label (WCAG 2.5.3 Label in Name). */}
      <span
        aria-hidden="true"
        className={`ltr mt-0.5 text-[0.6rem] font-medium uppercase tracking-[0.28em] ${accent}`}
      >
        {company.latin}
      </span>
    </Link>
  );
}
