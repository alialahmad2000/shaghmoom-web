import { localePath, type Locale } from "@/lib/i18n";
import { plasteringTeaser } from "@/content/site";
import { Section, type Ground } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowEnd } from "@/components/ui/Button";

/**
 * The way into «استمارة اللياسة» — in the site's own section style (the form
 * page keeps its own collage vocabulary). Eyebrow, the form's title, the one
 * sentence from its hero, and a single button. No gold here.
 */
export function PlasteringTeaser({
  locale,
  ground = "maroon",
}: {
  locale: Locale;
  ground?: Ground;
}) {
  return (
    <Section ground={ground} labelledBy="plastering-title">
      <div className="flex flex-col items-start gap-10">
        <SectionHeading
          id="plastering-title"
          eyebrow={plasteringTeaser.eyebrow}
          title={plasteringTeaser.heading}
          intro={<p>{plasteringTeaser.body}</p>}
        />
        <Reveal>
          <Button
            href={localePath(locale, "/plastering-form")}
            size="lg"
            icon={<ArrowEnd />}
          >
            {plasteringTeaser.button}
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}
