"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  // Replace with your WhatsApp number incl. country code, no +, no spaces.
  const phone = "91XXXXXXXXXX";
  const text = encodeURIComponent(
    "Hi Manraj Agro Industries, I want to enquire about tractors / implements."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white shadow-lg transition hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
