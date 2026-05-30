import { credibility } from "@/content/site";

/**
 * Quiet, trust-building band (§7-Credibility). Renders text credentials that
 * read well on their own; once official marks land in /public/brand they can be
 * placed above each label. These signals matter for serious/government clients.
 */
export function CredibilityBar({
  tone = "alt",
}: {
  tone?: "alt" | "bg" | "deep";
}) {
  const onDeep = tone === "deep";
  const labelColor = onDeep ? "text-bg" : "text-ink";
  const detailColor = onDeep ? "text-bg/65" : "text-muted";
  const lineColor = onDeep ? "bg-bg/15" : "bg-line-strong";

  return (
    <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl sm:grid-cols-3">
      {credibility.map((c, i) => (
        <li
          key={c.label}
          className="relative flex flex-col items-center gap-1.5 px-6 py-7 text-center"
        >
          {i > 0 && (
            <span
              aria-hidden="true"
              className={`absolute start-0 top-1/2 hidden h-12 w-px -translate-y-1/2 sm:block ${lineColor}`}
            />
          )}
          <span className={`text-sm font-medium ${labelColor}`}>{c.label}</span>
          <span className={`tnum text-xs ${detailColor}`}>{c.detail}</span>
        </li>
      ))}
    </ul>
  );
}
