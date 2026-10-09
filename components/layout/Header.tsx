"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { localePath, type Locale } from "@/lib/i18n";
import { nav, siteLinks, ctaLabel } from "@/content/site";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { MenuIcon, CloseIcon } from "@/components/ui/icons";

/**
 * Site header — always on maroon (brand §11), joined to the maroon first
 * screen below it. No "company — city" line. Arabic wordmark on mobile, lockup
 * on desktop. On the plastering form the header scrolls away instead of
 * sticking, so the form's own station bar can take the top edge; it is never
 * printed.
 */
export function Header({ locale }: { locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const isForm = pathname === localePath(locale, "/plastering-form");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the overlay on route change (render-time state reset, no effect).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (path: string) => {
    const full = localePath(locale, path);
    return path === "" ? pathname === full : pathname.startsWith(full);
  };

  return (
    <header
      data-ground="maroon"
      className={`ground-maroon z-50 border-b transition-colors duration-300 print:hidden ${
        isForm ? "relative" : "sticky top-0"
      } ${scrolled && !isForm ? "border-ink/15" : "border-transparent"}`}
    >
      <div className="sh-wrap flex items-center justify-between gap-6 py-4 lg:py-5">
        <Logo locale={locale} />

        <nav aria-label="التنقل الرئيسي" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                href={localePath(locale, item.path)}
                aria-current={active ? "page" : undefined}
                className={`relative px-2.5 py-2 text-[15px] font-medium transition-colors xl:px-3.5 ${
                  active ? "text-ink" : "text-ink/80 hover:text-ink"
                }`}
              >
                {item.label}
                {active && (
                  <span aria-hidden="true" className="absolute inset-x-2.5 -bottom-0.5 h-0.5 bg-ink xl:inset-x-3.5" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href={localePath(locale, "/contact")}>{ctaLabel}</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center text-ink lg:hidden"
          aria-label="فتح القائمة"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <MenuIcon className="h-7 w-7" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="القائمة"
            className="ground-maroon fixed inset-0 z-50 flex flex-col lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
          >
            <div className="sh-wrap flex items-center justify-between gap-6 py-4">
              <Logo locale={locale} />
              <button
                type="button"
                className="inline-flex h-12 w-12 items-center justify-center text-ink"
                aria-label="إغلاق القائمة"
                onClick={() => setOpen(false)}
              >
                <CloseIcon className="h-7 w-7" />
              </button>
            </div>

            <nav aria-label="التنقل الرئيسي" className="sh-wrap flex-1 overflow-y-auto py-6">
              <ul className="border-t border-ink/15">
                {siteLinks.map((item) => (
                  <li key={item.path} className="border-b border-ink/15">
                    <Link
                      href={localePath(locale, item.path)}
                      aria-current={isActive(item.path) ? "page" : undefined}
                      className={`block py-4 text-xl font-semibold ${
                        isActive(item.path) ? "text-ink" : "text-ink/80"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="sh-wrap flex flex-col gap-3 pb-8 pt-2">
              <Button href={localePath(locale, "/contact")} size="lg" className="w-full">
                {ctaLabel}
              </Button>
              <WhatsAppButton size="lg" className="w-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
