import { localePath, type Locale } from "@/lib/i18n";
import { methodologyTeaser } from "@/content/site";
import { stages } from "@/content/methodology";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowEnd } from "@/components/ui/Button";

/** Methodology teaser — one line + link, with the staged process previewed. */
export function MethodologyTeaser({ locale }: { locale: Locale }) {
  return (
    <Section tone="deep" grid>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="flex items-center gap-3 text-sm font-medium tracking-wide text-bg/70">
              <span aria-hidden="true" className="inline-block h-px w-10 bg-bg/40" />
              منهجيتنا
            </span>
          </Reveal>
          <Reveal index={1}>
            <p className="mt-6 text-balance text-2xl leading-relaxed text-bg sm:text-3xl">
              {methodologyTeaser}
            </p>
          </Reveal>
          <Reveal index={2}>
            <div className="mt-8">
              <Button
                href={localePath(locale, "/methodology")}
                variant="outlineInverse"
                icon={<ArrowEnd />}
              >
                كيف نعمل
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-bg/10 sm:grid-cols-2">
            {stages.map((stage, i) => (
              <Reveal as="li" key={stage.index} index={i} step={0.06} className="bg-brand-deep">
                <div className="h-full border-bg/10 p-6">
                  <span className="font-display text-sm text-bg/40 tabular-nums">
                    {stage.index}
                  </span>
                  <h3 className="mt-2 text-base text-bg">{stage.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bg/60">
                    {stage.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
