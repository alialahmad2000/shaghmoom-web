import { lines } from "@/content/site";

/**
 * «شغموم وقت اللزوم يجملك» — the subject stays outside the gold brush, only
 * the predicate is swiped (brand §7). Maroon text on gold is 4.36:1, so this
 * is only ever set large (≥ 24px). Once per view.
 */
export function ClosingLine({ className = "" }: { className?: string }) {
  return (
    <p className={`text-h2 ${className}`}>
      {lines.closingSubject}{" "}
      <span className="sh-brush">{lines.closingPredicate}</span>
    </p>
  );
}
