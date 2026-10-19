import Marquee from "@/components/effects/Marquee";

const items = [
  "🎈 ارسال رایگان بالای ۵ میلیون",
  "⭐ ضمانت اصالت کالا",
  "🧸 بسته‌بندی هدیه رایگان",
  "🌈 ۷ روز ضمانت بازگشت",
  "🍼 مشاوره رایگان سیسمونی",
  "🚀 ارسال سریع به سراسر ایران",
];

export default function FunRibbon() {
  return (
    <div className="relative z-10 -my-2 overflow-hidden py-6">
      <div className="-mx-[5%] -rotate-2 border-y-[3px] border-ink bg-coral py-3 shadow-[0_6px_0_#2b2140]">
        <Marquee>
          {items.map((t) => (
            <span key={t} className="shrink-0 font-display text-xl text-white sm:text-2xl" dir="rtl">
              {t}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
