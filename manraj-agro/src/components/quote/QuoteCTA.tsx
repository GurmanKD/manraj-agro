"use client";

import { siteConfig } from "@/lib/site";
import { makeWhatsAppLink } from "@/lib/whatsapp";

export function QuoteCTA({ productTitle }: { productTitle: string }) {
  const msg = `Hi! I want the latest price / availability for: ${productTitle}. My location is: `;
  const href = makeWhatsAppLink(siteConfig.whatsapp.number, msg);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex w-full items-center justify-center rounded-2xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
    >
      Get Quote on WhatsApp
    </a>
  );
}
