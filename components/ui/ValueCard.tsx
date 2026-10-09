import type { Value } from "@/content/values";
import { Ring } from "@/components/brand/Ring";

export function ValueCard({ value, index }: { value: Value; index: number }) {
  return (
    <div className="flex h-full flex-col border-[1.5px] border-ink/30 bg-ground p-7">
      <div className="flex items-center gap-4">
        <Ring n={index + 1} size="sm" />
        <h3 className="text-[21px] font-semibold leading-snug">{value.title}</h3>
      </div>
      <p className="mt-4 text-base leading-relaxed text-ink/80">{value.line}</p>
    </div>
  );
}
