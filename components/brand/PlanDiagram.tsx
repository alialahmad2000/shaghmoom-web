import { meaning } from "@/content/site";

/**
 * The founding idea drawn, not listed (brand §1, §9): a plan in measured
 * strips. Four are hatched (what the drawings contain); the rest — about a
 * third of the plan — is left as one dashed outline: what was never drawn.
 * No number or fraction is written anywhere (owner, 2026-10-12). It stands on
 * the measuring grid, which sits behind the drawing only.
 *
 * RTL: reading starts at the right, so the drawn part comes first and the
 * undrawn part sits at the inline end.
 */
export function PlanDiagram({ className = "" }: { className?: string }) {
  const drawn = [0, 1, 2, 3];
  return (
    <figure className={`mx-auto w-full max-w-[520px] ${className}`}>
      {/* dimension line over the drawn strips */}
      <div className="grid grid-cols-6 gap-1.5" aria-hidden="true">
        <div className="col-span-4 flex flex-col items-center">
          <span className="text-sm font-medium text-ink/80">{meaning.diagram.drawn}</span>
          <span className="mt-2 flex w-full items-center">
            <span className="h-3 w-0.5 bg-ink/70" />
            <span className="h-0.5 flex-1 bg-ink/70" />
            <span className="h-3 w-0.5 bg-ink/70" />
          </span>
        </div>
      </div>

      <div className="relative mt-8" aria-hidden="true">
        <div className="sh-measure-grid grid h-36 grid-cols-6 gap-1.5 sm:h-44">
          {drawn.map((i) => (
            <span
              key={i}
              className="block border-[1.5px] border-ink/80"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, color-mix(in srgb, var(--ink) 42%, transparent) 0 1.5px, transparent 1.5px 8px)",
              }}
            />
          ))}
          <span className="sh-dash-box col-span-2 block text-accent" />
        </div>
        {/* ground line the drawing stands on */}
        <span className="sh-dash-x mt-3 block text-ink/70" />
      </div>

      {/* the part no drawing contains */}
      <div className="mt-8 grid grid-cols-6 gap-1.5" aria-hidden="true">
        <div className="col-span-2 col-start-5 flex flex-col items-center">
          <span className="sh-dash-y h-6 text-accent" />
          <span className="mt-2 whitespace-nowrap text-sm font-semibold text-accent">
            {meaning.diagram.undrawn}
          </span>
        </div>
      </div>
      <figcaption className="sr-only">
        رسم لمخطط: جزء مرسوم ({meaning.diagram.drawn})، وجزء أكبر مما يُتوقّع بقي بلا رسم ({meaning.diagram.undrawn}).
      </figcaption>
    </figure>
  );
}
