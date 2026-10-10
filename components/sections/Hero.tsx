import { localePath, type Locale } from "@/lib/i18n";
import { hero, ctaLabel } from "@/content/site";
import { Button, ArrowEnd } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { GridGround } from "@/components/brand/GridGround";

/**
 * Home hero — maroon (brand §11, sheet p.7). The icon at 9% standing on the
 * measuring grid, in the corner away from the copy (above it on phones,
 * beside it on wide screens); a two-line headline; the one
 * gold element on this screen is the eyebrow, set at 24px because gold text
 * on maroon passes contrast only at large sizes. Rendered without entrance
 * animation so the headline (LCP) paints immediately.
 */
export function Hero({ locale }: { locale: Locale }) {
  return (
    <section
      data-ground="maroon"
      aria-labelledby="hero-title"
      className="ground-maroon relative isolate overflow-hidden"
    >
      <GridGround className="-top-24 -end-24 w-[88vw] max-w-[420px] sm:-top-28 sm:max-w-[560px] lg:top-1/2 lg:end-[-2%] lg:w-[50vw] lg:max-w-[760px] lg:-translate-y-1/2" />
      <div className="sh-wrap relative pb-24 pt-44 sm:pb-28 sm:pt-56 lg:pb-36 lg:pt-36">
        <p className="text-[24px] font-semibold leading-snug text-gold">{hero.eyebrow}</p>
        <h1 id="hero-title" className="mt-5 text-h1">
          <span className="block">{hero.titleLines[0]}</span>
          <span className="block">{hero.titleLines[1]}</span>
        </h1>
        <span aria-hidden="true" className="sh-rule mt-8" />
        <p className="sh-indent sh-measure mt-7 text-body text-ink/85">{hero.lead}</p>
        <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href={localePath(locale, "/contact")} size="lg" icon={<ArrowEnd />}>
            {ctaLabel}
          </Button>
          <WhatsAppButton size="lg" />
        </div>
      </div>
    </section>
  );
}
