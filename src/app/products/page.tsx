import { Suspense } from "react";
import type { Metadata } from "next";
import Catalog from "@/components/product/Catalog";

export const metadata: Metadata = { title: "محصولات" };

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="container-x py-20 text-center text-muted">در حال بارگذاری…</div>}>
      <Catalog />
    </Suspense>
  );
}
