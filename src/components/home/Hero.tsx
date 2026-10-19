"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "motion/react";
import { ShoppingBag, Sparkles } from "lucide-react";
import JellyText from "@/components/effects/JellyText";
import Mascot from "@/components/kids/Mascot";
import { Balloon, Cloud, Heart, Star, Sun, Wave } from "@/components/kids/Doodles";

const bubbles = [
  { src: "/products/p40-0.webp", cls: "right-[3%] top-[8%] size-40 lg:size-52", ring: "ring-coral", depth: 30, d: 0.2, r: -6 },
  { src: "/products/p43-0.webp", cls: "left-[3%] top-[10%] size-36 lg:size-48", ring: "ring-sky", depth: -26, d: 0.35, r: 8 },
  { src: "/products/p6-0.webp", cls: "right-[15%] bottom-[16%] size-28 lg:size-36", ring: "ring-sun", depth: 18, d: 0.5, r: 10 },
  { src: "/products/p26-0.webp", cls: "left-[24%] bottom-[6%] size-28 lg:size-32", ring: "ring-mint", depth: -20, d: 0.65, r: -8 },
];

const mobileBubbles = ["/products/p40-0.webp", "/products/p43-0.webp"];

const balloons = [
  { color: "#ff6f61", left: "6%", delay: "0s", dur: "16s", size: "w-12" },
  { color: "#5cb8ff", left: "22%", delay: "-6s", dur: "20s", size: "w-10" },
  { color: "#ffd166", left: "78%", delay: "-3s", dur: "18s", size: "w-14" },
  { color: "#c9b6ff", left: "92%", delay: "-11s", dur: "22s", size: "w-10" },
];

function Parallax({ mx, my, depth, className, children }: { mx: MotionValue<number>; my: MotionValue<number>; depth: number; className?: string; children: React.ReactNode }) {
  const x = useTransform(mx, (v) => v * depth);
  const y = useTransform(my, (v) => v * depth);
  return <motion.div style={{ x, y }} className={className}>{children}</motion.div>;
}

function AnimatedRainbow({ className }: { className?: string }) {
  const c = ["#ff6f61", "#ffb627", "#ffd166", "#9be7c4", "#5cb8ff", "#c9b6ff"];
  return (
    <svg viewBox="0 0 400 210" fill="none" className={className} aria-hidden>
      {c.map((col, i) => (
        <motion.path
          key={col}
          d={`M${20 + i * 18} 200a${180 - i * 18} ${180 - i * 18} 0 0 1 ${360 - i * 36} 0`}
          stroke={col}
          strokeWidth="18"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.2 + i * 0.12, duration: 1.1, ease: "easeOut" }}
        />
      ))}
    </svg>
  );
}

