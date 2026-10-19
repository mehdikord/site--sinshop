"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/types";
import { useCart } from "@/store/cart";
import { faNum } from "@/lib/format";
import Price from "@/components/ui/Price";
import Rating from "@/components/ui/Rating";
import { categoryMap } from "@/data/categories";

export default function ProductCard({ p, priority = false, fun = false }: { p: Product; priority?: boolean; fun?: boolean }) {
  const { add } = useCart();
  return (
    <div className={`group relative flex h-full flex-col overflow-hidden bg-white transition-all duration-300 ${fun ? "toy hover:-translate-y-2 hover:rotate-[-1.5deg] hover:shadow-[0_12px_0_var(--color-ink)]" : "card hover:-translate-y-1.5 hover:shadow-pop"}`}>
      <Link href={`/products/${p.id}`} className={`relative block aspect-square overflow-hidden bg-cream ${fun ? "m-2 rounded-[1.25rem]" : ""}`}>
        <Image src={p.images[0]} alt={p.title} fill sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw" priority={priority} className="object-cover transition duration-700 group-hover:scale-110" />
        <div className="absolute top-3 right-3 flex flex-col gap-1">
          {p.discount > 0 && <span className={`rounded-full bg-coral px-2.5 py-1 text-xs font-black text-white ${fun ? "-rotate-6 ring-2 ring-ink" : ""}`}>٪{faNum(p.discount)}</span>}
          {p.tags.includes("new") && <span className="rounded-full bg-sky px-2.5 py-1 text-xs font-black text-white">جدید</span>}
        </div>
        {p.stock === 0 && <span className="absolute bottom-3 left-3 rounded-full bg-ink/80 px-2.5 py-1 text-xs font-bold text-white">ناموجود</span>}
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-3 sm:p-4">
        <span className="text-[11px] font-semibold text-muted">{categoryMap[p.category].name} · {p.brand}</span>
        <Link href={`/products/${p.id}`} className="line-clamp-2 text-sm font-bold leading-6 hover:text-coral sm:text-base">{p.title}</Link>
        <Rating value={p.rating} count={p.reviewCount} />
        <div className="mt-auto flex items-end justify-between gap-2 pt-2">
          <Price price={p.price} discount={p.discount} />
          <button
            onClick={() => add(p.id)}
            disabled={p.stock === 0}
            aria-label="افزودن به سبد"
            className={`grid size-9 shrink-0 place-items-center rounded-full text-white transition active:scale-90 disabled:opacity-30 sm:size-10 ${fun ? "bg-coral ring-2 ring-ink shadow-[0_3px_0_var(--color-ink)] hover:animate-jelly" : "bg-ink hover:bg-coral"}`}
          >
            <ShoppingBag className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
