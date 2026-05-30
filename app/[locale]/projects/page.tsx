import type { Metadata } from "next";
import { buildMetadata, SITE_URL, absUrl } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Section";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { ClosingCta } from "@/components/sections/ClosingCta";
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
      "مختاراتٌ من أعمال شغموم في المدينة المنورة: فلل وعمائر ومشاريع تجارية — عظمٌ وتشطيب. كل مشروعٍ ووراءه تفصيلةٌ لا تُرى صنعت الفرق.",
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

      <PageHeader
        locale={loc}
        eyebrow="أعمالنا"
        title="مشاريع نُفّذت بانتباهٍ لما لا يُرى"
        intro="مختاراتٌ من مشاريعنا في المدينة المنورة. مرّر فوق كل عمل لترى التفصيلة الخفية التي رصدناها فيه."
        crumbs={[{ label: "أعمالنا" }]}
      />

      <Section tone="bg">
        <ProjectsGallery locale={loc} />
      </Section>

      <ClosingCta locale={loc} />
    </>
  );
}
