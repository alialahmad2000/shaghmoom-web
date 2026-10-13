import { notFound } from "next/navigation";

/**
 * Any unknown path under a live locale lands here and raises notFound(), so
 * the visitor gets the branded 404 (app/[locale]/not-found.tsx) inside the
 * site layout — header, logo and footer — instead of the bare global one.
 */
export const dynamicParams = true;
export const dynamic = "force-static";

export function generateStaticParams() {
  return [];
}

export default function CatchAll() {
  notFound();
}
