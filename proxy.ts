import { NextResponse, type NextRequest } from "next/server";
import { LOCALES, DEFAULT_LOCALE } from "@/lib/i18n";

/**
 * Locale routing (Next.js 16 `proxy`, formerly `middleware`).
 * Any path without a live locale prefix is redirected to the default locale.
 * At launch the only live locale is `ar`, so `/` → `/ar`, `/about` → `/ar/about`.
 * Runs on the Node.js runtime (the only runtime `proxy` supports).
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, API routes, and any file with an extension
  // (this also leaves /sitemap.xml, /robots.txt, /favicon.ico untouched).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
