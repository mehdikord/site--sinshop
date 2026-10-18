"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Sparkles, Truck, ShieldCheck } from "lucide-react";
import BlurText from "@/components/effects/BlurText";
import Blobs from "@/components/effects/Blobs";

const floats = [
  { src: "/products/p23-0.webp", cls: "right-[4%] top-[6%] size-36 sm:size-44 lg:size-56", d: 0 },
  { src: "/products/p11-0.webp", cls: "left-[2%] top-[12%] size-32 sm:size-40 lg:size-52", d: 0.15 },
  { src: "/products/p50-0.webp", cls: "right-[14%] bottom-[2%] size-28 sm:size-36 lg:size-44", d: 0.3 },
  { src: "/products/p1-0.webp", cls: "left-[12%] bottom-[8%] size-28 sm:size-32 lg:size-40", d: 0.45 },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24">
      <Blobs />
      <div className="container-x relative">
        <div className="relative mx-auto min-h-[30rem] sm:min-h-[36rem]">
          {floats.map((f, i) => (
            <motion.div
              key={i}
              className={`absolute ${f.cls} hidden sm:block`}
              initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.5 + f.d, duration: 0.8, type: "spring", bounce: 0.45 }}
            >
              <div className={`relative size-full overflow-hidden rounded-[2rem] shadow-soft ring-4 ring-white ${i % 2 ? "animate-float-slow" : "animate-float"}`}>
                <Image src={f.src} alt="" fill sizes="240px" className="object-cover" priority />
              </div>
            </motion.div>
          ))}

          <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center pt-10 text-center sm:pt-20">
            <motion.span
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-coral shadow-soft"
            >
              <Sparkles className="size-4" /> کالکشن جدید پاییز و زمستان رسید
            </motion.span>
            <h1 className="text-4xl font-black leading-[1.25] sm:text-6xl">
              <BlurText text="سیسمونی لوکس و ساده" /> <br />
              <BlurText text="با سین شاپ" className="text-shine" delay={0.3} />
            </h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-6 max-w-md text-base leading-8 text-muted sm:text-lg">
              انتخاب‌های شیک، ایمن و دوست‌داشتنی برای کوچولوی شما؛ از اکسسوری چوبی تا ست خواب و ظروف کودک.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/products" className="btn-primary">مشاهده محصولات</Link>
              <Link href="/products?deal=1" className="btn-ghost">تخفیف‌های ویژه 🔥</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} className="mt-10 flex flex-wrap justify-center gap-5 text-xs font-semibold text-muted">
              <span className="flex items-center gap-1.5"><Truck className="size-4 text-sky" /> ارسال رایگان بالای ۵ میلیون</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="size-4 text-mint" /> ضمانت اصالت کالا</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
