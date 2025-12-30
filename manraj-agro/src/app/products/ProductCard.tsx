import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity/image";

export function ProductCard({ p }: { p: any }) {
  return (
    <Link
      href={`/p/${p.slug}`}
      className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white hover:bg-zinc-50"
    >
      <div className="relative aspect-[4/3] w-full bg-zinc-100">
        {p.image ? (
          <Image
            src={urlFor(p.image).width(900).height(675).format("webp").url()}
            alt={p.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : null}
      </div>

      <div className="p-5">
        <div className="text-sm font-semibold">{p.title}</div>
        <div className="mt-1 text-xs text-zinc-600">
          {p.brand ? p.brand : "Machinery"}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm font-semibold text-zinc-900">
            {p.priceType === "fixed" && p.price
              ? `₹ ${Number(p.price).toLocaleString("en-IN")}`
              : "Get latest price"}
          </div>
          <span className="text-xs font-semibold text-zinc-700">View →</span>
        </div>
      </div>
    </Link>
  );
}
