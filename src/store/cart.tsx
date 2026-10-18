"use client";

import { createContext, useContext, useEffect, useMemo, useState, useSyncExternalStore, type ReactNode } from "react";
import type { CartItem } from "@/lib/types";
import { getProduct } from "@/lib/catalog";
import { finalPrice } from "@/lib/format";
import { site } from "@/data/site";

interface CartCtx {
  items: CartItem[];
  add: (id: string, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  discountTotal: number;
  shipping: number;
  tax: number;
  total: number;
  hydrated: boolean;
}

const Ctx = createContext<CartCtx | null>(null);
const KEY = "sinshop-cart";
const subscribeNoop = () => () => {};

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? (JSON.parse(raw) as CartItem[]) : [];
    } catch {
      return [];
    }
  });
  const hydrated = useSyncExternalStore(subscribeNoop, () => true, () => false);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch {}
  }, [items, hydrated]);

  const value = useMemo<CartCtx>(() => {
    let subtotal = 0;
    let discountTotal = 0;
    let count = 0;
    for (const it of items) {
      const p = getProduct(it.id);
      if (!p) continue;
      count += it.qty;
      subtotal += p.price * it.qty;
      discountTotal += (p.price - finalPrice(p.price, p.discount)) * it.qty;
    }
    const net = subtotal - discountTotal;
    const shipping = net === 0 || net >= site.shippingFree ? 0 : site.shippingFee;
    const tax = Math.round(net * site.taxRate);
    return {
      items,
      hydrated,
      count,
      subtotal,
      discountTotal,
      shipping,
      tax,
      total: net + shipping + tax,
      add: (id, qty = 1) =>
        setItems((s) => {
          const i = s.find((x) => x.id === id);
          if (i) return s.map((x) => (x.id === id ? { ...x, qty: x.qty + qty } : x));
          return [...s, { id, qty }];
        }),
      remove: (id) => setItems((s) => s.filter((x) => x.id !== id)),
      setQty: (id, qty) =>
        setItems((s) => (qty <= 0 ? s.filter((x) => x.id !== id) : s.map((x) => (x.id === id ? { ...x, qty } : x)))),
      clear: () => setItems([]),
    };
  }, [items, hydrated]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart outside provider");
  return c;
}
