import Link from "next/link";
import { localePath, type Locale } from "@/lib/i18n";
import {
  company,
  contact,
  nav,
  telHref,
  whatsappHref,
} from "@/content/site";
import { services } from "@/content/services";
import { Logo } from "./Logo";
import { WhatsAppIcon, PhoneIcon, PinIcon, ClockIcon } from "@/components/ui/icons";

export function Footer({ locale }: { locale: Locale }) {
  const topServices = services.slice(0, 6);

  return (
    <footer className="bg-brand-deep text-bg">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Logo locale={locale} tone="bg" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-bg/70">
              {company.publicName}. عظمٌ وتشطيبٌ وتنفيذٌ يقوم على الدقة في{" "}
              {company.city}.
            </p>
            <p className="font-display mt-6 text-lg text-bg/90">
              {company.brandLine}
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="روابط الموقع" className="md:col-span-3">
            <h2 className="text-sm font-medium text-bg/50">الموقع</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.path}>
                  <Link
                    href={localePath(locale, item.path)}
                    className="text-bg/80 transition-colors hover:text-bg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="الخدمات" className="md:col-span-2">
            <h2 className="text-sm font-medium text-bg/50">خدماتنا</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {topServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={localePath(locale, `/services/${s.slug}`)}
                    className="text-bg/80 transition-colors hover:text-bg"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-3">
            <h2 className="text-sm font-medium text-bg/50">تواصل</h2>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-bg/80 transition-colors hover:text-bg"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  <span className="tnum">{contact.primaryPhone}</span>
                </a>
              </li>
              <li>
                <a
                  href={telHref(contact.secondaryPhone)}
                  className="inline-flex items-center gap-2.5 text-bg/80 transition-colors hover:text-bg"
                >
                  <PhoneIcon className="h-4 w-4 shrink-0" />
                  <span className="tnum">{contact.secondaryPhone}</span>
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5 text-bg/80">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  {company.city} — {company.district}
                </span>
              </li>
              <li className="inline-flex items-center gap-2.5 text-bg/80">
                <ClockIcon className="h-4 w-4 shrink-0" />
                <span className="tnum">{company.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-bg/15 pt-7 text-xs text-bg/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <span className="tnum">2025</span> {company.legalName}. جميع الحقوق
            محفوظة.
          </p>
          <p className="tnum">
            معتمد لدى منصة مقاول — عضوية 1180118003 · عضو الهيئة السعودية
            للمقاولين
          </p>
        </div>
      </div>
    </footer>
  );
}
