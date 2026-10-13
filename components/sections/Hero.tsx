import { getImageProps } from "next/image";
import { localePath, type Locale } from "@/lib/i18n";
import { hero, ctaLabel, HERO_PHOTO } from "@/content/site";
import { Button, ArrowEnd } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

/**
 * Home hero (owner notes, 2026-10-12). The slogan on two lines; the measuring
 * grid across the full width, strongest under the slogan and fading toward
 * the edges; no eyebrow and no large icon (on phones it was cropped into the
 * corner and crowded the header). With HERO_PHOTO on, a site photograph sits
 * under a maroon layer and the grid. Rendered without entrance animation so
 * the headline paints immediately.
 */
export function Hero({ locale }: { locale: Locale }) {
  return (
    <section
      data-ground="maroon"
      aria-labelledby="hero-title"
      className="ground-maroon relative isolate overflow-hidden"
    >
      {HERO_PHOTO && <HeroPhoto />}
      <div aria-hidden="true" className="sh-hero-grid absolute inset-0 -z-10" />
      {/* with the photograph, phones get room under the buttons for the site to show */}
      <div
        className={`sh-wrap relative pt-24 sm:pb-28 sm:pt-32 lg:pb-40 lg:pt-36 ${
          HERO_PHOTO ? "pb-60" : "pb-24"
        }`}
      >
        <h1 id="hero-title" className="text-h1">
          <span className="block">{hero.titleLines[0]}</span>{" "}
          <span className="block">{hero.titleLines[1]}</span>
        </h1>
        <span aria-hidden="true" className="sh-rule mt-8" />
        <p className="sh-indent sh-measure mt-7 text-body text-ink/90">{hero.lead}</p>
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

/**
 * The hero photograph: art-directed (portrait crop on phones, landscape on
 * wide screens), drained of colour and held under a maroon layer so the sand
 * text keeps its contrast everywhere. Decorative.
 */
function HeroPhoto() {
  const common = { alt: "", sizes: "100vw", quality: 70 } as const;
  const {
    props: { srcSet: wide },
  } = getImageProps({ ...common, src: "/images/hero/site-wide.jpg", width: 1920, height: 1080 });
  const {
    props: { srcSet: tall, ...rest },
  } = getImageProps({ ...common, src: "/images/hero/site-tall.jpg", width: 1080, height: 1920 });

  return (
    <div aria-hidden="true" className="absolute inset-0 -z-20">
      <picture>
        <source media="(min-width: 768px)" srcSet={wide} />
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img
          {...rest}
          srcSet={tall}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="sh-hero-photo h-full w-full object-cover"
        />
      </picture>
      <div className="sh-hero-veil absolute inset-0" />
    </div>
  );
}
