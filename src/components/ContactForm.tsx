"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  if (sent) return <div className="card p-12 text-center"><div className="text-5xl">💌</div><h3 className="mt-3 text-xl font-black">پیام شما رسید!</h3><p className="mt-2 text-muted">خیلی زود باهاتون تماس می‌گیریم.</p></div>;
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="card space-y-4 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <input required placeholder="نام شما" className="rounded-xl bg-cream px-4 py-3 text-sm outline-none ring-coral focus:ring-2" />
        <input required type="tel" placeholder="شماره تماس" className="rounded-xl bg-cream px-4 py-3 text-sm outline-none ring-coral focus:ring-2" />
      </div>
      <input placeholder="موضوع" className="w-full rounded-xl bg-cream px-4 py-3 text-sm outline-none ring-coral focus:ring-2" />
      <textarea required rows={5} placeholder="پیام شما…" className="w-full rounded-xl bg-cream px-4 py-3 text-sm outline-none ring-coral focus:ring-2" />
      <button className="btn-primary"><Send className="size-4" /> ارسال پیام</button>
    </form>
  );
}
