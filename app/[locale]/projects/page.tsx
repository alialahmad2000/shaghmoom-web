import type { Metadata } from "next";
import { buildMetadata, SITE_URL, absUrl } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Section";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { CtaBand } from "@/components/sections/CtaBand";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/projects">): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    path: "/projects",
    title: "أعمالنا — مشاريع البناء والتشطيب في المدينة المنورة",
    description:
      "أنواع المشاريع التي تنفّذها شغموم في المدينة المنورة: فلل وعمائر ومشاريع تجارية، عظم وتشطيب، ومع كل مشروع ما لاحظناه مما غاب عن الورق.",
  });
}

export default async function ProjectsPage({
  params,
}: PageProps<"/[locale]/projects">) {
  const { locale } = await params;
  const loc = locale as Locale;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "الرئيسية", url: `${SITE_URL}/${loc}` },
          { name: "أعمالنا", url: absUrl(loc, "/projects") },
        ])}
      />

      {/* Grounds: maroon header · sand (gallery) · maroon CTA · footer sand */}
      <PageHeader
        locale={loc}
        eyebrow="أعمالنا"
        title="أنواع المشاريع التي ننفّذها"
        intro={<p>نماذج لما ننفّذه في المدينة المنورة، ومع كل نموذج مثال لما ننتبه له مما غاب عن الورق. صور المشاريع تُضاف تباعًا.</p>}
        crumbs={[{ label: "أعمالنا" }]}
      />

      <Section ground="sand">
        <ProjectsGallery locale={loc} />
      </Section>

      <CtaBand locale={loc} ground="maroon" />
      <SiteFooter locale={loc} ground="sand" />
    </>
  );
}
