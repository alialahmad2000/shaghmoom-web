import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { localePath, type Locale } from "@/lib/i18n";
import Link from "next/link";

type Crumb = { label: string; path?: string };

/** Consistent inner-page header — eyebrow, display H1, intro, breadcrumb. */
export function PageHeader({
  locale,
  eyebrow,
  title,
  intro,
  crumbs = [],
}: {
  locale: Locale;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-line bg-bg-alt">
      <div
        aria-hidden="true"
        className="blueprint pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        {crumbs.length > 0 && (
          <Reveal>
            <nav aria-label="مسار التنقل" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
                <li>
                  <Link
                    href={localePath(locale, "")}
                    className="transition-colors hover:text-brand"
                  >
                    الرئيسية
                  </Link>
                </li>
                {crumbs.map((c) => (
                  <li key={c.label} className="flex items-center gap-2">
                    <span aria-hidden="true" className="text-faint">
                      /
                    </span>
                    {c.path ? (
                      <Link
                        href={localePath(locale, c.path)}
                        className="transition-colors hover:text-brand"
                      >
                        {c.label}
                      </Link>
                    ) : (
                      <span className="text-ink">{c.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>
        )}

        {eyebrow && (
          <Reveal>
            <span className="flex items-center gap-3 text-sm font-medium tracking-wide text-brand">
              <span aria-hidden="true" className="inline-block h-px w-10 bg-brand/60" />
              {eyebrow}
            </span>
          </Reveal>
        )}
        <Reveal index={1}>
          <h1 className="mt-5 text-balance text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal index={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {intro}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
