import type { Value } from "@/content/values";

export function ValueCard({ value, index }: { value: Value; index: number }) {
  return (
    <div className="group relative h-full rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-brand/40">
      <span className="font-display text-2xl text-brand/30 tabular-nums transition-colors group-hover:text-brand/60">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-3 text-lg text-ink">{value.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{value.line}</p>
    </div>
  );
}
