import type { Metadata } from "next";
import { buildMetadata, SITE_URL, absUrl } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import {
  categories,
  servicesByCategory,
  type ServiceCategory,
} from "@/content/services";
import { projectTypes } from "@/content/site";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Reveal } from "@/components/ui/Reveal";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/services">): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    path: "/services",
    title: "خدماتنا — مقاول عظم وتشطيب في المدينة المنورة",
    description:
      "خدمات شغموم في المدينة المنورة: أعمال البناء والهيكل الإنشائي (عظم) والتشطيبات الكاملة — من الخرسانة والعزل إلى الكهرباء والسباكة والدهانات والأرضيات.",
  });
}

const order: ServiceCategory[] = ["construction", "finishing"];

export default async function ServicesPage({
  params,
}: PageProps<"/[locale]/services">) {
  const { locale } = await params;
  const loc = locale as Locale;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "الرئيسية", url: `${SITE_URL}/${loc}` },
          { name: "خدماتنا", url: absUrl(loc, "/services") },
        ])}
      />

      <PageHeader
        locale={loc}
        eyebrow="خدماتنا"
        title="من العظم إلى التشطيب — تحت إدارةٍ واحدة"
        intro="نوحّد جميع مراحل المشروع تحت إدارةٍ واحدة وتنفيذٍ منظم، في المدينة المنورة وما حولها. لكل خدمة صفحةٌ تشرح ما تشمله ولماذا تختلف معنا."
        crumbs={[{ label: "خدماتنا" }]}
      />

      {order.map((cat, ci) => {
        const list = servicesByCategory(cat);
        return (
          <Section key={cat} tone={ci % 2 === 0 ? "bg" : "alt"}>
            <Reveal>
              <div className="flex items-baseline gap-4">
                <span className="font-display text-sm text-faint tabular-nums">
                  {String(ci + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-2xl text-ink sm:text-3xl">
                    {categories[cat].title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-muted">
                    {categories[cat].tagline}
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((service, i) => (
                <Reveal key={service.slug} index={i} step={0.05}>
                  <ServiceCard service={service} locale={loc} index={i} />
                </Reveal>
              ))}
            </div>
          </Section>
        );
      })}

      {/* Project types served */}
      <Section tone="bg" className="!py-16">
        <Reveal>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <span className="text-sm text-faint">أنواع المشاريع:</span>
            {projectTypes.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line px-4 py-1.5 text-sm text-muted"
              >
                {t}
              </span>
            ))}
            <span className="text-sm text-muted">— سكني وتجاري.</span>
          </div>
        </Reveal>
      </Section>

      <ClosingCta locale={loc} />
    </>
  );
}
