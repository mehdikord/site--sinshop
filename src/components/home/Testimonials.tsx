import Marquee from "@/components/effects/Marquee";
import KidsHead from "@/components/kids/KidsHead";

const t = [
  { n: "مریم احمدی", c: "سیسمونی دخترم رو کامل از سین شاپ گرفتم. سلیقه‌شون حرف نداره!", e: "👩🏻", bg: "bg-[#ffe1dc]" },
  { n: "نگار رضایی", c: "بسته‌بندی شیک، ارسال سریع، کیفیت عالی. چی بهتر از این؟", e: "👩🏽", bg: "bg-[#d7efff]" },
  { n: "علی محمدی", c: "برای هدیه گرفتم و خیلی استقبال شد. حتما دوباره می‌خرم.", e: "👨🏻", bg: "bg-[#fff1c2]" },
  { n: "شیما یوسفی", c: "پشتیبانی عالی و صبور. قبل از خرید همه سوالاتم رو جواب دادن.", e: "👩🏼", bg: "bg-[#d4f5e6]" },
  { n: "پریسا امینی", c: "دکور اتاق بچه‌مون رو با محصولاتشون چیدیم، عاشقش شدیم 😍", e: "👩🏻‍🦱", bg: "bg-[#e6dcff]" },
];

export default function Testimonials() {
  return (
    <section className="py-14">
      <div className="container-x">
        <KidsHead emoji="💌" kicker="از زبون شما" title="مامان‌ها و باباها چی می‌گن؟" center color="#ff8fa3" />
      </div>
      <Marquee className="py-4">
        {t.map((x, i) => (
          <div key={i} className="w-80 shrink-0 pb-10" dir="rtl">
            <div className={`toy relative ${x.bg} p-5`}>
              <div className="text-sun" dir="ltr">★★★★★</div>
              <p className="mt-2 text-sm font-semibold leading-7">{x.c}</p>
              <span className="absolute -bottom-[14px] right-10 size-6 rotate-45 border-b-[3px] border-r-[3px] border-ink bg-inherit" />
            </div>
            <div className="mr-6 mt-5 flex items-center gap-2">
              <span className="grid size-10 place-items-center rounded-full bg-white text-xl ring-[3px] ring-ink">{x.e}</span>
              <span className="text-sm font-black">{x.n}</span>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
