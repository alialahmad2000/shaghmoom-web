import { jsonLdScript } from "@/lib/schema";

/** Renders a sanitized JSON-LD <script>. Server component. */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdScript(data) }}
    />
  );
}
