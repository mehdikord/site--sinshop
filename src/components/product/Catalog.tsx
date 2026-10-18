"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SlidersHorizontal, X } from "lucide-react";
import { categories } from "@/data/categories";
import { filterProducts, type SortKey } from "@/lib/catalog";
import type { CategorySlug } from "@/lib/types";
import { faNum, toman } from "@/lib/format";
import ProductCard from "./ProductCard";

const sorts: { k: SortKey; l: string }[] = [
  { k: "popular", l: "پرفروش‌ترین" },
  { k: "newest", l: "جدیدترین" },
  { k: "rating", l: "بالاترین امتیاز" },
  { k: "discount", l: "بیشترین تخفیف" },
  { k: "cheap", l: "ارزان‌ترین" },
  { k: "expensive", l: "گران‌ترین" },
];
const MAX = 80000000;

export default function Catalog() {
  const sp = useSearchParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const cat = (sp.get("cat") || "") as CategorySlug | "";
  const q = sp.get("q") || "";
  const sort = (sp.get("sort") || "popular") as SortKey;
  const deal = sp.get("deal") === "1";
  const inStock = sp.get("stock") === "1";
  const max = Number(sp.get("max")) || 0;
  const list = useMemo(() => filterProducts({ cat, q, sort, deal, inStock, max }), [cat, q, sort, deal, inStock, max]);

  const set = (k: string, v: string | null) => {
    const n = new URLSearchParams(sp.toString());
    if (v) n.set(k, v); else n.delete(k);
    router.push(`/products?${n.toString()}`, { scroll: false });
  };

  const activeCat = categories.find((c) => c.slug === cat);
  const hasFilter = cat || q || deal || inStock || max;

  const Filters = (
    <div className="space-y-6">
      <div>
        <h4 className="mb-3 text-sm font-black">دسته‌بندی</h4>
        <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
          <button onClick={() => set("cat", null)} className={`rounded-full px-3 py-1.5 text-right text-sm ${!cat ? "bg-ink text-white" : "bg-white hover:bg-blush"}`}>همه</button>
          {categories.map((c) => (
            <button key={c.slug} onClick={() => set("cat", c.slug)} className={`rounded-full px-3 py-1.5 text-right text-sm ${cat === c.slug ? "bg-ink text-white" : "bg-white hover:bg-blush"}`}>{c.emoji} {c.name}</button>
          ))}
        </div>
      </div>
      <div>
        <h4 className="mb-3 text-sm font-black">حداکثر قیمت</h4>
        <input type="range" min={1000000} max={MAX} step={500000} value={max || MAX} onChange={(e) => set("max", e.target.value === String(MAX) ? null : e.target.value)} className="w-full" />
        <div className="mt-1 text-xs text-muted">تا {toman(max || MAX)}</div>
      </div>
      <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={deal} onChange={(e) => set("deal", e.target.checked ? "1" : null)} className="accent-coral" /> فقط تخفیف‌دار</label>
      <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={inStock} onChange={(e) => set("stock", e.target.checked ? "1" : null)} className="accent-coral" /> فقط موجود</label>
      {hasFilter ? <button onClick={() => router.push("/products")} className="text-xs font-bold text-coral">حذف همه فیلترها ✕</button> : null}
    </div>
  );

  return (
    <div className="container-x py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-black">{activeCat ? `${activeCat.emoji} ${activeCat.name}` : deal ? "🔥 تخفیف‌های ویژه" : q ? `نتایج جستجو برای «${q}»` : "همه محصولات"}</h1>
        <p className="mt-1 text-sm text-muted">{faNum(list.length)} محصول</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[16rem_1fr]">
        <aside className="hidden lg:block"><div className="card sticky top-24 p-5">{Filters}</div></aside>
        <div>
          <div className="mb-5 flex items-center justify-between gap-3">
            <button onClick={() => setOpen(true)} className="btn-ghost !py-2 lg:hidden"><SlidersHorizontal className="size-4" /> فیلترها</button>
            <div className="no-scrollbar flex gap-2 overflow-x-auto">
              {sorts.map((s) => (
                <button key={s.k} onClick={() => set("sort", s.k)} className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-bold transition ${sort === s.k ? "bg-coral text-white" : "bg-white hover:bg-blush"}`}>{s.l}</button>
              ))}
            </div>
          </div>
          {list.length ? (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {list.map((p, i) => <ProductCard key={p.id} p={p} priority={i < 3} />)}
            </div>
          ) : (
            <div className="card p-16 text-center text-muted">محصولی پیدا نشد 😢</div>
          )}
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm lg:hidden" onClick={() => setOpen(false)}>
          <div className="absolute inset-y-0 right-0 w-80 overflow-y-auto bg-cream p-6" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setOpen(false)} className="mb-4 grid size-9 place-items-center rounded-full bg-white"><X className="size-4" /></button>
            {Filters}
          </div>
        </div>
      )}
    </div>
  );
}
