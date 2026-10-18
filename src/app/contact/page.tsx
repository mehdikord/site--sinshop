import type { Metadata } from "next";
import { AtSign as Instagram, Mail, MapPin, Phone, Clock } from "lucide-react";
import { site } from "@/data/site";
import Reveal from "@/components/effects/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "تماس با ما" };

const ways = [
  { I: Phone, t: "تلفن", v: site.phone, h: `tel:${site.phoneRaw}` },
  { I: Mail, t: "ایمیل", v: site.email, h: `mailto:${site.email}` },
  { I: Instagram, t: "اینستاگرام", v: `@${site.instagram}`, h: `https://instagram.com/${site.instagram}` },
  { I: Clock, t: "ساعت پاسخگویی", v: site.hours, h: "" },
  { I: MapPin, t: "آدرس", v: site.address, h: "" },
];

export default function Contact() {
  return (
    <div className="container-x py-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-black sm:text-5xl">تماس با ما</h1>
        <p className="mt-3 text-muted">سوال، پیشنهاد یا مشاوره سیسمونی؟ خوشحال می‌شیم بشنویم.</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[22rem_1fr]">
        <div className="space-y-3">
          {ways.map((w, i) => (
            <Reveal key={w.t} delay={i * 0.06}>
              <a href={w.h || undefined} className="card flex items-center gap-4 p-4 transition hover:-translate-y-0.5">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-sky/20 text-sky-dark"><w.I className="size-5" /></span>
                <span><span className="block text-xs text-muted">{w.t}</span><span className="text-sm font-bold">{w.v}</span></span>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}><ContactForm /></Reveal>
      </div>
    </div>
  );
}
