import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import { BannerDuo, BannerWide } from "@/components/home/Banner";
import Perks from "@/components/home/Perks";
import Testimonials from "@/components/home/Testimonials";
import ProductRow from "@/components/product/ProductRow";
import SectionHead from "@/components/ui/SectionHead";
import { hotDeals, popular, winter } from "@/lib/catalog";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <section className="container-x py-10">
        <SectionHead kicker="🔥 تخفیف ویژه" title="تخفیف‌های داغ این هفته" href="/products?deal=1&sort=discount" />
        <ProductRow items={hotDeals(8)} />
      </section>
      <BannerDuo />
      <section className="container-x py-10">
        <SectionHead kicker="⭐ پرطرفدار" title="محبوب‌ترین‌های سین شاپ" href="/products?sort=popular" />
        <ProductRow items={popular(8)} />
      </section>
      <BannerWide />
      <section className="container-x py-10">
        <SectionHead kicker="❄️ زمستان" title="گرم و نرم برای روزهای سرد" href="/products?q=پتو" />
        <ProductRow items={winter(8)} />
      </section>
      <Perks />
      <Testimonials />
    </>
  );
}
