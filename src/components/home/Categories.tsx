"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { categories } from "@/data/categories";
import KidsHead from "@/components/kids/KidsHead";
import { Star } from "@/components/kids/Doodles";

const blocks = ["bg-[#ffe1dc]", "bg-[#fff1c2]", "bg-[#d7efff]", "bg-[#e6dcff]", "bg-[#d4f5e6]", "bg-[#ffd9e6]", "bg-[#ffe7c7]", "bg-[#e0f7d4]"];

export default function Categories() {
  return (
    <section className="container-x relative py-14">
      <Star color="#c9b6ff" className="absolute left-6 top-10 hidden w-10 animate-twinkle sm:block" />
      <KidsHead emoji="🧺" kicker="دسته‌بندی‌ها" title="هر چیزی که کوچولو لازم داره" href="/products" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8 lg:gap-3">
        {categories.map((c, i) => (
          <motion.div
            key={c.slug}
            initial={{ opacity: 0, y: 60, rotate: i % 2 ? 10 : -10 }}
            whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 2 : -2 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", bounce: 0.5, delay: i * 0.06 }}
            whileHover={{ rotate: 0, y: -8, scale: 1.04 }}
            whileTap={{ scale: 0.92 }}
          >
            <Link href={`/products?cat=${c.slug}`} className={`toy group flex flex-col items-center gap-2 ${blocks[i]} px-3 py-5 text-center`}>
              <span className="grid size-16 place-items-center rounded-full bg-white text-4xl ring-[3px] ring-ink transition group-hover:animate-jelly">
                {c.emoji}
              </span>
              <span className="text-sm font-black">{c.name}</span>
              <span className="text-[11px] font-semibold text-ink/60">{c.tagline}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
