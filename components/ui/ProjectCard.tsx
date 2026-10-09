import Link from "next/link";
import { localePath, type Locale } from "@/lib/i18n";
import { MediaFrame } from "./MediaFrame";
import type { Project } from "@/content/projects";

/** Project card — cover (real photo or placeholder) with the title beneath. */
export function ProjectCard({
  project,
  locale,
  preload = false,
}: {
  project: Project;
  locale: Locale;
  preload?: boolean;
}) {
  return (
    <Link href={localePath(locale, `/projects/${project.slug}`)} className="group block">
      <MediaFrame
        src={project.cover.src}
        alt={project.cover.alt}
        ready={project.cover.ready}
        aspect="4 / 3"
        preload={preload}
      />
      <div className="mt-4">
        <h3 className="text-[21px] font-semibold leading-snug underline-offset-8 group-hover:underline">
          {project.title}
        </h3>
        <p className="mt-1 text-[15px] text-ink/80">{project.kind}</p>
      </div>
    </Link>
  );
}
