"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { localePath, type Locale } from "@/lib/i18n";
import { nav, ctaLabel } from "@/content/site";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { MenuIcon, CloseIcon } from "@/components/ui/icons";

export function Header({ locale }: { locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile overlay on route change — React's render-time
  // "reset state when a prop changes" pattern (no effect / no cascading render).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Lock scroll while the overlay is open.
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
      className={`sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent bg-bg/0"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-12">
        <Logo locale={locale} />

        {/* Desktop nav */}
        <nav
          aria-label="التنقل الرئيسي"
          className="hidden items-center gap-1 lg:flex"
        >
          {nav.map((item) => (
            <Link
              key={item.path}
              href={localePath(locale, item.path)}
              aria-current={isActive(item.path) ? "page" : undefined}
              className={`relative rounded-full px-3.5 py-2 text-sm transition-colors ${
                isActive(item.path)
                  ? "text-brand"
                  : "text-ink/80 hover:text-brand"
              }`}
            >
              {item.label}
              {isActive(item.path) && (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-3.5 -bottom-px h-px bg-brand"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href={localePath(locale, "/contact")} size="md">
            {ctaLabel}
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 text-ink lg:hidden"
          aria-label="فتح القائمة"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile overlay nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
          >
            <div
              className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute inset-y-0 end-0 flex w-[86%] max-w-sm flex-col bg-bg shadow-2xl"
              initial={{ x: reduce ? 0 : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: reduce ? 0 : "100%" }}
              transition={{ duration: reduce ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between border-b border-line px-6 py-4">
                <Logo locale={locale} />
                <button
                  type="button"
                  className="rounded-full p-2 text-ink"
                  aria-label="إغلاق القائمة"
                  onClick={() => setOpen(false)}
                >
                  <CloseIcon className="h-6 w-6" />
                </button>
              </div>

              <nav
                aria-label="التنقل الرئيسي"
                className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6"
              >
                {nav.map((item) => (
                  <Link
                    key={item.path}
                    href={localePath(locale, item.path)}
                    aria-current={isActive(item.path) ? "page" : undefined}
                    className={`rounded-xl px-4 py-3 text-lg transition-colors ${
                      isActive(item.path)
                        ? "bg-brand-tint text-brand"
                        : "text-ink hover:bg-bg-alt"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="flex flex-col gap-3 border-t border-line p-6">
                <Button href={localePath(locale, "/contact")} size="lg" className="w-full">
                  {ctaLabel}
                </Button>
                <WhatsAppButton size="lg" className="w-full" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
