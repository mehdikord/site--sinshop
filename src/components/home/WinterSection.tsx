import Snow from "@/components/effects/Snow";
import { Wave } from "@/components/kids/Doodles";
import KidsHead from "@/components/kids/KidsHead";
import ProductRow from "@/components/product/ProductRow";
import { winter } from "@/lib/catalog";

export default function WinterSection() {
  return (
    <section className="relative mt-10">
      <Wave fill="#cfe9ff" flip className="relative -mb-px" />
      <div className="relative overflow-hidden bg-gradient-to-b from-[#cfe9ff] to-[#e8f4ff] py-14">
        <Snow />
        <div className="pointer-events-none absolute -bottom-6 left-0 right-0 h-16 rounded-[50%] bg-white/80 blur-md" />
        <div className="container-x relative">
          <KidsHead emoji="❄️" kicker="کالکشن زمستانی" title="گرم و نرم برای روزهای سرد" href="/products?q=پتو" color="#5cb8ff" />
          <ProductRow items={winter(8)} fun />
        </div>
      </div>
      <Wave fill="#e8f4ff" className="relative -mt-px" />
    </section>
  );
}
