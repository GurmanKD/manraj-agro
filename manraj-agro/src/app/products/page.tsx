import { Container } from "@/components/ui/container";
import Link from "next/link";
import { categories } from "@/lib/catalog";

export const metadata = {
  title: "Products | Manraj Agro Industries",
  description:
    "Browse tractors, harvesters, seed drills, rotavators and more. Serving Gadarpur (Uttarakhand) and Rampur (UP).",
};

export default function ProductsPage() {
  return (
    <div className="py-12">
      <Container>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-extrabold tracking-tight">Our Products</h1>
          <p className="text-slate-600 max-w-2xl">
            Explore categories. For the latest pricing and availability, request a quote.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/products/${c.slug}`}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-bold text-slate-900">
                    {c.title}
                  </div>
                  <div className="mt-1 text-sm text-slate-600">{c.subtitle}</div>
                </div>

                <div className="rounded-2xl bg-green-700/10 px-3 py-1 text-xs font-semibold text-green-700">
                  View
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-xs text-slate-600">
                {c.imageHint}
              </div>

              <div className="mt-4 text-sm font-semibold text-slate-800 group-hover:underline">
                Browse {c.title} →
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
