import type { Metadata } from "next";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { ServicesSnapshot } from "@/components/sections/ServicesSnapshot";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { MethodologyTeaser } from "@/components/sections/MethodologyTeaser";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    path: "",
    fullTitle: true,
    title:
      "شركة شغموم للمقاولات العامة | مقاول عظم وتشطيب في المدينة المنورة",
    description:
      "شركة مقاولات عامة في المدينة المنورة — أعمال عظم وتشطيب وتسليم مفتاح بدقة واحترافية. نرصد ما لا يُرى قبل أن يصبح تكلفة. نبني الثقة قبل الجدران.",
  });
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  const loc = locale as Locale;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "الرئيسية", url: `${SITE_URL}/${loc}` },
        ])}
      />
      <Hero locale={loc} />
      <Philosophy />
      <ServicesSnapshot locale={loc} />
      <FeaturedProjects locale={loc} />
      <MethodologyTeaser locale={loc} />
      <ReviewsSection />
      <ClosingCta locale={loc} />
    </>
  );
}
