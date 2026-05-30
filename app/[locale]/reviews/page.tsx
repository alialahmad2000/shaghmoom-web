import type { Metadata } from "next";
import { buildMetadata, SITE_URL, absUrl } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { reviews } from "@/content/reviews";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Section";
import { Testimonial } from "@/components/ui/Testimonial";
import { Reveal } from "@/components/ui/Reveal";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/reviews">): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    path: "/reviews",
    title: "آراء العملاء — شغموم في المدينة المنورة",
    description:
      "كلماتٌ من عملائنا في المدينة المنورة. نبني الثقة كما نبني المساحات.",
  });
}

export default async function ReviewsPage({
  params,
}: PageProps<"/[locale]/reviews">) {
  const { locale } = await params;
  const loc = locale as Locale;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "الرئيسية", url: `${SITE_URL}/${loc}` },
          { name: "آراء العملاء", url: absUrl(loc, "/reviews") },
        ])}
      />

      <PageHeader
        locale={loc}
        eyebrow="آراء العملاء"
        title="نبني الثقة كما نبني المساحات"
        intro="كلماتٌ من عملائنا في المدينة المنورة — نعرضها كما وصلتنا، بثقةٍ واحترام."
        crumbs={[{ label: "آراء العملاء" }]}
      />

      <Section tone="bg">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {reviews.map((review, i) => (
            <Reveal key={i} index={i} step={0.08}>
              <Testimonial review={review} />
            </Reveal>
          ))}
        </div>
      </Section>

      <ClosingCta locale={loc} />
    </>
  );
}
