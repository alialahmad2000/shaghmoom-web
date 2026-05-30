import { philosophy } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

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
 * A plan fragment where the attentive eye catches what others miss: on close
 * inspection (hover/focus) a flaw marker and a development arrow surface.
 * CSS-driven so it's accessible and respects reduced motion.
 */
function InspectionPlate() {
  return (
    <div
      tabIndex={0}
      role="img"
      aria-label="مخطط تتقاطع فيه الخطوط، تظهر فيه تفصيلة خفية عند التدقيق"
      className="group relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-line bg-surface focus-visible:outline-2 focus-visible:outline-brand"
    >
      <div className="blueprint absolute inset-0 opacity-80" />

      {/* diagonal plan lines */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 500"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <path d="M40 120 H360" stroke="var(--line-strong)" strokeWidth="1" />
        <path d="M40 260 H360" stroke="var(--line-strong)" strokeWidth="1" />
        <path d="M150 40 V460" stroke="var(--line-strong)" strokeWidth="1" />
        <path d="M40 120 L360 460" stroke="var(--line)" strokeWidth="1" />

        {/* the hidden flaw — surfaces on inspection */}
        <circle
          cx="150"
          cy="260"
          r="7"
          className="fill-brand opacity-0 transition-opacity duration-500 ease-[var(--ease-out-soft)] group-hover:opacity-100 group-focus-visible:opacity-100"
        />
        <circle
          cx="150"
          cy="260"
          r="18"
          className="stroke-brand/50 opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-focus-visible:opacity-100"
          strokeWidth="1.5"
          fill="none"
        />

        {/* development arrow — the quiet "سهم التطوير" nod */}
        <g className="opacity-0 transition-opacity duration-700 ease-[var(--ease-out-soft)] group-hover:opacity-100 group-focus-visible:opacity-100">
          <path
            d="M150 260 L250 180"
            stroke="var(--brand)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M250 180 l-14 2 m14 -2 l-2 14"
            stroke="var(--brand)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
      </svg>

      <span className="absolute bottom-5 start-5 text-xs text-faint opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
        دقّق النظر — هنا ما يصنع الفرق
      </span>
    </div>
  );
}
