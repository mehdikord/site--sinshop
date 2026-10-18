export type CategorySlug =
  | "wooden"
  | "album"
  | "decor"
  | "sleepwear"
  | "hygiene"
  | "tableware"
  | "newborn"
  | "toys";

export interface Review {
  id: string;
  name: string;
  rating: number;
  title: string;
  body: string;
  date: string;
  helpful: number;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  brand: string;
  category: CategorySlug;
  price: number;
  discount: number;
  images: string[];
  description: string;
  features: string[];
  reviews: Review[];
  rating: number;
  reviewCount: number;
  sold: number;
  stock: number;
  tags: string[];
}

export interface Category {
  slug: CategorySlug;
  name: string;
  tagline: string;
  emoji: string;
  color: string;
}

export interface CartItem {
  id: string;
  qty: number;
}
