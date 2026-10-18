import type { Category } from "@/lib/types";

export const categories: Category[] = [
  { slug: "wooden", name: "اکسسوری چوبی", tagline: "گرم، طبیعی، ماندگار", emoji: "🪵", color: "bg-amber-100" },
  { slug: "album", name: "آلبوم", tagline: "ثبت لحظه‌های ناب", emoji: "📔", color: "bg-rose-100" },
  { slug: "decor", name: "دکور اتاق کودک", tagline: "اتاقی رویایی", emoji: "🎈", color: "bg-sky-100" },
  { slug: "sleepwear", name: "ست و پوشاک خواب", tagline: "خواب‌های نرم", emoji: "🌙", color: "bg-violet-100" },
  { slug: "hygiene", name: "لوازم بهداشتی", tagline: "مراقبت روزانه", emoji: "🫧", color: "bg-teal-100" },
  { slug: "tableware", name: "ظروف کودک", tagline: "غذا خوردن شاد", emoji: "🍼", color: "bg-lime-100" },
  { slug: "newborn", name: "وسایل نوزاد", tagline: "اولین روزها", emoji: "🧸", color: "bg-orange-100" },
  { slug: "toys", name: "اسباب‌بازی", tagline: "بازی و یادگیری", emoji: "🧩", color: "bg-yellow-100" },
];

export const categoryMap = Object.fromEntries(categories.map((c) => [c.slug, c])) as Record<
  Category["slug"],
  Category
>;
