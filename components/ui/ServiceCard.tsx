import Link from "next/link";
import { localePath, type Locale } from "@/lib/i18n";
import { ArrowEnd } from "./Button";
import type { Service } from "@/content/services";
import { Ring } from "@/components/brand/Ring";

/**
 * Service card on a locked grid: ring and title start at the same height in
 * every card; only the end of the body varies. Opaque on its ground so a
 * texture behind the grid never sits under text.
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
      className="group flex h-full flex-col border-[1.5px] border-ink/30 bg-ground p-6 transition-colors duration-300 hover:border-ink"
    >
      <div className="flex flex-col items-start gap-4">
        <Ring n={index + 1} size="sm" />
        <h3 className="text-[21px] font-semibold leading-snug">{service.title}</h3>
      </div>
      <p className="mt-5 flex-1 text-base leading-relaxed text-ink/80">{service.included.slice(0, 3).join("، ")}.</p>
      <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold">
        التفاصيل
        <ArrowEnd className="transition-transform duration-300 group-hover:-translate-x-1" />
      </span>
    </Link>
  );
}
