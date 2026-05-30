import Link from "next/link";
import { localePath, type Locale } from "@/lib/i18n";
import { ArrowEnd } from "./Button";
import type { Service } from "@/content/services";

/**
 * Service card. Shows the service and its first "included" lines; on close
 * inspection (hover/focus) a hairline draws and the arrow advances — detail
 * surfaces to the attentive (§5). The full list lives on the service page.
 */
export function ServiceCard({
  service,
  locale,
  index,
}: {
  service: Service;
  locale: Locale;
  index: number;
}) {
  return (
    <Link
      href={localePath(locale, `/services/${service.slug}`)}
      className="group relative flex h-full flex-col rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 ease-[var(--ease-out-soft)] hover:border-brand/40 focus-visible:outline-2 focus-visible:outline-brand"
    >
      <span className="font-display text-sm text-faint tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-3 text-xl text-ink transition-colors group-hover:text-brand">
        {service.title}
      </h3>

      {/* surfacing hairline */}
      <span
        aria-hidden="true"
        className="mt-4 block h-px w-10 origin-[inline-start] bg-brand/50 transition-all duration-300 ease-[var(--ease-out-soft)] group-hover:w-16"
      />

      <ul className="mt-4 flex-1 space-y-1.5 text-sm leading-relaxed text-muted">
        {service.included.slice(0, 3).map((item) => (
          <li key={item} className="flex gap-2">
            <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-faint" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand">
        تعرّف أكثر
        <ArrowEnd className="transition-transform duration-300 group-hover:translate-x-[-3px] rtl:group-hover:translate-x-[3px]" />
      </span>
    </Link>
  );
}
