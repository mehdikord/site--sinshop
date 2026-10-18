import { finalPrice, toman } from "@/lib/format";

export default function Price({ price, discount, big = false }: { price: number; discount: number; big?: boolean }) {
  const f = finalPrice(price, discount);
  return (
    <div className="flex flex-wrap items-baseline gap-2">
      <span className={`font-black ${big ? "text-2xl" : "text-sm sm:text-base"}`}>{toman(f)}</span>
      {discount > 0 && <span className={`text-muted line-through ${big ? "text-sm" : "text-xs"}`}>{toman(price)}</span>}
    </div>
  );
}
