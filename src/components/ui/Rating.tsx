import { Star } from "lucide-react";
import { faNum } from "@/lib/format";

export default function Rating({ value, count, size = "sm" }: { value: number; count?: number; size?: "sm" | "md" }) {
  const s = size === "sm" ? "size-3.5" : "size-5";
  return (
    <div className="flex items-center gap-1.5 whitespace-nowrap">
      <div className="flex" dir="ltr">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className={`${s} ${i <= Math.round(value) ? "fill-sun text-sun" : "text-ink/15"}`} />
        ))}
      </div>
      <span className={`font-bold ${size === "sm" ? "text-xs" : "text-sm"}`}>{faNum(value)}</span>
      {count !== undefined && <span className="hidden text-xs text-muted sm:inline">({faNum(count)} نظر)</span>}
    </div>
  );
}
