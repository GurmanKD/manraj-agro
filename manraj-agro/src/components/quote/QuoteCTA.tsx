import Link from "next/link";

export function QuoteCTA({ productTitle }: { productTitle: string }) {
  const href = `/contact?product=${encodeURIComponent(productTitle)}`;

  return (
    <Link
      href={href}
      className="inline-flex w-full items-center justify-center rounded-2xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
    >
      Get Quote on WhatsApp
    </Link>
  );
}
