import type { ReactNode } from "react";
import Link from "next/link";
import { localePath, type Locale } from "@/lib/i18n";
import { GridGround } from "@/components/brand/GridGround";

type Crumb = { label: string; path?: string };

/**
 * Inner-page first screen — maroon, joined to the maroon header as one block.
 * Breadcrumb, eyebrow, heading on the edge; rule and intro indented; the large
 * icon on the measuring grid sits in the corner away from the copy. Rendered
 * without entrance animation so the heading (LCP) paints immediately.
 */
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
    <section
      data-ground="maroon"
      aria-labelledby="page-title"
      className="ground-maroon relative isolate overflow-hidden"
    >
      <GridGround className="-top-28 -end-28 w-[70vw] max-w-[340px] sm:max-w-[460px] lg:top-1/2 lg:end-[-3%] lg:w-[40vw] lg:max-w-[600px] lg:-translate-y-1/2" />
      <div className="sh-wrap relative pb-20 pt-12 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
        {crumbs.length > 0 && (
          <nav aria-label="مسار التنقل" className="mb-10">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-ink/80">
              <li>
                <Link href={localePath(locale, "")} className="underline-offset-4 hover:underline">
                  الرئيسية
                </Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.label} className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  {c.path ? (
                    <Link href={localePath(locale, c.path)} className="underline-offset-4 hover:underline">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-ink">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <p className="sh-eyebrow mb-3">{eyebrow}</p>}
        <h1 id="page-title" className="sh-measure text-h1">
          {title}
        </h1>
        <span aria-hidden="true" className="sh-rule mt-8" />
        {intro && <div className="sh-indent sh-measure mt-7 text-body text-ink/85">{intro}</div>}
      </div>
    </section>
  );
}
