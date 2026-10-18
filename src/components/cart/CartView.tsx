"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/store/cart";
import { getProduct } from "@/lib/catalog";
import { faNum, finalPrice, toman } from "@/lib/format";
import Summary from "./Summary";

export default function CartView() {
  const { items, setQty, remove, hydrated, count } = useCart();
  if (!hydrated) return <div className="container-x py-20" />;
  if (!items.length)
    return (
      <div className="container-x py-24 text-center">
        <div className="text-6xl">🛒</div>
        <h1 className="mt-4 text-2xl font-black">سبد خرید شما خالی است</h1>
        <p className="mt-2 text-muted">بریم یه چیز خوشگل برای کوچولو پیدا کنیم؟</p>
        <Link href="/products" className="btn-primary mt-6">مشاهده محصولات</Link>
      </div>
    );
  return (
    <div className="container-x py-8">
      <h1 className="mb-6 text-3xl font-black">سبد خرید <span className="text-base font-bold text-muted">({faNum(count)} کالا)</span></h1>
      <div className="grid gap-8 lg:grid-cols-[1fr_22rem]">
        <div className="space-y-3">
          {items.map((it) => {
            const p = getProduct(it.id)!;
            const f = finalPrice(p.price, p.discount);
            return (
              <div key={it.id} className="card flex gap-4 p-4">
                <Link href={`/products/${p.id}`} className="relative size-24 shrink-0 overflow-hidden rounded-2xl sm:size-28">
                  <Image src={p.images[0]} alt={p.title} fill sizes="120px" className="object-cover" />
                </Link>
                <div className="flex flex-1 flex-col">
                  <Link href={`/products/${p.id}`} className="font-bold hover:text-coral">{p.title}</Link>
                  <span className="text-xs text-muted">{p.brand}</span>
                  <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-2">
                    <div className="flex items-center rounded-full bg-cream">
                      <button onClick={() => setQty(it.id, it.qty - 1)} className="grid size-9 place-items-center"><Minus className="size-4" /></button>
                      <span className="w-7 text-center text-sm font-black">{faNum(it.qty)}</span>
                      <button onClick={() => setQty(it.id, Math.min(p.stock, it.qty + 1))} className="grid size-9 place-items-center"><Plus className="size-4" /></button>
                    </div>
                    <div className="text-left">
                      <div className="font-black">{toman(f * it.qty)}</div>
                      {p.discount > 0 && <div className="text-xs text-muted line-through">{toman(p.price * it.qty)}</div>}
                    </div>
                  </div>
                </div>
                <button onClick={() => remove(it.id)} aria-label="حذف" className="self-start text-muted hover:text-coral"><Trash2 className="size-4" /></button>
              </div>
            );
          })}
        </div>
        <Summary>
          <Link href="/checkout" className="btn-primary mt-5 w-full">ادامه و پرداخت</Link>
          <Link href="/products" className="mt-2 block text-center text-xs font-bold text-muted hover:text-coral">ادامه خرید</Link>
        </Summary>
      </div>
    </div>
  );
}
