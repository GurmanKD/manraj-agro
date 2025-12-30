import Link from "next/link";
import Image from "next/image";
import { sanityClient } from "@/lib/sanity/client";
import { qProductsByCategorySlug } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

export const revalidate = 3600;

export default async function CategoryPage({
  params,
}: {
  params: { cat: string };
}) {
  const items: any[] = await sanityClient.fetch(qProductsByCategorySlug, {
    cat: params.cat,
  });

  return (
    <div className="container-shell py-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            {decodeURIComponent(params.cat)}
          </h1>
          <p className="mt-2 text-sm text-zinc-600">
            Tap any product to view specs and request the latest price.
          </p>
        </div>

        <Link
          href="/contact"
          className="hidden rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800 sm:inline-block"
        >
          Get Quote
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <Link
            key={p._id}
            href={`/p/${p.slug}`}
            className="group overflow-hidden rounded-3xl border border-zinc-200 hover:bg-zinc-50"
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
                <span className="text-xs font-semibold text-zinc-700">
                  View →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
