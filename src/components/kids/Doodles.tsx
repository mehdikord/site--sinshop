import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

export function Cloud(props: P) {
  return (
    <svg viewBox="0 0 200 110" fill="none" {...props}>
      <path
        d="M52 98c-24 0-42-15-42-35 0-18 15-32 34-33 6-17 23-28 42-28 22 0 40 14 45 33 3-1 7-1 10-1 22 0 39 15 39 33s-17 31-39 31H52z"
        fill="white"
      />
      <path d="M52 98h89c22 0 39-13 39-31" stroke="#2b2140" strokeOpacity=".08" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

export function Sun(props: P) {
  return (
    <svg viewBox="0 0 200 200" {...props}>
      <g className="origin-center animate-[spin_24s_linear_infinite]" style={{ transformBox: "fill-box" }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <rect key={i} x="94" y="6" width="12" height="34" rx="6" fill="#ffb627" transform={`rotate(${i * 30} 100 100)`} />
        ))}
      </g>
      <circle cx="100" cy="100" r="56" fill="#ffd166" />
      <circle cx="100" cy="100" r="56" fill="url(#sunShine)" />
      <circle cx="80" cy="94" r="6" fill="#2b2140" />
      <circle cx="120" cy="94" r="6" fill="#2b2140" />
      <circle cx="70" cy="114" r="9" fill="#ff8fa3" opacity=".6" />
      <circle cx="130" cy="114" r="9" fill="#ff8fa3" opacity=".6" />
      <path d="M84 114q16 16 32 0" stroke="#2b2140" strokeWidth="6" strokeLinecap="round" fill="none" />
      <defs>
        <radialGradient id="sunShine" cx=".35" cy=".3" r=".7">
          <stop offset="0" stopColor="#fff" stopOpacity=".55" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function Star({ color = "#ffd166", ...props }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <path
        d="M50 6c4 0 6 3 8 8l8 19 20 2c6 1 9 3 9 7 0 3-2 5-5 8L75 63l5 20c1 6 0 10-5 10-2 0-4-1-7-3L50 79 32 90c-3 2-5 3-7 3-5 0-6-4-5-10l5-20-15-13c-3-3-5-5-5-8 0-4 3-6 9-7l20-2 8-19c2-5 4-8 8-8z"
        fill={color}
        stroke="#2b2140"
        strokeOpacity=".12"
        strokeWidth="4"
      />
    </svg>
  );
}

export function Heart({ color = "#ff6f61", ...props }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 100 90" {...props}>
      <path d="M50 86S6 60 6 30C6 15 17 5 30 5c9 0 16 5 20 12 4-7 11-12 20-12 13 0 24 10 24 25 0 30-44 56-44 56z" fill={color} />
      <ellipse cx="28" cy="26" rx="8" ry="5" fill="#fff" opacity=".5" transform="rotate(-30 28 26)" />
    </svg>
  );
}

export function Balloon({ color = "#ff6f61", ...props }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 80 190" {...props}>
      <path d="M40 112c-2 20 10 30 0 46s6 26 0 30" stroke="#2b2140" strokeOpacity=".35" strokeWidth="2" fill="none" />
      <ellipse cx="40" cy="52" rx="36" ry="46" fill={color} />
      <path d="M34 98h12l-6 12z" fill={color} />
      <ellipse cx="26" cy="34" rx="8" ry="14" fill="#fff" opacity=".45" transform="rotate(20 26 34)" />
    </svg>
  );
}

export function Rainbow(props: P) {
  const c = ["#ff6f61", "#ffb627", "#ffd166", "#9be7c4", "#5cb8ff", "#c9b6ff"];
  return (
    <svg viewBox="0 0 400 210" fill="none" {...props}>
      {c.map((col, i) => (
        <path key={col} d={`M${20 + i * 18} 200a${180 - i * 18} ${180 - i * 18} 0 0 1 ${360 - i * 36} 0`} stroke={col} strokeWidth="18" strokeLinecap="round" />
      ))}
    </svg>
  );
}

export function Squiggle({ color = "#ff6f61", ...props }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 200 20" fill="none" preserveAspectRatio="none" {...props}>
      <path d="M2 12C20 2 30 2 48 11s30 9 48 0 30-9 48 0 30 9 50-2" stroke={color} strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

/** Wavy edge used between sections. `fill` should be the colour of the next section. */
export function Wave({ fill = "#fff8f1", flip = false, className = "" }: { fill?: string; flip?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className={`block h-12 w-full sm:h-20 ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden
    >
      <path d="M0 40c120 30 240 45 360 30S600 10 720 14s240 50 360 54 240-30 360-40v62H0z" fill={fill} />
    </svg>
  );
}

export function Moon(props: P) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <path d="M62 8a44 44 0 1 0 30 70A38 38 0 0 1 62 8z" fill="#ffe7a3" />
      <circle cx="44" cy="58" r="4" fill="#2b2140" />
      <path d="M50 70q6 4 12 0" stroke="#2b2140" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="36" cy="68" r="5" fill="#ff8fa3" opacity=".5" />
    </svg>
  );
}

export function Snowflake(props: P) {
  return (
    <svg viewBox="0 0 40 40" {...props}>
      <g stroke="#fff" strokeWidth="3" strokeLinecap="round">
        <path d="M20 3v34M5 11l30 18M5 29l30-18" />
        <path d="M15 6l5 4 5-4M15 34l5-4 5 4" fill="none" />
      </g>
    </svg>
  );
}
