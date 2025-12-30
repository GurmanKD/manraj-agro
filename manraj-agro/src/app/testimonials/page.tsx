import Link from "next/link";
import { sanityClient } from "@/lib/sanity/client";
import { qTestimonials } from "@/lib/sanity/queries";

export const revalidate = 3600;

function Stars({ n }: { n?: number }) {
  const rating = Math.max(0, Math.min(5, Number(n ?? 0)));
  return (
    <div className="text-xs text-zinc-700">
      {"★".repeat(rating)}
      <span className="text-zinc-300">{"★".repeat(5 - rating)}</span>
    </div>
  );
}

export default async function TestimonialsPage() {
  const items = await sanityClient.fetch(qTestimonials);

  return (
    <div className="container-shell py-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Testimonials
          </h1>
          <p className="mt-2 text-sm text-zinc-600">
            What customers say about Manraj Agro Industries.
          </p>
        </div>

        <Link
          href="/products"
          className="hidden rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800 sm:inline-block"
        >
          Browse Products
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((t: any) => (
          <div
            key={t._id}
            className="rounded-3xl border border-zinc-200 bg-white p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                {t.place ? (
                  <div className="mt-1 text-xs text-zinc-600">{t.place}</div>
                ) : null}
              </div>
              {t.rating ? <Stars n={t.rating} /> : null}
            </div>

            <p className="mt-4 text-sm text-zinc-700">“{t.quote}”</p>

            {t.product?.title ? (
              <Link
                href={`/p/${t.product.slug}`}
                className="mt-4 inline-block text-xs font-semibold text-zinc-700 underline"
              >
                Related: {t.product.title}
              </Link>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
