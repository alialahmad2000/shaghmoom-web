import Link from "next/link";
import { localePath, type Locale } from "@/lib/i18n";
import {
  company,
  contact,
  lines,
  privacyLink,
  siteLinks,
  social,
  telHref,
  whatsappHref,
} from "@/content/site";
import type { Ground } from "@/components/ui/Section";
import { LogoMark } from "./Logo";
import { ClosingLine } from "@/components/brand/ClosingLine";
import { arDigits } from "@/lib/digits";
import { InstagramIcon, TikTokIcon } from "@/components/ui/icons";

/**
 * Closing + footer (brand §11). Its ground is the opposite of the page's last
 * section, so every page passes it. The closing carries exactly three
 * elements — «نبني الثقة قبل الجدران», «شغموم عند اللزوم يجملك» with the gold
 * brush on the predicate, and the logo — and no pattern. The quiet utility
 * row below holds the links and contacts.
 */
export function SiteFooter({ locale, ground }: { locale: Locale; ground: Ground }) {
  const year = new Date().getFullYear();

  return (
    <footer data-ground={ground} className={`ground-${ground} print:hidden`}>
      <div className="sh-wrap pb-12 pt-20 sm:pt-24 lg:pt-32">
        {/* the closing: three elements */}
        <div className="flex flex-col gap-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-h3">{lines.tagline}</p>
            <ClosingLine className="mt-5" />
          </div>
          <div className="p-4">
            <LogoMark mark="lockup" ground={ground} width={176} />
          </div>
        </div>

        {/* utility row */}
        <div className="mt-20 grid grid-cols-1 gap-10 border-t border-ink/20 pt-10 text-[15px] sm:grid-cols-2 lg:grid-cols-12">
          <nav aria-label="روابط الموقع" className="lg:col-span-5">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {siteLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    href={localePath(locale, item.path)}
                    className="text-ink/80 underline-offset-4 transition-colors hover:text-ink hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="space-y-2.5 lg:col-span-4">
            <li>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink/80 transition-colors hover:text-ink"
              >
                واتساب واتصال <span className="tnum font-semibold text-ink">{contact.primaryPhone}</span>
              </a>
            </li>
            <li>
              <a href={telHref(contact.secondaryPhone)} className="text-ink/80 transition-colors hover:text-ink">
                جوال إضافي <span className="tnum font-semibold text-ink">{contact.secondaryPhone}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="text-ink/80 transition-colors hover:text-ink">
                البريد <span className="ltr font-semibold text-ink">{contact.email}</span>
              </a>
            </li>
            <li className="text-ink/80">
              {company.city} — {company.district}
            </li>
            <li className="text-ink/80">
              أوقات العمل <span className="text-ink">{company.hours}</span>
            </li>
          </ul>

          <ul className="space-y-2.5 lg:col-span-3">
            <li>
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-ink/80 transition-colors hover:text-ink"
              >
                <InstagramIcon className="h-5 w-5 shrink-0 text-ink" />
                إنستقرام <span className="ltr font-semibold text-ink">{company.handle}</span>
              </a>
            </li>
            <li>
              <a
                href={social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-ink/80 transition-colors hover:text-ink"
              >
                <TikTokIcon className="h-5 w-5 shrink-0 text-ink" />
                تيك توك <span className="ltr font-semibold text-ink">{company.handle}</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-12 flex flex-col gap-4 text-sm text-ink/75 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p>
              © {arDigits(year)} {company.legalName}. جميع الحقوق محفوظة.
            </p>
            <p className="mt-1.5">
              الرقم الموحد <span className="tnum font-semibold text-ink/90">{company.unifiedNumber}</span>
              <span aria-hidden="true" className="mx-2.5">·</span>
              عضوية مقاول <span className="tnum font-semibold text-ink/90">{company.contractorMembership}</span>
            </p>
          </div>
          <Link
            href={localePath(locale, privacyLink.path)}
            className="underline underline-offset-4 transition-colors hover:text-ink"
          >
            {privacyLink.label}
          </Link>
        </div>
      </div>
    </footer>
  );
}
