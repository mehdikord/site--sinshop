import type { Product } from "@/lib/types";
import ProductCard from "./ProductCard";
import Reveal from "@/components/effects/Reveal";

export default function ProductRow({ items }: { items: Product[] }) {
  return (
    <div className="no-scrollbar -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
      {items.map((p, i) => (
        <Reveal key={p.id} delay={i * 0.05} className="w-[68vw] shrink-0 snap-start sm:w-auto">
          <ProductCard p={p} />
        </Reveal>
      ))}
    </div>
  );
}
