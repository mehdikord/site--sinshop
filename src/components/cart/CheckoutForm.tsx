"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CreditCard, Wallet, Truck, Lock } from "lucide-react";
import { useCart } from "@/store/cart";
import { getProduct } from "@/lib/catalog";
import { finalPrice } from "@/lib/format";
import Summary from "./Summary";

const fields = [
  ["name", "نام و نام خانوادگی", "text"],
  ["phone", "شماره موبایل", "tel"],
  ["city", "شهر", "text"],
  ["postal", "کد پستی", "text"],
];

export default function CheckoutForm() {
  const c = useCart();
  const router = useRouter();
  const [pay, setPay] = useState("online");
  const [busy, setBusy] = useState(false);
  const [f, setF] = useState<Record<string, string>>({ name: "", phone: "", city: "", postal: "", address: "" });

  if (!c.hydrated) return <div className="container-x py-20" />;
  if (!c.items.length) { router.replace("/cart"); return null; }

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const order = {
      id: `SS-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString("fa-IR"),
      customer: f,
      pay,
      items: c.items.map((it) => { const p = getProduct(it.id)!; return { title: p.title, qty: it.qty, price: p.price, final: finalPrice(p.price, p.discount) }; }),
      subtotal: c.subtotal, discount: c.discountTotal, shipping: c.shipping, tax: c.tax, total: c.total,
    };
    try { sessionStorage.setItem("sinshop-order", JSON.stringify(order)); } catch {}
    setTimeout(() => { c.clear(); router.push("/checkout/success"); }, 1200);
  };

  return (
    <div className="container-x py-8">
      <h1 className="mb-6 text-3xl font-black">تکمیل خرید</h1>
      <form onSubmit={submit} className="grid gap-8 lg:grid-cols-[1fr_22rem]">
        <div className="space-y-6">
          <div className="card p-6">
            <h3 className="mb-4 flex items-center gap-2 font-black"><Truck className="size-5 text-sky" /> اطلاعات ارسال</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {fields.map(([k, l, t]) => (
                <label key={k} className="text-sm">
                  <span className="mb-1 block font-bold">{l}</span>
                  <input required type={t} value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} className="w-full rounded-xl bg-cream px-3 py-2.5 outline-none ring-coral focus:ring-2" />
                </label>
              ))}
              <label className="text-sm sm:col-span-2">
                <span className="mb-1 block font-bold">آدرس کامل</span>
                <textarea required rows={3} value={f.address} onChange={(e) => setF({ ...f, address: e.target.value })} className="w-full rounded-xl bg-cream px-3 py-2.5 outline-none ring-coral focus:ring-2" />
              </label>
            </div>
          </div>
          <div className="card p-6">
            <h3 className="mb-4 flex items-center gap-2 font-black"><CreditCard className="size-5 text-coral" /> روش پرداخت</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {[["online", "پرداخت آنلاین", "درگاه بانکی امن (شبیه‌سازی)", CreditCard], ["cod", "پرداخت در محل", "فقط تهران", Wallet]].map(([k, t, d, I]) => {
                const Icon = I as typeof CreditCard;
                return (
                  <button type="button" key={k as string} onClick={() => setPay(k as string)} className={`flex items-center gap-3 rounded-2xl p-4 text-right ring-2 transition ${pay === k ? "ring-coral bg-blush/40" : "ring-ink/5 hover:ring-ink/20"}`}>
                    <Icon className="size-6 text-coral" />
                    <span><span className="block text-sm font-black">{t as string}</span><span className="text-xs text-muted">{d as string}</span></span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <Summary>
          <button disabled={busy} className="btn-primary mt-5 w-full"><Lock className="size-4" /> {busy ? "در حال پردازش…" : "پرداخت و ثبت سفارش"}</button>
          <p className="mt-3 text-center text-[11px] text-muted">این یک پرداخت آزمایشی است و مبلغی کسر نمی‌شود.</p>
        </Summary>
      </form>
    </div>
  );
}
