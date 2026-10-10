import { localePath, type Locale } from "@/lib/i18n";
import { stages, methodologyTeaser } from "@/content/methodology";
import { Section, type Ground } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowEnd } from "@/components/ui/Button";
import { arDigits } from "@/lib/digits";

/**
 * The method as a drawn path, not a list (brand §11): numbered stations tied
 * together by a 3px dashed line (dash 14 / gap 12) — horizontal from the
 * right on wide screens, vertical on phones. The dashed path is the one gold
 * element on this screen.
 */
export function MethodPath({
  locale,
  ground = "sand",
  heading = true,
  link = true,
}: {
  locale: Locale;
  ground?: Ground;
  heading?: boolean;
  link?: boolean;
}) {
  return (
    <Section ground={ground} labelledBy={heading ? "method-title" : undefined}>
      {heading && (
        <SectionHeading
          id="method-title"
          eyebrow={methodologyTeaser.eyebrow}
          title={methodologyTeaser.heading}
          intro={<p>{methodologyTeaser.intro}</p>}
        />
      )}

      <ol className={`relative grid grid-cols-1 gap-0 lg:grid-cols-5 lg:gap-6 ${heading ? "mt-16" : ""}`}>
        {/* the road: vertical on phones, horizontal on wide screens */}
        <span
          aria-hidden="true"
          className="sh-dash-y absolute bottom-8 top-6 start-[22px] text-gold lg:hidden"
        />
        <span
          aria-hidden="true"
          className="sh-dash-x absolute inset-x-0 top-[22px] hidden text-gold lg:block"
        />
        {stages.map((stage, i) => (
          <Reveal as="li" key={stage.title} index={i} step={0.08} className="relative">
            <div className="flex gap-5 pb-10 lg:flex-col lg:gap-6 lg:pb-0">
              <span
                aria-hidden="true"
                className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-ink bg-ground text-lg font-semibold leading-none"
              >
                {arDigits(i + 1)}
              </span>
              <div className="pt-1.5 lg:pt-0">
                <h3 className="text-[19px] font-semibold leading-snug">{stage.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-ink/80">{stage.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>

      {heading && link && (
        <Reveal className="mt-12">
          <Button href={localePath(locale, "/methodology")} variant="ghost" icon={<ArrowEnd />}>
            {methodologyTeaser.link}
          </Button>
        </Reveal>
      )}
    </Section>
  );
}
