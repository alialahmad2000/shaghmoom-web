import type { Metadata } from "next";
import { buildMetadata, SITE_URL, absUrl } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import {
  methodologyHeading,
  methodologyIntro,
  stages,
  inspectionReports,
} from "@/content/methodology";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/methodology">): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    path: "/methodology",
    title: "منهجيتنا — كيف نعمل في المدينة المنورة",
    description:
      "منهجية شغموم في المدينة المنورة: الدراسة قبل التنفيذ، رصد ما لا يُرى، التنفيذ المنظّم، التقارير الفنية المصنّفة بالخطورة، والتسليم بثقة.",
  });
}

export default async function MethodologyPage({
  params,
}: PageProps<"/[locale]/methodology">) {
  const { locale } = await params;
  const loc = locale as Locale;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "الرئيسية", url: `${SITE_URL}/${loc}` },
          { name: "منهجيتنا", url: absUrl(loc, "/methodology") },
        ])}
      />

      <PageHeader
        locale={loc}
        eyebrow="منهجيتنا"
        title={methodologyHeading}
        intro={methodologyIntro}
        crumbs={[{ label: "منهجيتنا" }]}
      />

      {/* Staged process */}
      <Section tone="bg">
        <ol className="relative mx-auto max-w-3xl">
          {/* spine */}
          <span
            aria-hidden="true"
            className="absolute bottom-6 top-6 start-[1.45rem] w-px bg-line-strong"
          />
          {stages.map((stage, i) => (
            <Reveal as="li" key={stage.index} index={i} step={0.08}>
              <div className="relative flex gap-6 pb-12 last:pb-0">
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-surface">
                  <span className="font-display text-sm text-brand tabular-nums">
                    {stage.index}
                  </span>
                </div>
                <div className="pt-1.5">
                  <h2 className="text-xl text-ink">{stage.title}</h2>
                  <p className="mt-2 text-lg leading-relaxed text-muted">
                    {stage.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Technical inspection reports — the genuine differentiator */}
      <Section tone="deep" grid>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="flex items-center gap-3 text-sm font-medium tracking-wide text-bg/70">
                <span aria-hidden="true" className="inline-block h-px w-10 bg-bg/40" />
                قدرة تميّزنا
              </span>
              <h2 className="mt-6 text-3xl text-bg sm:text-4xl">
                {inspectionReports.heading}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal index={1}>
              <p className="text-xl leading-loose text-bg/85">
                {inspectionReports.body}
              </p>
            </Reveal>
            <Reveal index={2}>
              <div className="mt-8 rounded-2xl border border-dashed border-bg/25 p-6">
                <span className="flex items-center gap-2 text-sm text-bg/55">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-bg/40" />
                  {inspectionReports.note}
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <ClosingCta locale={loc} />
    </>
  );
}
