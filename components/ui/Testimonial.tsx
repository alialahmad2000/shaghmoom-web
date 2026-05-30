import type { Review } from "@/content/reviews";

/** Elegant pull-quote — never a raw screenshot (§7-Reviews). */
export function Testimonial({ review }: { review: Review }) {
  return (
    <figure className="relative h-full rounded-2xl border border-line bg-surface p-8">
      <span
        aria-hidden="true"
        className="font-display text-5xl leading-none text-brand/25"
      >
        ”
      </span>
      <blockquote className="mt-3 text-xl leading-relaxed text-ink text-balance">
        {review.quote}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 text-sm text-muted">
        <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
        {review.attribution}
      </figcaption>
    </figure>
  );
}
