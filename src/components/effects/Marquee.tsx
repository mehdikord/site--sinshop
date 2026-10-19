import type { ReactNode } from "react";

export default function Marquee({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden ${className}`} dir="ltr">
      <div className="flex w-max animate-marquee gap-8 pr-8 hover:[animation-play-state:paused]">
        {children}
        {children}
      </div>
    </div>
  );
}
