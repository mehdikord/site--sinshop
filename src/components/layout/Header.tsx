"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useSyncExternalStore } from "react";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/store/cart";
import { categories } from "@/data/categories";
import { faNum } from "@/lib/format";
import Logo from "./Logo";

const subscribeScroll = (cb: () => void) => {
  window.addEventListener("scroll", cb, { passive: true });
  return () => window.removeEventListener("scroll", cb);
};

const nav = [
  { href: "/", label: "خانه" },
  { href: "/products", label: "محصولات" },
  { href: "/products?deal=1", label: "تخفیف‌ها" },
  { href: "/about", label: "درباره ما" },
  { href: "/contact", label: "تماس با ما" },
];

export default function Header() {
  const { count, hydrated } = useCart();
  const [open, setOpen] = useState(false);
  const scrolled = useSyncExternalStore(subscribeScroll, () => window.scrollY > 12, () => false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState(path);
  if (path !== prevPath) {
    setPrevPath(path);
    setOpen(false);
  }

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "bg-cream/85 backdrop-blur-xl shadow-soft" : "bg-transparent"}`}>
      <div className="container-x flex h-18 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="rounded-full px-4 py-2 text-sm font-semibold text-ink/80 transition hover:bg-white hover:text-coral">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <form action="/products" className="hidden items-center rounded-full bg-white px-4 py-2 ring-1 ring-ink/5 md:flex">
            <Search className="size-4 text-muted" />
            <input name="q" placeholder="جستجوی محصول…" className="w-40 bg-transparent px-2 text-sm outline-none placeholder:text-muted" />
          </form>
          <Link href="/products?sort=rating" aria-label="علاقه‌مندی‌ها" className="hidden size-10 place-items-center rounded-full bg-white ring-1 ring-ink/5 hover:text-coral sm:grid">
            <Heart className="size-5" />
          </Link>
          <Link href="/cart" aria-label="سبد خرید" className="relative grid size-10 place-items-center rounded-full bg-ink text-white transition hover:bg-coral">
            <ShoppingBag className="size-5" />
            {hydrated && count > 0 && (
              <span className="absolute -top-1 -left-1 grid size-5 place-items-center rounded-full bg-sun text-[11px] font-black text-ink">{faNum(count)}</span>
            )}
          </Link>
          <button onClick={() => setOpen(!open)} aria-label="منو" className="grid size-10 place-items-center rounded-full bg-white ring-1 ring-ink/5 lg:hidden">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="container-x pb-4 lg:hidden">
          <div className="card p-4">
            <form action="/products" className="mb-3 flex items-center rounded-full bg-cream px-4 py-2">
              <Search className="size-4 text-muted" />
              <input name="q" placeholder="جستجوی محصول…" className="w-full bg-transparent px-2 text-sm outline-none" />
            </form>
            <div className="grid grid-cols-2 gap-1">
              {nav.map((n) => (
                <Link key={n.href} href={n.href} className="rounded-xl px-3 py-2 text-sm font-semibold hover:bg-cream">{n.label}</Link>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-2 border-t border-ink/5 pt-3">
              {categories.map((c) => (
                <Link key={c.slug} href={`/products?cat=${c.slug}`} className={`rounded-full px-3 py-1 text-xs font-semibold ${c.color}`}>{c.emoji} {c.name}</Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
