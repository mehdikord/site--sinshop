import Link from "next/link";
import { categories } from "@/data/categories";
import Reveal from "@/components/effects/Reveal";
import SectionHead from "@/components/ui/SectionHead";

export default function Categories() {
  return (
    <section className="container-x py-10">
      <SectionHead kicker="دسته‌بندی" title="هر چیزی که کوچولو لازم داره" href="/products" />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {categories.map((c, i) => (
          <Reveal key={c.slug} delay={i * 0.05}>
            <Link href={`/products?cat=${c.slug}`} className={`group flex flex-col items-center gap-2 rounded-3xl ${c.color} p-5 text-center transition hover:-translate-y-1 hover:shadow-soft`}>
              <span className="text-4xl transition group-hover:scale-125 group-hover:animate-wiggle">{c.emoji}</span>
              <span className="text-sm font-black">{c.name}</span>
              <span className="text-[11px] text-ink/60">{c.tagline}</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
