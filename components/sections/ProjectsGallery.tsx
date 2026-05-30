"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { type Locale } from "@/lib/i18n";
import {
  projects,
  projectFilters,
  type Project,
  type ProjectTag,
} from "@/content/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

/** Filterable project gallery (§7-Projects). Filter by category. */
export function ProjectsGallery({ locale }: { locale: Locale }) {
  const [filter, setFilter] = useState<"all" | ProjectTag>("all");
  const reduce = useReducedMotion();

  const filtered: Project[] = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.tags.includes(filter)),
    [filter]
  );

  return (
    <div>
      {/* Filter rail */}
      <div
        role="tablist"
        aria-label="تصفية الأعمال"
        className="flex flex-wrap gap-2"
      >
        {projectFilters.map((f) => {
          const active = filter === f.value;
          return (
            <button
              key={f.value}
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f.value)}
              className={`rounded-full border px-5 py-2 text-sm transition-colors duration-200 ${
                active
                  ? "border-brand bg-brand text-bg"
                  : "border-line text-muted hover:border-brand/40 hover:text-brand"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              layout={!reduce}
              initial={{ opacity: 0, y: reduce ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduce ? 0 : -8 }}
              transition={{
                duration: reduce ? 0 : 0.35,
                ease: [0.22, 1, 0.36, 1],
                delay: reduce ? 0 : (i % 3) * 0.05,
              }}
            >
              <ProjectCard project={project} locale={locale} priority={i < 3} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-muted">لا توجد أعمال في هذا التصنيف بعد.</p>
      )}
    </div>
  );
}
