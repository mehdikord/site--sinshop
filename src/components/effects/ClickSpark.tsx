"use client";

import { useEffect, useRef } from "react";

const COLORS = ["#ff6f61", "#ffd166", "#5cb8ff", "#9be7c4", "#c9b6ff", "#ff8fa3"];

interface Particle { x: number; y: number; vx: number; vy: number; life: number; color: string; size: number; rot: number; vr: number; star: boolean }

/** Confetti burst wherever the visitor clicks (inspired by ReactBits ClickSpark). */
export default function ClickSpark() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let parts: Particle[] = [];
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const drawStar = (s: number) => {
      ctx.beginPath();
      for (let i = 0; i < 10; i++) {
        const r = i % 2 ? s / 2.2 : s;
        const a = (Math.PI / 5) * i;
        ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
      }
      ctx.closePath();
      ctx.fill();
    };

    const tick = () => {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      parts = parts.filter((p) => p.life > 0);
      for (const p of parts) {
        p.x += p.vx; p.y += p.vy; p.vy += 0.18; p.vx *= 0.98; p.rot += p.vr; p.life -= 1;
        ctx.save();
        ctx.globalAlpha = Math.min(1, p.life / 30);
        ctx.translate(p.x, p.y); ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        if (p.star) drawStar(p.size);
        else { ctx.beginPath(); ctx.arc(0, 0, p.size / 1.6, 0, Math.PI * 2); ctx.fill(); }
        ctx.restore();
      }
      raf = parts.length ? requestAnimationFrame(tick) : 0;
    };

    const onClick = (e: PointerEvent) => {
      for (let i = 0; i < 16; i++) {
        const a = (Math.PI * 2 * i) / 16 + Math.random() * 0.4;
        const sp = 3 + Math.random() * 4;
        parts.push({ x: e.clientX, y: e.clientY, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 2, life: 45 + Math.random() * 20, color: COLORS[i % COLORS.length], size: 5 + Math.random() * 5, rot: Math.random() * 6, vr: (Math.random() - 0.5) * 0.3, star: i % 3 === 0 });
      }
      if (!raf) raf = requestAnimationFrame(tick);
    };

    addEventListener("pointerdown", onClick);
    addEventListener("resize", resize);
    return () => { removeEventListener("pointerdown", onClick); removeEventListener("resize", resize); cancelAnimationFrame(raf); };
  }, []);

  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-[100] h-full w-full" />;
}
