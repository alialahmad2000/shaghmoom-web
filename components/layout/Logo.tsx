import Link from "next/link";
import { localePath, type Locale } from "@/lib/i18n";
import { company } from "@/content/site";
import { SymbolMark } from "@/components/ui/SymbolMark";

/**
 * Brand lockup — the extracted geometric symbol + شغموم (display Naskh) +
 * SHOGHMOUM (Latin grotesque). The symbol follows currentColor via SymbolMark.
 */
export function Logo({
  locale,
  tone = "ink",
  animate = false,
}: {
  locale: Locale;
  tone?: "ink" | "bg";
  /** Play the one-time build-in animation (use on the header logo only). */
  animate?: boolean;
}) {
  const main = tone === "bg" ? "text-bg" : "text-ink";
  const symbolColor = tone === "bg" ? "text-bg" : "text-brand";
  const accent = tone === "bg" ? "text-bg/65" : "text-accent";

  return (
    <Link
      href={localePath(locale, "")}
      className="group inline-flex items-center gap-2.5 leading-none focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-4"
      aria-label={`${company.shortName} — الصفحة الرئيسية`}
    >
      <SymbolMark
        className={`h-9 w-9 shrink-0 ${symbolColor} ${animate ? "logo-anim-symbol" : ""}`}
      />
      <span className={`flex flex-col leading-none ${animate ? "logo-anim-word" : ""}`}>
        <span className={`font-display text-2xl leading-none ${main}`}>
          {company.shortName}
        </span>
        {/* Decorative romanization — hidden from the a11y tree so the link's
            accessible name matches its visible label (WCAG 2.5.3 Label in Name). */}
        <span
          aria-hidden="true"
          className={`ltr mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.3em] ${accent}`}
        >
          {company.latin}
        </span>
      </span>
    </Link>
  );
}
