import { Container } from "@/components/ui/container";
import Link from "next/link";
import { categories, products } from "@/lib/catalog";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();

  const cat = categories.find((c) => c.slug === product.category);

  return (
    <div className="py-12">
      <Container>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
          <Link href="/products" className="hover:underline">
            Products
          </Link>
          <span>/</span>
          <Link href={`/products/${product.category}`} className="hover:underline">
            {cat?.title ?? "Category"}
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-medium">{product.title}</span>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="text-sm font-semibold text-green-700">
              {product.brand ?? "Manraj Agro"}
            </div>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight">
              {product.title}
            </h1>

            <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
              Photos will be added here (CMS). For now:{" "}
              <span className="font-medium">{cat?.imageHint}</span>
            </div>

            <div className="mt-6">
              <div className="text-sm font-semibold text-slate-900">Highlights</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {product.highlights.map((h) => (
                  <li key={h}>• {h}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="text-lg font-bold">Request a Quote</div>
            <p className="mt-2 text-sm text-slate-600">
              Tell us your location and requirement. We’ll share availability,
              pricing and delivery timeline.
            </p>

            <div className="mt-6 grid gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-green-700 px-5 py-3 text-center text-sm font-semibold text-white hover:opacity-95"
              >
                Contact Manraj Agro
              </Link>

              <a
                className="rounded-xl border border-slate-200 px-5 py-3 text-center text-sm font-semibold hover:bg-slate-50"
                href="tel:+91XXXXXXXXXX"
              >
                Call: +91 XXXXXXXXXX
              </a>

              <a
                className="rounded-xl border border-slate-200 px-5 py-3 text-center text-sm font-semibold hover:bg-slate-50"
                href="mailto:info@manrajagro.com"
              >
                Email: info@manrajagro.com
              </a>
            </div>

            <div className="mt-6 rounded-2xl bg-green-700/10 p-4 text-sm text-slate-700">
              <span className="font-semibold">Note:</span> Prices vary by model,
              subsidy/finance, and delivery location.
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
