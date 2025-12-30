import Image from "next/image";
import Link from "next/link";
import { sanityClient } from "@/lib/sanity/client";
import { qProductBySlug } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import { QuoteCTA } from "@/components/quote/QuoteCTA";

export const revalidate = 3600;

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const p: any = await sanityClient.fetch(qProductBySlug, { slug: params.slug });

  if (!p) {
    return (
      <div className="container-shell py-16">
        <h1 className="text-xl font-bold">Product not found</h1>
        <Link href="/products" className="mt-4 inline-block text-sm underline">
          Go to products
        </Link>
      </div>
    );
  }

  return (
    <div className="container-shell py-10">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100">
            {p.images?.[0] ? (
              <Image
                src={urlFor(p.images[0]).width(1200).height(900).format("webp").url()}
                alt={p.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            ) : null}
          </div>

          {p.images?.length > 1 ? (
            <div className="grid grid-cols-3 gap-3">
              {p.images.slice(1, 4).map((img: any, i: number) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100"
                >
                  <Image
                    src={urlFor(img).width(600).height(450).format("webp").url()}
                    alt={`${p.title} photo ${i + 2}`}
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {/* Details */}
        <div>
          <p className="text-xs font-semibold text-zinc-600">
            {p.category?.title ?? "Product"}
          </p>

          <h1 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
            {p.title}
          </h1>

          <p className="mt-2 text-sm text-zinc-600">
            {p.brand ? `Brand: ${p.brand}` : "Agricultural machinery"}
          </p>

          <div className="mt-5 rounded-3xl border border-zinc-200 p-5">
            <div className="text-sm font-semibold">
              {p.priceType === "fixed" && p.price
                ? `₹ ${Number(p.price).toLocaleString("en-IN")}`
                : "Get latest price"}
            </div>
            <p className="mt-1 text-sm text-zinc-600">
              Request callback for availability, offers, and delivery details.
            </p>
            <div className="mt-4">
              <QuoteCTA productTitle={p.title} />
            </div>
          </div>

          {p.highlights?.length ? (
            <div className="mt-6">
              <h2 className="text-sm font-semibold">Highlights</h2>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                {p.highlights.map((h: string, idx: number) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-zinc-900" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {p.specs?.length ? (
            <div className="mt-8">
              <h2 className="text-sm font-semibold">Specifications</h2>
              <div className="mt-3 overflow-hidden rounded-3xl border border-zinc-200">
                <table className="w-full text-left text-sm">
                  <tbody>
                    {p.specs.map((s: any, idx: number) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-white" : "bg-zinc-50"}
                      >
                        <td className="w-1/2 px-4 py-3 font-medium text-zinc-800">
                          {s.k}
                        </td>
                        <td className="px-4 py-3 text-zinc-700">{s.v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
