import type { Metadata } from "next";
import { buildMetadata, SITE_URL, absUrl } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { aboutContent, aboutImage, company } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { values } from "@/content/values";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ValueCard } from "@/components/ui/ValueCard";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/about">): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    path: "/about",
    title: "من نحن — شركة مقاولات في المدينة المنورة",
    description:
      "تعرّف على شغموم للمقاولات العامة في المدينة المنورة: معنى الاسم، رؤيتنا ورسالتنا وقيمنا. نوحّد مراحل المشروع تحت إدارةٍ واحدة وتنفيذٍ منظم.",
  });
}

export default async function AboutPage({
  params,
}: PageProps<"/[locale]/about">) {
  const { locale } = await params;
  const loc = locale as Locale;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "الرئيسية", url: `${SITE_URL}/${loc}` },
          { name: "من نحن", url: absUrl(loc, "/about") },
        ])}
      />

      <PageHeader
        locale={loc}
        eyebrow="من نحن"
        title="نبني الثقة قبل الجدران"
        intro={aboutContent.intro}
        crumbs={[{ label: "من نحن" }]}
      />

      {/* Atmospheric structural banner (sourced + maroon-treated; see content/site.ts) */}
      <div className="bg-bg-alt pb-4 pt-0">
        <Container size="wide">
          <Reveal className="-mt-10 block">
            <figure className="overflow-hidden rounded-2xl ring-1 ring-brand/15 shadow-sm">
              <MediaFrame
                src={aboutImage.src}
                alt={aboutImage.alt}
                ready
                aspect="2.58 / 1"
                priority
                sizes="(min-width: 1024px) 1100px, 100vw"
                rounded="rounded-2xl"
              />
            </figure>
          </Reveal>
        </Container>
      </div>

      {/* The name story */}
      <Section tone="bg" grid>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="font-display text-sm tracking-wide text-brand">
                {company.essence}
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl">
                {aboutContent.nameStory.heading}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal index={1}>
              <p className="text-xl leading-loose text-ink/85">
                {aboutContent.nameStory.body}
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Vision + Mission */}
      <Section tone="alt">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {[aboutContent.vision, aboutContent.mission].map((block, i) => (
            <Reveal key={block.heading} index={i}>
              <div className="h-full rounded-2xl border border-line bg-surface p-9">
                <h2 className="text-2xl text-brand">{block.heading}</h2>
                <span aria-hidden="true" className="mt-4 block h-px w-12 bg-brand/40" />
                <p className="mt-5 text-lg leading-relaxed text-ink/80">
                  {block.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section tone="bg">
        <SectionHeading eyebrow="قيمنا" title="ما نقيس به أنفسنا" />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => (
            <Reveal key={value.title} index={i} step={0.05}>
              <ValueCard value={value} index={i} />
            </Reveal>
          ))}
        </div>
      </Section>

      <ClosingCta locale={loc} />
    </>
  );
}
