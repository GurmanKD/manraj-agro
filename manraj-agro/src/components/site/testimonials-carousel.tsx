"use client";

import Link from "next/link";
import { useMemo, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type Testimonial = {
  _id: string;
  name: string;
  place?: string;
  quote: string;
  rating?: number;
  product?: { title?: string; slug?: string } | null;
};

function Stars({ rating }: { rating: number }) {
  const safe = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <div className="text-sm text-zinc-700" aria-label={`${safe} out of 5`}>
      {"★★★★★".slice(0, safe)}
      <span className="text-zinc-300">{"★★★★★".slice(0, 5 - safe)}</span>
    </div>
  );
}

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const hasItems = items?.length > 0;

  const cards = useMemo(() => items ?? [], [items]);

  const scrollBy = (dir: "left" | "right") => {
    const el = ref.current;
    if (!el) return;

    const amount = Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  if (!hasItems) return null;

  return (
    <section className="mt-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">
            What customers say
          </h2>
          <p className="mt-1 text-sm text-zinc-600">
            Real feedback from farmers and buyers.
          </p>
        </div>

        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scrollBy("left")}
            className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white p-2 hover:bg-zinc-50"
            aria-label="Scroll testimonials left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy("right")}
            className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white p-2 hover:bg-zinc-50"
            aria-label="Scroll testimonials right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={ref}
        className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {cards.map((t) => (
          <article
            key={t._id}
            className="w-[85%] shrink-0 snap-start rounded-3xl border border-zinc-200 bg-white p-5 sm:w-[420px]"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="text-sm font-semibold text-zinc-900">
                  {t.name}
                </div>
                <div className="text-xs text-zinc-600">
                  {t.place ? t.place : "Customer"}
                </div>
              </div>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-900/5">
                <Quote className="h-5 w-5 text-zinc-800" />
              </div>
            </div>

            {typeof t.rating === "number" ? (
              <div className="mt-3">
                <Stars rating={t.rating} />
              </div>
            ) : null}

            <p className="mt-3 text-sm text-zinc-700 leading-relaxed">
              “{t.quote}”
            </p>

            {t.product?.slug ? (
              <div className="mt-4">
                <Link
                  href={`/p/${t.product.slug}`}
                  className="text-sm font-semibold text-zinc-900 underline underline-offset-4"
                >
                  Related: {t.product.title ?? "View product"}
                </Link>
              </div>
            ) : null}
          </article>
        ))}
      </div>

      {/* mobile controls */}
      <div className="mt-4 flex gap-2 sm:hidden">
        <button
          type="button"
          onClick={() => scrollBy("left")}
          className="w-1/2 rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-zinc-50"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={() => scrollBy("right")}
          className="w-1/2 rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-zinc-50"
        >
          Next
        </button>
      </div>
    </section>
  );
}
