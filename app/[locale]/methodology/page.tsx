import type { Metadata } from "next";
import { buildMetadata, SITE_URL, absUrl } from "@/lib/seo";
import { localePath, type Locale } from "@/lib/i18n";
import { methodologyHeading, methodologyIntro, inspectionReports } from "@/content/methodology";
import { PageHeader } from "@/components/sections/PageHeader";
import { MethodPath } from "@/components/sections/MethodPath";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowEnd } from "@/components/ui/Button";
import { CtaBand } from "@/components/sections/CtaBand";
import { SiteFooter } from "@/components/layout/SiteFooter";
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
      "منهجية شغموم في المدينة المنورة: قراءة المخطط قبل التنفيذ، وما غاب عن الورق، واتفاق مكتوب، وتنفيذ تحت إدارة واحدة، واستلام على مراحل مع تقارير فنية مصنّفة بحسب الخطورة.",
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

      {/* Grounds: maroon header · sand (path) · maroon (reports) · sand CTA · footer maroon */}
      <PageHeader
        locale={loc}
        eyebrow="منهجيتنا"
        title={methodologyHeading}
        intro={<p>{methodologyIntro}</p>}
        crumbs={[{ label: "منهجيتنا" }]}
      />

      <MethodPath locale={loc} ground="sand" heading={false} />

      <Section ground="maroon" labelledBy="reports-title">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              id="reports-title"
              eyebrow={inspectionReports.eyebrow}
              title={inspectionReports.heading}
              intro={<p>{inspectionReports.body}</p>}
            />
          </div>
          <Reveal index={1} className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <div className="relative p-6">
              <span aria-hidden="true" className="sh-dash-box absolute inset-0 text-ink/40" />
              <p className="relative text-[15px] text-ink/80">{inspectionReports.note}</p>
            </div>
            <div className="mt-6">
              <Button href={localePath(loc, "/plastering-form")} variant="ghost" icon={<ArrowEnd />}>
                استمارة اللياسة
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand locale={loc} ground="sand" />
      <SiteFooter locale={loc} ground="maroon" />
    </>
  );
}
