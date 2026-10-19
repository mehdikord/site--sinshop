"use client";

import { motion } from "motion/react";

/** Cartoon teddy bear that waves and blinks. Pure SVG + motion, no images. */
export default function Mascot({ className = "", message }: { className?: string; message?: string }) {
  return (
    <div className={`relative ${className}`}>
      {message && (
        <motion.div
          initial={{ opacity: 0, scale: 0.4, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.6, type: "spring", bounce: 0.6 }}
          className="absolute -top-14 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-2xl bg-white px-4 py-2 text-sm font-black text-ink shadow-soft"
        >
          {message}
          <span className="absolute -bottom-2 left-1/2 size-4 -translate-x-1/2 rotate-45 bg-white" />
        </motion.div>
      )}
      <motion.svg
        viewBox="0 0 220 240"
        className="h-full w-full drop-shadow-[0_18px_20px_rgba(43,33,64,0.18)]"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* body */}
        <ellipse cx="110" cy="182" rx="66" ry="52" fill="#c98a5a" />
        <ellipse cx="110" cy="190" rx="40" ry="32" fill="#f3d2b3" />
        <circle cx="110" cy="188" r="10" fill="#ff6f61" opacity=".9" />
        {/* feet */}
        <ellipse cx="70" cy="228" rx="24" ry="12" fill="#b57749" />
        <ellipse cx="150" cy="228" rx="24" ry="12" fill="#b57749" />
        {/* left arm (static) */}
        <ellipse cx="54" cy="176" rx="16" ry="28" fill="#b57749" transform="rotate(20 54 176)" />
        {/* waving right arm */}
        <motion.g
          style={{ transformOrigin: "160px 160px" }}
          animate={{ rotate: [0, -38, 0, -38, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.4, ease: "easeInOut" }}
        >
          <ellipse cx="174" cy="134" rx="16" ry="30" fill="#b57749" transform="rotate(-30 174 134)" />
        </motion.g>
        {/* ears */}
        <circle cx="52" cy="46" r="26" fill="#c98a5a" />
        <circle cx="52" cy="46" r="13" fill="#f3d2b3" />
        <circle cx="168" cy="46" r="26" fill="#c98a5a" />
        <circle cx="168" cy="46" r="13" fill="#f3d2b3" />
        {/* head */}
        <ellipse cx="110" cy="90" rx="72" ry="64" fill="#c98a5a" />
        <ellipse cx="110" cy="112" rx="34" ry="26" fill="#f3d2b3" />
        {/* eyes with blink */}
        <motion.g
          style={{ transformOrigin: "110px 82px" }}
          animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.9, 0.93, 0.96, 1] }}
        >
          <circle cx="82" cy="82" r="9" fill="#2b2140" />
          <circle cx="138" cy="82" r="9" fill="#2b2140" />
          <circle cx="85" cy="79" r="3" fill="#fff" />
          <circle cx="141" cy="79" r="3" fill="#fff" />
        </motion.g>
        <ellipse cx="110" cy="102" rx="11" ry="8" fill="#2b2140" />
        <path d="M98 118q12 12 24 0" stroke="#2b2140" strokeWidth="4" strokeLinecap="round" fill="none" />
        <circle cx="66" cy="108" r="10" fill="#ff8fa3" opacity=".55" />
        <circle cx="154" cy="108" r="10" fill="#ff8fa3" opacity=".55" />
        {/* bow */}
        <path d="M110 150l-22-12v24zM110 150l22-12v24z" fill="#5cb8ff" />
        <circle cx="110" cy="150" r="7" fill="#3a9be6" />
      </motion.svg>
    </div>
  );
}
