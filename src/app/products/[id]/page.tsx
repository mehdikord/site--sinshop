import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Check, ChevronLeft, Package, Truck } from "lucide-react";
import { allProducts, getProduct, related } from "@/lib/catalog";
import { categoryMap } from "@/data/categories";
import { faNum } from "@/lib/format";
import Gallery from "@/components/product/Gallery";
import AddToCart from "@/components/product/AddToCart";
import Reviews from "@/components/product/Reviews";
import Price from "@/components/ui/Price";
import Rating from "@/components/ui/Rating";
import ProductRow from "@/components/product/ProductRow";
import SectionHead from "@/components/ui/SectionHead";

export function generateStaticParams() {
  return allProducts.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps<"/products/[id]">): Promise<Metadata> {
  const { id } = await params;
  const p = getProduct(id);
  return { title: p?.title ?? "محصول" };
}

export default async function ProductPage({ params }: PageProps<"/products/[id]">) {
  const { id } = await params;
  const p = getProduct(id);
  if (!p) notFound();
  const cat = categoryMap[p.category];

  return (
    <div className="container-x py-8">
      <nav className="mb-6 flex items-center gap-1 text-xs text-muted">
        <Link href="/" className="hover:text-coral">خانه</Link><ChevronLeft className="size-3" />
        <Link href="/products" className="hover:text-coral">محصولات</Link><ChevronLeft className="size-3" />
        <Link href={`/products?cat=${cat.slug}`} className="hover:text-coral">{cat.name}</Link><ChevronLeft className="size-3" />
        <span className="text-ink">{p.title}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        <Gallery images={p.images} alt={p.title} />
        <div className="space-y-6">
          <div>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              <span className={`rounded-full px-3 py-1 ${cat.color}`}>{cat.emoji} {cat.name}</span>
              <span className="rounded-full bg-white px-3 py-1 text-muted">برند: {p.brand}</span>
              {p.discount >= 20 && <span className="rounded-full bg-coral px-3 py-1 text-white">تخفیف ویژه</span>}
            </div>
            <h1 className="mt-4 text-2xl font-black leading-snug sm:text-3xl">{p.title}</h1>
            <div className="mt-3"><Rating value={p.rating} count={p.reviewCount} size="md" /></div>
          </div>
          <div className="card p-5">
            <Price price={p.price} discount={p.discount} big />
            {p.discount > 0 && <div className="mt-1 text-xs font-bold text-coral">٪{faNum(p.discount)} تخفیف ویژه</div>}
            <div className="mt-5"><AddToCart id={p.id} stock={p.stock} /></div>
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted">
              <span className="flex items-center gap-1"><Truck className="size-4 text-sky" /> ارسال ۱ تا ۳ روز کاری</span>
              <span className="flex items-center gap-1"><Package className="size-4 text-mint" /> {p.stock > 0 ? `${faNum(p.stock)} عدد موجود` : "ناموجود"}</span>
            </div>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2">
            {p.features.map((f) => (
              <li key={f} className="flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-sm"><Check className="size-4 shrink-0 text-coral" /> {f}</li>
            ))}
          </ul>
        </div>
      </div>

      <section className="mt-14 grid gap-8 lg:grid-cols-[1fr_20rem]">
        <div className="card p-7">
          <h2 className="mb-4 text-xl font-black">معرفی محصول</h2>
          {p.description.split("\n\n").map((para, i) => <p key={i} className="mb-3 leading-8 text-ink/80">{para}</p>)}
        </div>
        <div className="card h-fit p-7">
          <h2 className="mb-4 text-xl font-black">مشخصات</h2>
          <dl className="space-y-3 text-sm">
            {[["برند", p.brand], ["دسته‌بندی", cat.name], ["کد محصول", p.id.toUpperCase()], ["فروش", `${faNum(p.sold)}+ عدد`], ["گارانتی", "۷ روز بازگشت کالا"]].map(([k, v]) => (
              <div key={k} className="flex justify-between border-b border-dashed border-ink/10 pb-2"><dt className="text-muted">{k}</dt><dd className="font-bold">{v}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="mb-6 text-2xl font-black">نظرات کاربران</h2>
        <Reviews reviews={p.reviews} rating={p.rating} count={p.reviewCount} />
      </section>

      <section className="mt-16">
        <SectionHead title="محصولات مرتبط" href={`/products?cat=${cat.slug}`} />
        <ProductRow items={related(p, 4)} />
      </section>
    </div>
  );
}
