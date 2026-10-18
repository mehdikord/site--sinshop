import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/effects/Reveal";

export function BannerDuo() {
  return (
    <section className="container-x grid gap-5 py-10 md:grid-cols-2">
      <Reveal>
        <Link href="/products?cat=sleepwear" className="group relative block h-72 overflow-hidden rounded-[2.5rem] md:h-96">
          <Image src="/products/p40-0.webp" alt="کودک شیک‌پوش" fill sizes="50vw" className="object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
          <div className="absolute bottom-7 right-7 text-white">
            <span className="text-xs font-bold text-sun">ست و پوشاک خواب</span>
            <h3 className="mt-1 text-2xl font-black sm:text-3xl">کودک شیک‌پوش با سین شاپ</h3>
            <span className="mt-3 inline-block rounded-full bg-white px-4 py-2 text-xs font-bold text-ink">خرید کنید</span>
          </div>
        </Link>
      </Reveal>
      <Reveal delay={0.15}>
        <Link href="/products?cat=decor" className="group relative block h-72 overflow-hidden rounded-[2.5rem] md:h-96">
          <Image src="/products/p14-0.webp" alt="دکور اتاق کودک" fill sizes="50vw" className="object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-sky-dark/90 via-sky/20 to-transparent" />
          <div className="absolute bottom-7 right-7 text-white">
            <span className="text-xs font-bold text-sun">دکور اتاق کودک</span>
            <h3 className="mt-1 text-2xl font-black sm:text-3xl">اتاقی که رویا می‌سازد</h3>
            <span className="mt-3 inline-block rounded-full bg-white px-4 py-2 text-xs font-bold text-ink">ببینید</span>
          </div>
        </Link>
      </Reveal>
    </section>
  );
}

export function BannerWide() {
  return (
    <section className="container-x py-10">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink text-white">
          <div className="grid items-center md:grid-cols-2">
            <div className="p-8 sm:p-14">
              <span className="rounded-full bg-sun px-3 py-1 text-xs font-black text-ink">سیسمونی کامل</span>
              <h3 className="mt-5 text-3xl font-black leading-snug sm:text-4xl">سیسمونی لوکس و ساده، <span className="text-sun">با ما</span></h3>
              <p className="mt-4 max-w-md leading-8 text-white/70">از گهواره تا جغجغه؛ همه‌چیز را یک‌جا و با سلیقه انتخاب کنید. مشاوره رایگان سیسمونی هم داریم.</p>
              <Link href="/products?cat=newborn" className="btn-primary mt-7">وسایل نوزاد</Link>
            </div>
            <div className="relative h-72 md:h-[26rem]">
              <Image src="/products/p22-0.webp" alt="گهواره" fill sizes="50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-ink/60 md:to-ink" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
