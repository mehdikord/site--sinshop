"use client";

import { toman } from "@/lib/format";
import { useCart } from "@/store/cart";
import { site } from "@/data/site";

export default function Summary({ children }: { children?: React.ReactNode }) {
  const c = useCart();
  const rows = [
    ["جمع کالاها", toman(c.subtotal), ""],
    ["تخفیف", `− ${toman(c.discountTotal)}`, "text-coral"],
    ["هزینه ارسال", c.shipping ? toman(c.shipping) : "رایگان", c.shipping ? "" : "text-mint"],
    ["مالیات ارزش افزوده (۱۰٪)", toman(c.tax), ""],
  ];
  return (
    <div className="card sticky top-24 p-6">
      <h3 className="mb-4 text-lg font-black">خلاصه سفارش</h3>
      <div className="space-y-3 text-sm">
        {rows.map(([k, v, cls]) => (
          <div key={k} className="flex justify-between"><span className="text-muted">{k}</span><span className={`font-bold ${cls}`}>{v}</span></div>
        ))}
        <div className="flex justify-between border-t border-dashed border-ink/10 pt-3 text-base"><span className="font-black">مبلغ قابل پرداخت</span><span className="font-black text-coral">{toman(c.total)}</span></div>
      </div>
      {c.shipping > 0 && <p className="mt-3 rounded-xl bg-sun/30 p-2 text-[11px]">با خرید {toman(site.shippingFree - (c.subtotal - c.discountTotal))} بیشتر، ارسال رایگان می‌شود 🎁</p>}
      {children}
    </div>
  );
}
