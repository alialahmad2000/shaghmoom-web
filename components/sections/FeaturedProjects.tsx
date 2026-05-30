import { localePath, type Locale } from "@/lib/i18n";
import { projects } from "@/content/projects";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowEnd } from "@/components/ui/Button";

/** Featured projects — 3 cards, link to /projects (§7). */
export function FeaturedProjects({ locale }: { locale: Locale }) {
  const featured = projects.slice(0, 3);

  return (
    <Section tone="alt">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="أعمالنا"
          title="مشاريع نُفّذت بانتباهٍ لما لا يُرى"
        />
        <Reveal>
          <Button
            href={localePath(locale, "/projects")}
            variant="secondary"
            icon={<ArrowEnd />}
            className="shrink-0"
          >
            كل الأعمال
          </Button>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <Reveal key={project.slug} index={i} step={0.07}>
            <ProjectCard project={project} locale={locale} priority={i === 0} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
