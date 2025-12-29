import Link from "next/link";
import { sanityClient } from "@/lib/sanity/client";
import { qAllCategories } from "@/lib/sanity/queries";


export const revalidate = 3600;

export default async function ProductsPage() {
  const categories = await sanityClient.fetch(qAllCategories);

  return (
    <div className="container-shell py-10">
      <h1 className="text-2xl font-extrabold">Products</h1>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c: any) => (
          <Link
            key={c._id}
            href={`/products/${c.slug}`}
            className="rounded-3xl border p-5 hover:bg-zinc-50"
          >
            <h2 className="font-semibold">{c.title}</h2>
            {c.description && (
              <p className="mt-2 text-sm text-zinc-600">
                {c.description}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
