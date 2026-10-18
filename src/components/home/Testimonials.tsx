import { Star } from "lucide-react";
import Marquee from "@/components/effects/Marquee";

const t = [
  { n: "مریم احمدی", c: "سیسمونی دخترم رو کامل از سین شاپ گرفتم. سلیقه‌شون حرف نداره." },
  { n: "نگار رضایی", c: "بسته‌بندی شیک، ارسال سریع، کیفیت عالی. چی بهتر از این؟" },
  { n: "علی محمدی", c: "برای هدیه گرفتم و خیلی استقبال شد. حتما دوباره می‌خرم." },
  { n: "شیما یوسفی", c: "پشتیبانی عالی و صبور. قبل از خرید همه سوالاتم رو جواب دادن." },
  { n: "پریسا امینی", c: "دکور اتاق بچه‌مون رو با محصولاتشون چیدیم، عاشقش شدیم." },
];

export default function Testimonials() {
  return (
    <section className="py-10">
      <div className="container-x mb-6 text-center">
        <h2 className="text-2xl font-black sm:text-3xl">مامان‌ها و باباها چی می‌گن؟</h2>
      </div>
      <Marquee>
        {t.map((x, i) => (
          <div key={i} className="card w-80 shrink-0 p-5" dir="rtl">
            <div className="flex gap-0.5" dir="ltr">{[1,2,3,4,5].map((s) => <Star key={s} className="size-4 fill-sun text-sun" />)}</div>
            <p className="mt-3 text-sm leading-7">{x.c}</p>
            <div className="mt-3 text-xs font-bold text-muted">— {x.n}</div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