export default function Hero() {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 60, damping: 15 });
  const my = useSpring(rawY, { stiffness: 60, damping: 15 });

  return (
    <section
      className="relative -mt-18 overflow-hidden bg-gradient-to-b from-[#bfe4ff] via-[#e2f2ff] to-cream pt-18"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        rawX.set((e.clientX - r.left) / r.width - 0.5);
        rawY.set((e.clientY - r.top) / r.height - 0.5);
      }}
    >
      {/* sky layer */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Parallax mx={mx} my={my} depth={-14} className="absolute left-[4%] top-20 w-24 sm:w-32 lg:left-[28%] lg:top-16">
          <motion.div initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}>
            <Sun className="w-full animate-bob" />
          </motion.div>
        </Parallax>
        <Cloud className="absolute top-24 w-40 animate-drift opacity-90" style={{ animationDuration: "70s", animationDelay: "-20s" }} />
        <Cloud className="absolute top-52 w-28 animate-drift opacity-80" style={{ animationDuration: "55s", animationDelay: "-40s" }} />
        <Cloud className="absolute top-8 w-56 animate-drift opacity-70" style={{ animationDuration: "90s", animationDelay: "-5s" }} />
        <Cloud className="absolute bottom-40 w-36 animate-drift opacity-80" style={{ animationDuration: "80s", animationDelay: "-60s" }} />
        {balloons.map((b, i) => (
          <div key={i} className="absolute -bottom-48 animate-rise" style={{ left: b.left, animationDelay: b.delay, animationDuration: b.dur }}>
            <Balloon color={b.color} className={`${b.size} animate-sway`} />
          </div>
        ))}
        {[
          ["right-[38%] top-28", "#ffd166", "w-6", "0s"],
          ["left-[40%] top-40", "#ff8fa3", "w-4", "-1s"],
          ["right-[8%] top-[55%]", "#c9b6ff", "w-5", "-0.5s"],
          ["left-[8%] top-[58%]", "#ffd166", "w-7", "-1.6s"],
          ["right-[45%] bottom-32", "#9be7c4", "w-5", "-0.8s"],
        ].map(([pos, color, w, delay], i) => (
          <Star key={i} color={color} className={`absolute ${pos} ${w} animate-twinkle`} style={{ animationDelay: delay }} />
        ))}
      </div>

      <div className="container-x relative">
        <div className="relative mx-auto pb-10 md:min-h-[42rem] md:pb-0">
          {/* product bubbles */}
          {bubbles.map((b, i) => (
            <Parallax key={i} mx={mx} my={my} depth={b.depth} className={`absolute ${b.cls} hidden md:block`}>
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: b.r * 3 }}
                animate={{ opacity: 1, scale: 1, rotate: b.r }}
                whileHover={{ scale: 1.08, rotate: 0 }}
                transition={{ delay: 0.6 + b.d, type: "spring", bounce: 0.55 }}
                className="size-full"
              >
                <div className={`relative size-full overflow-hidden rounded-full bg-white ring-[6px] ${b.ring} shadow-[0_10px_0_rgba(43,33,64,0.15)] ${i % 2 ? "animate-float-slow" : "animate-float"}`}>
                  <Image src={b.src} alt="" fill sizes="220px" className="object-cover" priority />
                </div>
              </motion.div>
            </Parallax>
          ))}
          <Heart color="#ff8fa3" className="absolute right-[30%] top-[14%] hidden w-8 animate-bob md:block" style={{ animationDelay: "-1s" }} />
          <Heart color="#ff6f61" className="absolute left-[30%] bottom-[30%] hidden w-6 animate-bob md:block" />

          <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center pt-14 text-center sm:pt-20">
            <AnimatedRainbow className="pointer-events-none absolute -top-2 left-1/2 w-[22rem] -translate-x-1/2 opacity-25 sm:w-[34rem]" />
            <motion.span
              initial={{ opacity: 0, y: -20, rotate: -8 }}
              animate={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{ type: "spring", bounce: 0.6 }}
              className="toy relative mb-6 inline-flex items-center gap-2 bg-sun px-4 py-2 text-xs font-black text-ink"
            >
              <Sparkles className="size-4" /> کالکشن جدید پاییز و زمستان رسید!
            </motion.span>
            <h1 className="relative font-display text-[2.15rem] leading-[1.4] text-ink sm:text-7xl">
              <JellyText text="سیسمونی لوکس و ساده" />
              <br />
              <span className="relative inline-block">
                <JellyText text="با سین شاپ" delay={0.5} wordClassName="text-coral [text-shadow:0_4px_0_#2b2140]" />
                <svg viewBox="0 0 300 24" className="absolute -bottom-3 left-0 h-5 w-full" fill="none" aria-hidden>
                  <motion.path
                    d="M4 14C40 4 60 4 100 13s60 9 100 0 60-9 96 0"
                    stroke="#ffd166"
                    strokeWidth="8"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  />
                </svg>
              </span>
            </h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="mt-7 max-w-md text-base font-semibold leading-8 text-ink/70 sm:text-lg">
              دنیای رنگی کوچولوها اینجاست! 🎈 از اکسسوری چوبی تا ست خواب و ظروف کودک؛ شیک، ایمن و دوست‌داشتنی.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, type: "spring" }} className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/products" className="toy toy-hover inline-flex items-center gap-2 bg-coral px-7 py-3.5 font-black text-white">
                <ShoppingBag className="size-5" /> بزن بریم خرید!
              </Link>
              <Link href="/products?deal=1" className="toy toy-hover inline-flex items-center gap-2 bg-white px-7 py-3.5 font-black text-ink">
                تخفیف‌های ویژه 🔥
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, type: "spring", bounce: 0.4 }}
            className="relative z-10 mt-20 flex items-end justify-center gap-3 md:absolute md:bottom-4 md:left-[6%] md:mt-0 md:block"
          >
            <div className="relative size-20 shrink-0 animate-float overflow-hidden rounded-full bg-white ring-4 ring-coral md:hidden">
              <Image src={mobileBubbles[0]} alt="" fill sizes="80px" className="object-cover" />
            </div>
            <Mascot message="سلام کوچولو! 👋" className="w-28 sm:w-32 md:w-36 lg:w-44" />
            <div className="relative size-20 shrink-0 animate-float-slow overflow-hidden rounded-full bg-white ring-4 ring-sky md:hidden">
              <Image src={mobileBubbles[1]} alt="" fill sizes="80px" className="object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
      <Wave fill="#fff8f1" className="relative -mb-px" />
    </section>
  );
}
