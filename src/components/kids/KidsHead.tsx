"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

export default function KidsHead({
  emoji,
  kicker,
  title,
  href,
  hrefLabel = "همه رو ببین",
  light = false,
  color = "#ffd166",
  center = false,
}: {
  emoji?: string;
  kicker?: string;
  title: string;
  href?: string;
  hrefLabel?: string;
  light?: boolean;
  color?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-10 flex gap-4 ${center ? "flex-col items-center text-center" : "items-end justify-between"}`}>
      <div className={center ? "flex flex-col items-center" : ""}>
        {kicker && (
          <motion.span
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: -4 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.6 }}
            className="toy mb-3 inline-flex items-center gap-1 bg-white px-3 py-1 text-xs font-black text-ink"
          >
            {emoji && <span className="inline-block animate-wiggle text-base">{emoji}</span>} {kicker}
          </motion.span>
        )}
        <h2 className={`relative inline-block font-display text-3xl leading-snug sm:text-5xl ${light ? "text-white" : "text-ink"}`}>
          {title}
          <svg viewBox="0 0 300 24" preserveAspectRatio="none" className="absolute -bottom-3 right-0 h-4 w-full" fill="none" aria-hidden>
            <motion.path
              d="M4 14C40 4 60 4 100 13s60 9 100 0 60-9 96 0"
              stroke={color}
              strokeWidth="7"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
            />
          </svg>
        </h2>
      </div>
      {href && (
        <Link
          href={href}
          className={`toy toy-hover group hidden shrink-0 items-center gap-1 px-4 py-2 text-sm font-black sm:inline-flex ${light ? "bg-white text-ink" : "bg-sun text-ink"}`}
        >
          {hrefLabel} <ArrowLeft className="size-4 transition group-hover:-translate-x-1" />
        </Link>
      )}
    </div>
  );
}
