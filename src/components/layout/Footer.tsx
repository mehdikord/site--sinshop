import Link from "next/link";
import { AtSign as Instagram, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { categories } from "@/data/categories";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="space-y-4 md:col-span-1">
          <Logo light />
          <p className="text-sm leading-7 text-white/70">فروشگاه تخصصی سیسمونی و لوازم کودک؛ انتخاب‌های شیک، ایمن و دوست‌داشتنی برای کوچولوی شما.</p>
          <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm hover:bg-coral">
            <Instagram className="size-4" /> {site.instagram}@
          </a>
        </div>
        <div>
          <h4 className="mb-4 font-black">دسته‌بندی‌ها</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {categories.map((c) => (
              <li key={c.slug}><Link href={`/products?cat=${c.slug}`} className="hover:text-sun">{c.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-black">سین شاپ</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/about" className="hover:text-sun">درباره ما</Link></li>
            <li><Link href="/contact" className="hover:text-sun">تماس با ما</Link></li>
            <li><Link href="/terms" className="hover:text-sun">قوانین و مقررات</Link></li>
            <li><Link href="/products?deal=1" className="hover:text-sun">تخفیف‌های ویژه</Link></li>
            <li><Link href="/cart" className="hover:text-sun">سبد خرید</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-black">راه‌های ارتباطی</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2"><Phone className="size-4 text-sun" /> {site.phone}</li>
            <li className="flex items-center gap-2"><Mail className="size-4 text-sun" /> {site.email}</li>
            <li className="flex items-start gap-2"><MapPin className="mt-1 size-4 shrink-0 text-sun" /> {site.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © ۱۴۰۵ سین شاپ — تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
}
