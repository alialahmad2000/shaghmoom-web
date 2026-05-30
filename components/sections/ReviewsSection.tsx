import { reviews } from "@/content/reviews";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Testimonial } from "@/components/ui/Testimonial";
import { Reveal } from "@/components/ui/Reveal";

/** Reviews — elegant pull-quotes (§7). */
export function ReviewsSection({
  heading = "ما يقوله عملاؤنا",
  eyebrow = "آراء العملاء",
}: {
  heading?: string;
  eyebrow?: string;
}) {
  return (
    <Section tone="bg">
      <SectionHeading eyebrow={eyebrow} title={heading} align="center" />
      <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
        {reviews.map((review, i) => (
          <Reveal key={i} index={i} step={0.08}>
            <Testimonial review={review} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
