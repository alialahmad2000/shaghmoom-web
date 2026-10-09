import type { Review } from "@/content/reviews";

/** A client's words, shown as received — never a raw screenshot. */
export function Testimonial({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col border-[1.5px] border-ink/30 bg-ground p-8">
      <blockquote className="text-h3">{review.quote}</blockquote>
      <figcaption className="mt-6 flex items-center gap-3 text-[15px] text-ink/80">
        <span aria-hidden="true" className="h-0.5 w-6 bg-ink/50" />
        {review.attribution}
      </figcaption>
    </figure>
  );
}
