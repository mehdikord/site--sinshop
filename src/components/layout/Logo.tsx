import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="grid size-10 place-items-center rounded-2xl bg-coral text-xl font-black text-white shadow-pop rotate-[-6deg] transition hover:rotate-0">س</span>
      <span className="leading-tight">
        <span className={`block text-lg font-black ${light ? "text-white" : "text-ink"}`}>سین شاپ</span>
        <span className={`block text-[10px] font-semibold tracking-[0.3em] ${light ? "text-white/70" : "text-muted"}`}>SIN SHOP</span>
      </span>
    </Link>
  );
}
