import { Truck, ShieldCheck, RefreshCcw, Headset } from "lucide-react";
import Reveal from "@/components/effects/Reveal";

const perks = [
  { icon: Truck, t: "ارسال سریع", d: "ارسال به سراسر کشور در ۱ تا ۳ روز کاری" },
  { icon: ShieldCheck, t: "ضمانت اصالت", d: "کالای اورجینال با تضمین کیفیت" },
  { icon: RefreshCcw, t: "۷ روز بازگشت", d: "بدون پرسش، بدون دردسر" },
  { icon: Headset, t: "پشتیبانی دوستانه", d: "همه‌روزه ۱۰ تا ۲۱ پاسخگوی شما" },
];

export default function Perks() {
  return (
    <section className="container-x py-10">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {perks.map((p, i) => (
          <Reveal key={p.t} delay={i * 0.08}>
            <div className="card flex items-center gap-4 p-5">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-blush text-coral"><p.icon className="size-6" /></span>
              <div>
                <div className="font-black">{p.t}</div>
                <div className="text-xs text-muted">{p.d}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
