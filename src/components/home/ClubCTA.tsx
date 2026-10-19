"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Balloon, Heart, Star } from "@/components/kids/Doodles";

export default function ClubCTA() {
  const [done, setDone] = useState(false);
  return (
    <section className="container-x py-12">
      <div className="toy relative overflow-hidden bg-sun px-6 py-14 text-center sm:px-14">
        <div className="bg-dots pointer-events-none absolute inset-0 opacity-60" />
        <Balloon color="#ff6f61" className="absolute -bottom-6 right-6 w-14 animate-sway sm:w-20" />
        <Balloon color="#5cb8ff" className="absolute -bottom-10 right-24 hidden w-12 animate-sway sm:block" style={{ animationDelay: "-1.5s" }} />
        <Balloon color="#c9b6ff" className="absolute -bottom-4 left-8 w-14 animate-sway sm:w-16" style={{ animationDelay: "-.8s" }} />
        <Star color="#fff" className="absolute left-[20%] top-8 w-8 animate-twinkle" />
        <Heart color="#ff6f61" className="absolute right-[22%] top-10 w-8 animate-bob" />
        <div className="relative mx-auto max-w-xl">
          <h2 className="font-display text-4xl text-ink sm:text-5xl">به باشگاه کوچولوها بپیوند! 🎉</h2>
          <p className="mt-3 font-semibold text-ink/75">اولین نفری باش که از تخفیف‌ها و کالکشن‌های جدید باخبر می‌شه. یه کد ۱۰٪ تخفیف هم هدیه می‌گیری!</p>
          {done ? (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.6 }} className="toy mx-auto mt-7 inline-block bg-white px-6 py-4 font-black">
              کد تخفیف شما: <span className="font-display text-2xl text-coral" dir="ltr">SIN10</span> 🎁
            </motion.div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row">
              <input required type="tel" placeholder="شماره موبایل" className="toy flex-1 bg-white px-5 py-3 text-sm font-bold outline-none" />
              <button className="toy toy-hover bg-coral px-6 py-3 font-black text-white">عضو می‌شم!</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
