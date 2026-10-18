import { products } from "@/data/products";
import type { CategorySlug, Product } from "@/lib/types";
import { finalPrice } from "@/lib/format";

export const allProducts = products;

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function byTag(tag: string, limit = 8) {
  return products.filter((p) => p.tags.includes(tag)).slice(0, limit);
}

export function hotDeals(limit = 8) {
  return [...products]
    .filter((p) => p.discount >= 20)
    .sort((a, b) => b.discount - a.discount)
    .slice(0, limit);
}

export function popular(limit = 8) {
  return [...products].sort((a, b) => b.sold - a.sold).slice(0, limit);
}

export function winter(limit = 8) {
  return products.filter((p) => p.tags.includes("winter")).slice(0, limit);
}

export function related(p: Product, limit = 4) {
  return products.filter((x) => x.category === p.category && x.id !== p.id).slice(0, limit);
}

export type SortKey = "popular" | "newest" | "cheap" | "expensive" | "discount" | "rating";

export interface Filters {
  cat?: CategorySlug | "";
  q?: string;
  min?: number;
  max?: number;
  sort?: SortKey;
  deal?: boolean;
  inStock?: boolean;
}

export function filterProducts(f: Filters) {
  let list = products.slice();
  if (f.cat) list = list.filter((p) => p.category === f.cat);
  if (f.q) {
    const q = f.q.trim();
    list = list.filter((p) => p.title.includes(q) || p.brand.includes(q));
  }
  if (f.deal) list = list.filter((p) => p.discount > 0);
  if (f.inStock) list = list.filter((p) => p.stock > 0);
  if (f.min) list = list.filter((p) => finalPrice(p.price, p.discount) >= f.min!);
  if (f.max) list = list.filter((p) => finalPrice(p.price, p.discount) <= f.max!);
  switch (f.sort) {
    case "cheap":
      list.sort((a, b) => finalPrice(a.price, a.discount) - finalPrice(b.price, b.discount));
      break;
    case "expensive":
      list.sort((a, b) => finalPrice(b.price, b.discount) - finalPrice(a.price, a.discount));
      break;
    case "discount":
      list.sort((a, b) => b.discount - a.discount);
      break;
    case "rating":
      list.sort((a, b) => b.rating - a.rating);
      break;
    case "newest":
      list.sort((a, b) => Number(b.tags.includes("new")) - Number(a.tags.includes("new")));
      break;
    default:
      list.sort((a, b) => b.sold - a.sold);
  }
  return list;
}
