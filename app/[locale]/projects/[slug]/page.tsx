import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata, SITE_URL, absUrl } from "@/lib/seo";
import { LOCALES, localePath, type Locale } from "@/lib/i18n";
import { projects, getProject } from "@/content/projects";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Button, ArrowEnd } from "@/components/ui/Button";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const dynamicParams = false;

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

      <PageHeader
        locale={loc}
        eyebrow={project.kind}
        title={project.title}
        intro={project.narrative}
        crumbs={[
          { label: "أعمالنا", path: "/projects" },
          { label: project.title },
        ]}
      />

      <Section tone="bg">
        {/* Cover */}
        <Reveal>
          <MediaFrame
            src={project.cover.src}
            alt={project.cover.alt}
            ready={project.cover.ready}
            aspect="16 / 9"
            priority
            sizes="(min-width: 1024px) 1000px, 100vw"
            rounded="rounded-3xl"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Scope */}
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-2xl text-ink">نطاق العمل</h2>
              <span aria-hidden="true" className="mt-4 block h-px w-12 bg-brand/40" />
            </Reveal>
            <ul className="mt-6 space-y-3">
              {project.scope.map((item, i) => (
                <Reveal as="li" key={item} index={i} step={0.05}>
                  <div className="flex items-start gap-3 text-lg text-ink/85">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                    />
                    {item}
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* The "ما لا يُرى" angle */}
          <aside className="lg:col-span-5">
            <Reveal index={1}>
              <div className="rounded-2xl bg-brand-deep p-8 text-bg">
                <span className="font-display text-sm tracking-wide text-bg/60">
                  ما لا يُرى
                </span>
                <p className="mt-4 text-lg leading-loose text-bg/90">
                  {project.unseen}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm text-bg/55">
                  <span aria-hidden="true" className="h-px w-6 bg-bg/30" />
                  {project.location}
                </div>
              </div>
            </Reveal>
          </aside>
        </div>

        {/* Gallery */}
        {project.gallery.length > 0 && (
          <div className="mt-16">
            <Reveal>
              <h2 className="text-2xl text-ink">من المشروع</h2>
              <span aria-hidden="true" className="mt-4 block h-px w-12 bg-brand/40" />
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
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
          <div className="mt-14">
            <Button
              href={localePath(loc, "/projects")}
              variant="secondary"
              icon={<ArrowEnd />}
            >
              العودة إلى الأعمال
            </Button>
          </div>
        </Reveal>
      </Section>

      <ClosingCta locale={loc} />
    </>
  );
}
