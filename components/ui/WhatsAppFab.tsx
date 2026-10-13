"use client";

import { usePathname } from "next/navigation";
import { localePath, type Locale } from "@/lib/i18n";
import { whatsappHref } from "@/content/site";
import { WhatsAppIcon } from "./icons";

/**
 * Fixed WhatsApp button in the corner on phones and tablets (owner note 15:
 * WhatsApp is the main contact channel). Brand colours only — maroon with a
 * sand ring, so it reads on both grounds. Not shown on the plastering form
 * (which has its own bar and WhatsApp tickets) or in print.
 */
export function WhatsAppFab({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  if (pathname === localePath(locale, "/plastering-form")) return null;

  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب"
      className="fixed end-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-sand bg-maroon text-sand outline outline-1 outline-maroon/40 transition-transform duration-200 active:scale-95 lg:hidden print:hidden"
      style={{ bottom: "max(16px, env(safe-area-inset-bottom))" }}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
