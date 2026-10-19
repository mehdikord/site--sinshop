"use client";

import { motion } from "motion/react";

/**
 * Word-by-word bouncy entrance with a jelly squish on hover.
 * Splits on words (not letters) so Persian letters stay joined.
 */
export default function JellyText({ text, className = "", wordClassName = "", delay = 0 }: { text: string; className?: string; wordClassName?: string; delay?: number }) {
  return (
    <span className={className}>
      {text.split(" ").map((w, i) => (
        <motion.span
          key={i}
          className={`inline-block cursor-default ${wordClassName}`}
          initial={{ opacity: 0, y: 60, scale: 0.4, rotate: i % 2 ? 12 : -12 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{ delay: delay + i * 0.12, type: "spring", stiffness: 260, damping: 12 }}
          whileHover={{ scaleX: [1, 1.25, 0.85, 1.1, 1], scaleY: [1, 0.75, 1.15, 0.95, 1], transition: { duration: 0.6 } }}
        >
          {w}
          {" "}
        </motion.span>
      ))}
    </span>
  );
}
