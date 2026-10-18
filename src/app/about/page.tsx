import Image from "next/image";
import type { Metadata } from "next";
import Reveal from "@/components/effects/Reveal";
import { faNum } from "@/lib/format";

export const metadata: Metadata = { title: "درباره ما" };

const stats = [["+۵۰۰۰", "مشتری خوشحال"], ["+۵۰", "برند منتخب"], ["۷", "روز ضمانت بازگشت"], ["۲۴", "ساعته ارسال تهران"]];

export default function About() {
  return (
    <div className="container-x py-10">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-blush/60 p-8 sm:p-14">
          <div className="max-w-xl">
            <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-coral">درباره سین شاپ</span>
            <h1 className="mt-4 text-3xl font-black leading-snug sm:text-5xl">ما عاشق لحظه‌های کوچکِ بزرگ هستیم</h1>
            <p className="mt-5 leading-8 text-ink/80">سین شاپ از یک علاقه‌ی ساده شروع شد: پیدا کردن وسایلی برای کودک که هم زیبا باشند، هم ایمن و هم ماندگار. امروز با گلچینی از بهترین برندهای دنیا، کنار شماییم تا سیسمونی و اتاق کوچولوی‌تان را با سلیقه و بدون شلوغی بچینید.</p>
          </div>
        </div>
      </Reveal>
      <div className="mt-6 grid gap-4 sm:grid-cols-4">
        {stats.map(([n, l], i) => (
          <Reveal key={l} delay={i * 0.08}><div className="card p-6 text-center"><div className="text-3xl font-black text-coral">{faNum(n)}</div><div className="mt-1 text-sm text-muted">{l}</div></div></Reveal>
        ))}
      </div>
      <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
        <Reveal><div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem]"><Image src="/products/p53-0.webp" alt="سین شاپ" fill sizes="50vw" className="object-cover" /></div></Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-2xl font-black">چرا سین شاپ؟</h2>
          <ul className="mt-5 space-y-4 leading-7 text-ink/80">
            <li>🧸 <b>انتخاب‌شده با وسواس:</b> هر محصول قبل از ورود به فروشگاه از نظر ایمنی و کیفیت بررسی می‌شود.</li>
            <li>🎨 <b>سلیقه‌ی مینیمال:</b> رنگ‌های آرام و طراحی ساده که با هر دکوری هماهنگ است.</li>
            <li>🚚 <b>ارسال سریع و بسته‌بندی هدیه:</b> سفارش شما با عشق بسته‌بندی و ارسال می‌شود.</li>
            <li>💬 <b>مشاوره رایگان سیسمونی:</b> تیم ما کنار شماست تا لیست سیسمونی را کامل کنید.</li>
          </ul>
        </Reveal>
      </div>
    </div>
  );
}
