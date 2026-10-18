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

export default function ProductCard({ p, priority = false }: { p: Product; priority?: boolean }) {
  const { add } = useCart();
  return (
    <div className="group card relative flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-pop">
      <Link href={`/products/${p.id}`} className="relative block aspect-square overflow-hidden bg-cream">
        <Image src={p.images[0]} alt={p.title} fill sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw" priority={priority} className="object-cover transition duration-700 group-hover:scale-110" />
        <div className="absolute top-3 right-3 flex flex-col gap-1">
          {p.discount > 0 && <span className="rounded-full bg-coral px-2.5 py-1 text-xs font-black text-white">٪{faNum(p.discount)}</span>}
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
            className="grid size-9 shrink-0 place-items-center rounded-full sm:size-10 bg-ink text-white transition hover:bg-coral active:scale-90 disabled:opacity-30"
          >
            <ShoppingBag className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
