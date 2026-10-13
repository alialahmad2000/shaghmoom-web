import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata, SITE_URL, absUrl } from "@/lib/seo";
import { LOCALES, localePath, type Locale } from "@/lib/i18n";
import { arDigits } from "@/lib/digits";
import { projects, getProject } from "@/content/projects";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Button, ArrowEnd } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBand } from "@/components/sections/CtaBand";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

// Unknown paths render on demand and raise notFound(), so the visitor gets the
// branded 404 inside the site layout (header, logo, footer).

export async function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/projects/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return buildMetadata({
    locale: locale as Locale,
    path: `/projects/${slug}`,
    title: `${project.title} — ${project.kind} في المدينة المنورة`,
    description: project.narrative,
  });
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/[locale]/projects/[slug]">) {
  const { locale, slug } = await params;
  const loc = locale as Locale;
  const project = getProject(slug);
  if (!project) notFound();

  const url = absUrl(loc, `/projects/${slug}`);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "الرئيسية", url: `${SITE_URL}/${loc}` },
          { name: "أعمالنا", url: absUrl(loc, "/projects") },
          { name: project.title, url },
        ])}
      />

      {/* Grounds: maroon header · sand (project) · maroon CTA · footer sand */}
      <PageHeader
        locale={loc}
        eyebrow={project.kind}
        title={project.title}
        intro={<p>{project.narrative}</p>}
        crumbs={[
          { label: "أعمالنا", path: "/projects" },
          { label: project.title },
        ]}
      />

      <Section ground="sand">
        <Reveal>
          <MediaFrame
            src={project.cover.src}
            alt={project.cover.alt}
            ready={project.cover.ready}
            aspect="16 / 9"
            preload
            sizes="(min-width: 1280px) 1088px, 100vw"
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <SectionHeading title="نطاق العمل" />
            <ol className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {project.scope.map((item, i) => (
                <Reveal as="li" key={item} index={i} step={0.05} className="flex">
                  <div className="flex w-full items-start gap-4 border-[1.5px] border-ink/30 p-5">
                    <span aria-hidden="true" className="mt-0.5 font-semibold text-accent">
                      {arDigits(i + 1)}
                    </span>
                    <span>{item}</span>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <Reveal index={1}>
              <div className="border-[1.5px] border-ink p-7">
                <p className="sh-eyebrow">ما ننتبه له في مثل هذا المشروع</p>
                <p className="mt-4 text-body text-ink/85">{project.unseen}</p>
                <p className="mt-6 text-[15px] text-ink/75">{project.location}</p>
              </div>
            </Reveal>
          </aside>
        </div>

        {project.gallery.length > 0 && (
          <div className="mt-20">
            <SectionHeading title="من المشروع" />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {project.gallery.map((img, i) => (
                <Reveal key={img.src} index={i} step={0.06}>
                  <MediaFrame
                    src={img.src}
                    alt={img.alt}
                    ready={img.ready}
                    aspect="4 / 3"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        )}

        <Reveal>
          <div className="mt-16">
            <Button href={localePath(loc, "/projects")} variant="ghost" icon={<ArrowEnd />}>
              العودة إلى الأعمال
            </Button>
          </div>
        </Reveal>
      </Section>

      <CtaBand locale={loc} ground="maroon" />
      <SiteFooter locale={loc} ground="sand" />
    </>
  );
}
