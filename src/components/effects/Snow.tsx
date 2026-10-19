import { Snowflake } from "@/components/kids/Doodles";

// Deterministic pseudo-random so server and client markup match.
const rnd = (i: number, s: number) => {
  const x = Math.sin(i * 9301 + s * 49297) * 233280;
  return x - Math.floor(x);
};

export default function Snow({ count = 28 }: { count?: number }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const size = 10 + rnd(i, 1) * 22;
        return (
          <Snowflake
            key={i}
            className="absolute -top-10 animate-snow opacity-80"
            style={{
              left: `${rnd(i, 2) * 100}%`,
              width: size,
              height: size,
              animationDuration: `${9 + rnd(i, 3) * 10}s`,
              animationDelay: `-${rnd(i, 4) * 18}s`,
            }}
          />
        );
      })}
    </div>
  );
}
