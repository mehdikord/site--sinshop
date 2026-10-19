"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Reveal from "@/components/effects/Reveal";
import { Cloud, Moon, Star } from "@/components/kids/Doodles";

function Sticker({ text, className }: { text: string; className: string }) {
  return (
    <div className={`absolute z-10 grid size-24 place-items-center ${className}`}>
      <Star color="#ffd166" className="absolute inset-0 size-full animate-[spin_14s_linear_infinite]" />
      <span className="relative -rotate-12 text-center font-display text-sm leading-tight text-ink">{text}</span>
    </div>
  );
}

export function BannerDuo() {
  const cards = [
    { href: "/products?cat=sleepwear", img: "/products/p17-0.webp", kicker: "ست و پوشاک خواب", title: "کودک شیک‌پوش با سین شاپ", cta: "خرید کنید", bg: "from-coral/90", sticker: "جدید!" },
    { href: "/products?cat=decor", img: "/products/p23-0.webp", kicker: "دکور اتاق کودک", title: "اتاقی که رویا می‌سازد", cta: "ببینید", bg: "from-sky-dark/90", sticker: "رویایی" },
  ];
  return (
    <section className="container-x grid gap-6 overflow-x-clip py-12 md:grid-cols-2">
      {cards.map((c, i) => (
        <Reveal key={c.href} delay={i * 0.15}>
          <motion.div whileHover={{ rotate: i ? 1 : -1, y: -6 }} transition={{ type: "spring", bounce: 0.5 }} className="relative">
            <Sticker text={c.sticker} className={i ? "-left-3 -top-6" : "-right-3 -top-6"} />
            <Link href={c.href} className="toy group relative block h-80 overflow-hidden md:h-96">
              <Image src={c.img} alt={c.title} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-110" />
              <div className={`absolute inset-0 bg-gradient-to-t ${c.bg} via-transparent to-transparent`} />
              <div className="absolute bottom-6 right-6 left-6 text-white">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-black text-ink">{c.kicker}</span>
                <h3 className="mt-3 font-display text-3xl [text-shadow:0_3px_0_rgba(43,33,64,0.6)] sm:text-4xl">{c.title}</h3>
                <span className="toy mt-4 inline-block bg-sun px-5 py-2 text-sm font-black text-ink transition group-hover:-translate-y-1">{c.cta} ←</span>
              </div>
            </Link>
          </motion.div>
        </Reveal>
      ))}
    </section>
  );
}

const nightStars = [
  ["right-[8%] top-[12%]", "w-5", "0s"], ["right-[30%] top-[20%]", "w-3", "-.6s"], ["right-[44%] top-[8%]", "w-4", "-1.2s"],
  ["right-[20%] bottom-[18%]", "w-4", "-.3s"], ["left-[40%] top-[14%]", "w-3", "-1.8s"], ["left-[46%] bottom-[24%]", "w-5", "-.9s"],
];

export function BannerNight() {
  return (
    <section className="container-x py-12">
      <Reveal>
        <div className="toy relative overflow-hidden bg-gradient-to-br from-[#2b2160] via-[#3b2f7a] to-[#5a3f9e] text-white">
          {nightStars.map(([pos, w, d], i) => (
            <Star key={i} color="#ffe7a3" className={`absolute ${pos} ${w} animate-twinkle`} style={{ animationDelay: d }} />
          ))}
          <Cloud className="absolute -bottom-6 right-[38%] w-40 animate-bob opacity-20" />
          <div className="grid items-center md:grid-cols-2">
            <div className="relative z-10 p-8 sm:p-14">
              <Moon className="mb-4 w-20 animate-bob" />
              <span className="toy inline-block -rotate-2 bg-sun px-3 py-1 text-xs font-black text-ink">سیسمونی کامل</span>
              <h3 className="mt-5 font-display text-[1.9rem] leading-snug sm:text-5xl">
                سیسمونی لوکس و ساده،
                <br />
                <span className="text-sun">با ما</span> ✨
              </h3>
              <p className="mt-4 max-w-md font-semibold leading-8 text-white/75">از گهواره تا جغجغه؛ همه‌چیز را یک‌جا و با سلیقه انتخاب کنید. خواب‌های شیرین از همین‌جا شروع می‌شه 🌙</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/products?cat=newborn" className="toy toy-hover bg-coral px-6 py-3 font-black text-white">وسایل نوزاد</Link>
                <Link href="/contact" className="toy toy-hover bg-white px-6 py-3 font-black text-ink">مشاوره رایگان</Link>
              </div>
            </div>
            <div className="relative flex justify-center p-8 md:p-10">
              <motion.div
                initial={{ scale: 0.6, rotate: -10, opacity: 0 }}
                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.45 }}
                className="blob relative aspect-square w-full max-w-sm overflow-hidden ring-[6px] ring-sun"
              >
                <Image src="/products/p22-0.webp" alt="گهواره" fill sizes="400px" className="object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
