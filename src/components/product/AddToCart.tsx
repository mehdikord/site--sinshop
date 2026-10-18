"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingBag, Check } from "lucide-react";
import { useCart } from "@/store/cart";
import { faNum } from "@/lib/format";

export default function AddToCart({ id, stock }: { id: string; stock: number }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [done, setDone] = useState(false);
  if (stock === 0) return <div className="rounded-2xl bg-ink/5 p-4 text-center font-bold text-muted">این محصول فعلاً ناموجود است</div>;
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex items-center rounded-full bg-white ring-1 ring-ink/10">
        <button onClick={() => setQty(Math.max(1, qty - 1))} className="grid size-11 place-items-center"><Minus className="size-4" /></button>
        <span className="w-8 text-center font-black">{faNum(qty)}</span>
        <button onClick={() => setQty(Math.min(stock, qty + 1))} className="grid size-11 place-items-center"><Plus className="size-4" /></button>
      </div>
      <button
        onClick={() => { add(id, qty); setDone(true); setTimeout(() => setDone(false), 1800); }}
        className={`btn-primary flex-1 ${done ? "!bg-mint !text-ink" : ""}`}
      >
        {done ? <><Check className="size-4" /> به سبد اضافه شد</> : <><ShoppingBag className="size-4" /> افزودن به سبد خرید</>}
      </button>
    </div>
  );
}
