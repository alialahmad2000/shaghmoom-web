import { meaning } from "@/content/site";

/**
 * The founding story drawn, not listed (brand §1, §9): a plan as ten measured
 * strips — nine hatched (what the drawings contain) and the tenth left as a
 * dashed outline (the ~10% no drawing contains). It stands on the measuring
 * grid, which sits behind the drawing only; the labels are kept off the grid.
 *
 * RTL: reading starts at the right, so the drawn nine come first and the
 * missing tenth sits at the inline end.
 */
export function TenthDiagram({ className = "" }: { className?: string }) {
  const cells = Array.from({ length: 10 }, (_, i) => i);
  return (
    <figure className={`mx-auto w-full max-w-[520px] ${className}`}>
      {/* dimension line over the nine drawn strips */}
      <div className="grid grid-cols-10 gap-1.5" aria-hidden="true">
        <div className="col-span-9 flex flex-col items-center">
          <span className="text-sm font-medium text-ink/80">{meaning.diagram.drawn}</span>
          <span className="mt-2 flex w-full items-center">
            <span className="h-3 w-0.5 bg-ink/70" />
            <span className="h-0.5 flex-1 bg-ink/70" />
            <span className="h-3 w-0.5 bg-ink/70" />
          </span>
        </div>
      </div>

      <div className="relative mt-8" aria-hidden="true">
        <div className="sh-measure-grid grid h-36 grid-cols-10 gap-1.5 sm:h-44">
          {cells.map((i) =>
            i < 9 ? (
              <span
                key={i}
                className="block border-[1.5px] border-ink/80"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, color-mix(in srgb, var(--ink) 42%, transparent) 0 1.5px, transparent 1.5px 8px)",
                }}
              />
            ) : (
              <span key={i} className="sh-dash-box block text-accent" />
            )
          )}
        </div>
        {/* ground line the drawing stands on */}
        <span className="sh-dash-x mt-3 block text-ink/70" />
      </div>

      {/* the missing tenth */}
      <div className="mt-8 grid grid-cols-10 gap-1.5" aria-hidden="true">
        <div className="col-start-10 flex flex-col items-end">
          <span className="sh-dash-y h-6 text-accent" />
          <span className="mt-2 whitespace-nowrap text-sm font-semibold text-accent">
            {meaning.diagram.undrawn}
          </span>
        </div>
      </div>
      <figcaption className="sr-only">
        {meaning.diagram.drawn}: تسعة أعشار. {meaning.diagram.undrawn}: العُشر الأخير.
      </figcaption>
    </figure>
  );
}
