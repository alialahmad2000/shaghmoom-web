import Link from "next/link";
import { localePath, type Locale } from "@/lib/i18n";
import { MediaFrame } from "./MediaFrame";
import type { Project } from "@/content/projects";

/**
 * Project card. The cover sits in a MediaFrame (real photo or refined
 * placeholder). On close inspection, the "ما لا يُرى" line surfaces over the
 * image — the detail caught on this project, as if examined up close (§5).
 */
export function ProjectCard({
  project,
  locale,
  priority = false,
}: {
  project: Project;
  locale: Locale;
  priority?: boolean;
}) {
  return (
    <Link
      href={localePath(locale, `/projects/${project.slug}`)}
      className="group block focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-4"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <MediaFrame
          src={project.cover.src}
          alt={project.cover.alt}
          ready={project.cover.ready}
          aspect="4 / 3"
          priority={priority}
          rounded="rounded-2xl"
          className="transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-[1.03]"
        />
        {/* the surfaced detail — revealed on hover/focus */}
        <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-brand-deep/90 via-brand-deep/30 to-transparent p-5 opacity-0 transition-opacity duration-400 ease-[var(--ease-out-soft)] group-hover:opacity-100 group-focus-visible:opacity-100">
          <p className="text-sm leading-relaxed text-bg">
            <span className="mb-1 block text-xs font-medium tracking-wide text-bg/70">
              ما لا يُرى
            </span>
            {project.unseen}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg text-ink transition-colors group-hover:text-brand">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-muted">{project.kind}</p>
      </div>
    </Link>
  );
}
