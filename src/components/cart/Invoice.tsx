"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Printer } from "lucide-react";
import { faNum, toman } from "@/lib/format";
import { site } from "@/data/site";

interface Order {
  id: string; date: string; pay: string;
  customer: Record<string, string>;
  items: { title: string; qty: number; price: number; final: number }[];
  subtotal: number; discount: number; shipping: number; tax: number; total: number;
}

export default function Invoice() {
  const [o] = useState<Order | null>(() => {
    if (typeof window === "undefined") return null;
    try { const r = sessionStorage.getItem("sinshop-order"); return r ? (JSON.parse(r) as Order) : null; } catch { return null; }
  });
  const hydrated = useSyncExternalStore(() => () => {}, () => true, () => false);
  if (!hydrated) return <div className="container-x py-20" />;
  if (!o)
    return (
      <div className="container-x py-24 text-center">
        <h1 className="text-2xl font-black">سفارشی یافت نشد</h1>
        <Link href="/products" className="btn-primary mt-6">بازگشت به فروشگاه</Link>
      </div>
    );
  return (
    <div className="container-x max-w-3xl py-10">
      <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", bounce: 0.5 }} className="mb-8 text-center">
        <CheckCircle2 className="mx-auto size-16 text-mint" />
        <h1 className="mt-3 text-3xl font-black">سفارش شما ثبت شد 🎉</h1>
        <p className="mt-2 text-muted">ممنون {o.customer.name}! سفارش به‌زودی آماده و ارسال می‌شود.</p>
      </motion.div>
      <div className="card p-6 sm:p-8 print:shadow-none">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4 border-b border-dashed border-ink/10 pb-5">
          <div>
            <div className="text-lg font-black">{site.name} — فاکتور فروش</div>
            <div className="text-xs text-muted">{site.address}</div>
          </div>
          <div className="text-left text-sm">
            <div>شماره سفارش: <b dir="ltr">{o.id}</b></div>
            <div>تاریخ: {o.date}</div>
            <div>پرداخت: {o.pay === "online" ? "آنلاین" : "در محل"}</div>
          </div>
        </div>
        <div className="mb-6 grid gap-1 text-sm sm:grid-cols-2">
          <div><span className="text-muted">گیرنده: </span>{o.customer.name} — {o.customer.phone}</div>
          <div><span className="text-muted">آدرس: </span>{o.customer.city}، {o.customer.address}</div>
        </div>
        <table className="w-full text-sm">
          <thead><tr className="border-b border-ink/10 text-muted"><th className="py-2 text-right font-bold">کالا</th><th className="py-2 font-bold">تعداد</th><th className="py-2 font-bold">قیمت واحد</th><th className="py-2 text-left font-bold">جمع</th></tr></thead>
          <tbody>
            {o.items.map((it, i) => (
              <tr key={i} className="border-b border-dashed border-ink/5">
                <td className="py-3 font-bold">{it.title}</td>
                <td className="py-3 text-center">{faNum(it.qty)}</td>
                <td className="py-3 text-center">{toman(it.final)}</td>
                <td className="py-3 text-left">{toman(it.final * it.qty)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mr-auto mt-5 max-w-xs space-y-2 text-sm">
          <div className="flex justify-between"><span className="text-muted">جمع کالاها</span><span>{toman(o.subtotal)}</span></div>
          <div className="flex justify-between text-coral"><span>تخفیف</span><span>− {toman(o.discount)}</span></div>
          <div className="flex justify-between"><span className="text-muted">ارسال</span><span>{o.shipping ? toman(o.shipping) : "رایگان"}</span></div>
          <div className="flex justify-between"><span className="text-muted">مالیات</span><span>{toman(o.tax)}</span></div>
          <div className="flex justify-between border-t border-ink/10 pt-2 text-base font-black"><span>مبلغ پرداختی</span><span>{toman(o.total)}</span></div>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-3 print:hidden">
        <button onClick={() => window.print()} className="btn-ghost"><Printer className="size-4" /> چاپ فاکتور</button>
        <Link href="/products" className="btn-primary">ادامه خرید</Link>
      </div>
    </div>
  );
}
