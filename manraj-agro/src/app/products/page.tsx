import Link from "next/link";
import { sanityClient } from "@/lib/sanity/client";
import { qAllCategories } from "@/lib/sanity/queries";

export const revalidate = 3600;

export default async function ProductsIndexPage() {
  const categories = await sanityClient.fetch(qAllCategories);

  return (
    <div className="container-shell py-10">
      <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
        Products
      </h1>
      <p className="mt-2 text-sm text-zinc-600">
        Browse categories — tractors, harvesters, implements and more.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c: any) => (
          <Link
            key={c._id}
            href={`/products/${c.slug}`}
            className="rounded-3xl border border-zinc-200 p-5 hover:bg-zinc-50"
          >
            <div className="text-sm font-semibold">{c.title}</div>

            {c.description ? (
              <p className="mt-2 line-clamp-3 text-sm text-zinc-600">
                {c.description}
              </p>
            ) : (
              <p className="mt-2 text-sm text-zinc-600">View products</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
