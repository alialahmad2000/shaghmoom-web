import { localePath, type Locale } from "@/lib/i18n";
import { hero, ctaLabel } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button, ArrowEnd } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Hero — composed with restraint (§7). Brand line eyebrow, a large confident
 * display H1, generous breathing room, and a quiet architectural backdrop with
 * measurement-style coordinate marks. Not a generic centered stock hero.
 */
export function Hero({ locale }: { locale: Locale }) {
  return (
    <section className="relative isolate overflow-hidden bg-bg">
      {/* architectural grid + soft maroon wash */}
      <div
        aria-hidden="true"
        className="blueprint pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_120%_90%_at_80%_-10%,black,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-1/3 end-[-10%] -z-10 h-[60rem] w-[60rem] rounded-full bg-brand-tint/50 blur-3xl"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-12 py-24 sm:py-28 lg:grid-cols-12 lg:gap-8 lg:py-36">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="flex items-center gap-3 text-sm font-medium tracking-wide text-brand">
                <span
                  aria-hidden="true"
                  className="inline-block h-px w-10 bg-brand/60"
                />
                {hero.eyebrow}
              </span>
            </Reveal>

            <Reveal index={1}>
              <h1 className="mt-6 text-balance text-5xl leading-[1.08] sm:text-6xl lg:text-[4.5rem]">
                {hero.title}
              </h1>
            </Reveal>

            <Reveal index={2}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
                {hero.subhead}
              </p>
            </Reveal>

            <Reveal index={3}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  href={localePath(locale, "/contact")}
                  size="lg"
                  icon={<ArrowEnd />}
                >
                  {ctaLabel}
                </Button>
                <WhatsAppButton size="lg" variant="secondary" />
              </div>
            </Reveal>
          </div>

          {/* Coordinate / blueprint plate — the "10%" hidden-detail motif */}
          <div className="lg:col-span-5">
            <Reveal index={2} className="relative">
              <div className="relative mx-auto aspect-square w-full max-w-md rounded-3xl border border-line bg-surface/60 p-8 backdrop-blur-sm">
                <div className="blueprint absolute inset-0 rounded-3xl opacity-60" />
                <CoordinatePlate />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** A quiet plate that visualizes the brand idea: the small 10% that decides. */
function CoordinatePlate() {
  return (
    <div className="relative flex h-full flex-col justify-between">
      {/* corner ticks */}
      <div aria-hidden="true" className="absolute inset-0">
        <span className="absolute start-0 top-0 h-6 w-6 border-s-2 border-t-2 border-brand/40" />
        <span className="absolute end-0 top-0 h-6 w-6 border-e-2 border-t-2 border-brand/40" />
        <span className="absolute bottom-0 start-0 h-6 w-6 border-b-2 border-s-2 border-brand/40" />
        <span className="absolute bottom-0 end-0 h-6 w-6 border-b-2 border-e-2 border-brand/40" />
      </div>

      <div className="relative">
        <span className="font-display text-sm text-faint">النسبة التي تصنع الفرق</span>
      </div>

      <div className="relative flex items-baseline gap-2">
        <span className="font-display text-7xl leading-none text-brand tabular-nums">
          ١٠٪
        </span>
      </div>

      <div className="relative">
        <p className="text-sm leading-relaxed text-muted">
          من تفاصيل المشروع لا تُرى في المخطط — لكنها هي ما نلحظه قبل أن يُوضع
          أول حجر.
        </p>
      </div>
    </div>
  );
}
