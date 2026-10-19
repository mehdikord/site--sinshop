import Countdown from "@/components/effects/Countdown";
import ProductRow from "@/components/product/ProductRow";
import Reveal from "@/components/effects/Reveal";
import Link from "next/link";
import { hotDeals } from "@/lib/catalog";
import { Star } from "@/components/kids/Doodles";

export default function Deals() {
  return (
    <section className="container-x py-10">
      <Reveal>
        <div className="toy relative overflow-hidden bg-candy p-5 sm:p-8">
          <Star color="#ffd166" className="absolute -left-4 -top-4 w-20 animate-[spin_12s_linear_infinite]" />
          <Star color="#fff" className="absolute bottom-10 right-4 w-8 animate-twinkle" />
          <div className="relative mb-8 flex flex-wrap items-center justify-between gap-5">
            <div>
              <span className="inline-block -rotate-3 rounded-full bg-ink px-3 py-1 text-xs font-black text-sun">⚡ فقط تا نیمه‌شب</span>
              <h2 className="mt-3 font-display text-4xl text-white [text-shadow:0_4px_0_#2b2140] sm:text-6xl">تخفیف‌های داغ 🔥</h2>
              <p className="mt-2 font-bold text-white/90">تا ۴۰٪ تخفیف روی محبوب‌ترین‌ها، عجله کن!</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Countdown />
              <Link href="/products?deal=1&sort=discount" className="toy toy-hover bg-sun px-5 py-2 text-sm font-black text-ink">همه تخفیف‌ها</Link>
            </div>
          </div>
          <div className="relative">
            <ProductRow items={hotDeals(8)} fun />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
