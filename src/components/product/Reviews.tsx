"use client";

import { useState } from "react";
import { Star, ThumbsUp } from "lucide-react";
import type { Review } from "@/lib/types";
import { faNum } from "@/lib/format";
import Rating from "@/components/ui/Rating";

export default function Reviews({ reviews, rating, count }: { reviews: Review[]; rating: number; count: number }) {
  const [list, setList] = useState(reviews);
  const [form, setForm] = useState({ name: "", rating: 5, body: "" });
  const dist = [5, 4, 3, 2, 1].map((s) => ({ s, n: list.filter((r) => r.rating === s).length }));

  return (
    <div className="grid gap-8 lg:grid-cols-[18rem_1fr]">
      <div className="card h-fit p-6">
        <div className="text-5xl font-black">{faNum(rating)}</div>
        <Rating value={rating} count={count} size="md" />
        <div className="mt-5 space-y-2">
          {dist.map((d) => (
            <div key={d.s} className="flex items-center gap-2 text-xs">
              <span className="w-3">{faNum(d.s)}</span><Star className="size-3 fill-sun text-sun" />
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-ink/5"><div className="h-full rounded-full bg-sun" style={{ width: `${list.length ? (d.n / list.length) * 100 : 0}%` }} /></div>
            </div>
          ))}
        </div>
        <form
          className="mt-6 space-y-3 border-t border-ink/5 pt-5"
          onSubmit={(e) => {
            e.preventDefault();
            if (!form.name || !form.body) return;
            setList([{ id: String(Date.now()), name: form.name, rating: form.rating, title: "نظر شما", body: form.body, date: "همین الان", helpful: 0 }, ...list]);
            setForm({ name: "", rating: 5, body: "" });
          }}
        >
          <div className="text-sm font-black">نظر خود را بنویسید</div>
          <div className="flex gap-1" dir="ltr">
            {[1, 2, 3, 4, 5].map((s) => (
              <button type="button" key={s} onClick={() => setForm({ ...form, rating: s })}><Star className={`size-6 ${s <= form.rating ? "fill-sun text-sun" : "text-ink/15"}`} /></button>
            ))}
          </div>
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="نام شما" className="w-full rounded-xl bg-cream px-3 py-2 text-sm outline-none ring-coral focus:ring-2" />
          <textarea value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value })} placeholder="تجربه‌تان از این محصول…" rows={3} className="w-full rounded-xl bg-cream px-3 py-2 text-sm outline-none ring-coral focus:ring-2" />
          <button className="btn-secondary w-full !py-2.5">ثبت نظر</button>
        </form>
      </div>
      <div className="space-y-4">
        {list.map((r) => (
          <div key={r.id} className="card p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-lilac font-black text-ink">{r.name[0]}</span>
                <div><div className="text-sm font-black">{r.name}</div><div className="text-[11px] text-muted">{r.date}</div></div>
              </div>
              <Rating value={r.rating} />
            </div>
            <div className="mt-3 text-sm font-bold">{r.title}</div>
            <p className="mt-1 text-sm leading-7 text-ink/80">{r.body}</p>
            <button className="mt-3 flex items-center gap-1 text-xs text-muted hover:text-coral"><ThumbsUp className="size-3.5" /> مفید بود ({faNum(r.helpful)})</button>
          </div>
        ))}
      </div>
    </div>
  );
}
