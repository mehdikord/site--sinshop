"use client";

import { useSyncExternalStore } from "react";
import { faNum } from "@/lib/format";

const subscribe = (cb: () => void) => {
  const id = setInterval(cb, 1000);
  return () => clearInterval(id);
};
// Counts down to the next midnight so the "deal" always feels live.
const remaining = () => {
  const now = new Date();
  const end = new Date(now);
  end.setHours(24, 0, 0, 0);
  return Math.floor((end.getTime() - now.getTime()) / 1000);
};

export default function Countdown() {
  const s = useSyncExternalStore(subscribe, remaining, () => -1);
  const parts = s < 0 ? ["--", "--", "--"] : [Math.floor(s / 3600), Math.floor((s % 3600) / 60), s % 60].map((n) => faNum(String(n).padStart(2, "0")));
  const labels = ["ساعت", "دقیقه", "ثانیه"];
  return (
    <div className="flex items-center gap-2" dir="ltr">
      {parts.map((p, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="flex flex-col items-center">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white font-display text-2xl text-coral shadow-[0_4px_0_#2b2140] ring-2 ring-ink sm:h-14 sm:w-14 sm:text-3xl">{p}</span>
            <span className="mt-1 text-[10px] font-bold text-white/90">{labels[i]}</span>
          </div>
          {i < 2 && <span className="-mt-4 font-display text-2xl text-white">:</span>}
        </div>
      ))}
    </div>
  );
}
