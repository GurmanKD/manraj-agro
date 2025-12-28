import { Container } from "@/components/ui/container";
import Link from "next/link";
import { categories, products } from "@/lib/catalog";
import { notFound } from "next/navigation";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const cat = categories.find((c) => c.slug === category);
  if (!cat) return notFound();

  const list = products.filter((p) => p.category === cat.slug);

  return (
    <div className="py-12">
      <Container>
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">{cat.title}</h1>
            <p className="mt-2 text-slate-600">{cat.subtitle}</p>
          </div>

          <Link
            href="/products"
            className="text-sm font-semibold text-slate-700 hover:underline"
          >
            ← All Categories
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <Link
              key={p.slug}
              href={`/p/${p.slug}`}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="text-sm font-semibold text-green-700">
                {p.brand ?? "Manraj Agro"}
              </div>
              <div className="mt-1 text-lg font-bold">{p.title}</div>

              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {p.highlights.slice(0, 3).map((h) => (
                  <li key={h}>• {h}</li>
                ))}
              </ul>

              <div className="mt-5 flex items-center justify-between">
                <div className="text-sm font-semibold text-slate-900">
                  {p.price ?? "Get Quote"}
                </div>
                <div className="text-sm font-semibold text-slate-800 underline">
                  View →
                </div>
              </div>
            </Link>
          ))}

          {list.length === 0 && (
            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-600">
              Products for this category will be added soon.
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
