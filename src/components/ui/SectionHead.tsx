import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SectionHead({ kicker, title, href, hrefLabel = "مشاهده همه" }: { kicker?: string; title: string; href?: string; hrefLabel?: string }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        {kicker && <span className="mb-2 inline-block rounded-full bg-white px-3 py-1 text-xs font-bold text-coral ring-1 ring-coral/20">{kicker}</span>}
        <h2 className="text-2xl font-black sm:text-3xl">{title}</h2>
      </div>
      {href && (
        <Link href={href} className="group hidden items-center gap-1 text-sm font-bold text-ink/70 hover:text-coral sm:flex">
          {hrefLabel} <ArrowLeft className="size-4 transition group-hover:-translate-x-1" />
        </Link>
      )}
    </div>
  );
}
