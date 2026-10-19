"use client";

import { motion } from "motion/react";

const perks = [
  { e: "🚚", t: "ارسال سریع", d: "۱ تا ۳ روز کاری به سراسر کشور", bg: "bg-[#d7efff]" },
  { e: "🛡️", t: "ضمانت اصالت", d: "کالای اورجینال با تضمین کیفیت", bg: "bg-[#d4f5e6]" },
  { e: "🎁", t: "بسته‌بندی هدیه", d: "رایگان، با کارت تبریک", bg: "bg-[#ffd9e6]" },
  { e: "💬", t: "پشتیبانی مهربون", d: "همه‌روزه ۱۰ تا ۲۱", bg: "bg-[#fff1c2]" },
];

export default function Perks() {
  return (
    <section className="container-x py-12">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {perks.map((p, i) => (
          <motion.div
            key={p.t}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.55, delay: i * 0.1 }}
            whileHover={{ y: -6, rotate: i % 2 ? 2 : -2 }}
            className={`toy flex items-center gap-4 ${p.bg} p-5`}
          >
            <span className="grid size-14 shrink-0 animate-bob place-items-center rounded-2xl bg-white text-3xl ring-[3px] ring-ink" style={{ animationDelay: `${-i * 0.6}s` }}>
              {p.e}
            </span>
            <div>
              <div className="font-display text-xl">{p.t}</div>
              <div className="text-xs font-semibold text-ink/70">{p.d}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
