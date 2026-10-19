import Hero from "@/components/home/Hero";
import FunRibbon from "@/components/home/FunRibbon";
import Categories from "@/components/home/Categories";
import Deals from "@/components/home/Deals";
import { BannerDuo, BannerNight } from "@/components/home/Banner";
import WinterSection from "@/components/home/WinterSection";
import Perks from "@/components/home/Perks";
import Testimonials from "@/components/home/Testimonials";
import ClubCTA from "@/components/home/ClubCTA";
import ProductRow from "@/components/product/ProductRow";
import KidsHead from "@/components/kids/KidsHead";
import ClickSpark from "@/components/effects/ClickSpark";
import { popular } from "@/lib/catalog";

export default function Home() {
  return (
    <>
      <ClickSpark />
      <Hero />
      <FunRibbon />
      <Categories />
      <Deals />
      <BannerDuo />
      <section className="container-x py-12">
        <KidsHead emoji="👑" kicker="پرطرفدار" title="محبوب‌ترین‌های سین شاپ" href="/products?sort=popular" color="#c9b6ff" />
        <ProductRow items={popular(8)} fun />
      </section>
      <BannerNight />
      <WinterSection />
      <Perks />
      <Testimonials />
      <ClubCTA />
    </>
  );
}
