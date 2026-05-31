import { philosophy } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SymbolMark } from "@/components/ui/SymbolMark";

/**
 * "ما لا يُرى... هو ما يصنع الفرق" — the philosophy; the soul of the page (§5).
 * The reveal is at its most deliberate here, and a single quiet "hidden detail"
 * (the development-arrow nod) surfaces only on close interaction.
 */
export function Philosophy() {
  return (
    <Section tone="alt" grid containerSize="wide">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="flex items-center gap-3 text-sm font-medium tracking-wide text-brand">
              <span aria-hidden="true" className="inline-block h-px w-10 bg-brand/60" />
              الفكرة
            </span>
          </Reveal>
          <Reveal index={1}>
            <h2 className="mt-6 text-balance text-3xl leading-snug sm:text-4xl lg:text-5xl">
              {philosophy.heading}
            </h2>
          </Reveal>
          <Reveal index={2}>
            <p className="mt-8 max-w-2xl text-lg leading-loose text-ink/80">
              {philosophy.body}
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal index={2}>
            <InspectionPlate />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/**
 * A balanced brand plate built on the identity itself: the window/cube symbol
 * (perception / "the window") with its central point — "نقطة واحدة تصنع الفرق" —
 * picked out in bronze. On close inspection (hover/focus) the center point
 * surfaces: a ring expands around it. CSS-driven; respects reduced motion.
 */
function InspectionPlate() {
  return (
    <div
      tabIndex={0}
      role="img"
      aria-label="رمز شغموم: النقطة المركزية التي تصنع الفرق"
      className="group relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-line bg-surface focus-visible:outline-2 focus-visible:outline-brand"
    >
      <div className="dotgrid absolute inset-0 opacity-40" />

      {/* measurement-style corner ticks frame the composition */}
      <div aria-hidden="true" className="absolute inset-6">
        <span className="absolute start-0 top-0 h-5 w-5 border-s border-t border-accent/45" />
        <span className="absolute end-0 top-0 h-5 w-5 border-e border-t border-accent/45" />
        <span className="absolute bottom-0 start-0 h-5 w-5 border-b border-s border-accent/45" />
        <span className="absolute bottom-0 end-0 h-5 w-5 border-b border-e border-accent/45" />
      </div>

      {/* focal brand symbol + its center point */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative grid place-items-center">
          <SymbolMark className="h-44 w-44 text-brand opacity-[0.16] transition-opacity duration-500 ease-[var(--ease-out-soft)] group-hover:opacity-25 group-focus-visible:opacity-25" />
          {/* the center point — bronze, the "نقطة واحدة" */}
          <span
            aria-hidden="true"
            className="absolute h-2.5 w-2.5 rounded-full bg-accent"
          />
          <span
            aria-hidden="true"
            className="absolute h-2.5 w-2.5 rounded-full border border-accent/60 opacity-0 transition-all duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[5] group-hover:opacity-100 group-focus-visible:scale-[5] group-focus-visible:opacity-100"
          />
        </div>
      </div>

      <span className="absolute inset-x-6 bottom-5 text-center text-xs text-muted">
        النقطة التي تصنع الفرق
      </span>
    </div>
  );
}
