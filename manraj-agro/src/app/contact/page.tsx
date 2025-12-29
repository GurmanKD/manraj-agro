"use client";

import { Container } from "@/components/ui/container";
import { QuoteForm } from "@/components/site/quote-form";
import { siteConfig } from "@/lib/site";
import { makeWhatsAppLink } from "@/lib/whatsapp";

export default function ContactPage() {
  const waLink = makeWhatsAppLink(
    siteConfig.whatsapp.number,
    siteConfig.whatsapp.defaultMessage
  );

  return (
    <div className="py-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">
              Contact & Get Quote
            </h1>
            <p className="mt-3 max-w-xl text-slate-600">
              Tell us what you need (model / HP / implement / location). We’ll
              reply with availability, pricing, and delivery timeline.
            </p>

            <div className="mt-6 space-y-3 rounded-3xl border border-slate-200 bg-white p-6">
              <div className="text-sm text-slate-600">Business</div>
              <div className="text-lg font-bold">{siteConfig.name}</div>
              <div className="text-sm text-slate-600">
                GST: <span className="font-medium">{siteConfig.gst}</span>
              </div>

              <div className="mt-4 grid gap-2 text-sm">
                <a
                  className="rounded-xl border border-slate-200 px-4 py-3 font-semibold hover:bg-slate-50"
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp Us (Fastest)
                </a>

                <a
                  className="rounded-xl border border-slate-200 px-4 py-3 font-semibold hover:bg-slate-50"
                  href={`tel:${siteConfig.phone}`}
                >
                  Call: {siteConfig.phone}
                </a>

                <a
                  className="rounded-xl border border-slate-200 px-4 py-3 font-semibold hover:bg-slate-50"
                  href={`mailto:${siteConfig.email}`}
                >
                  Email: {siteConfig.email}
                </a>
              </div>

              <div className="mt-4 text-sm font-semibold">Locations</div>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                {siteConfig.locations.map((loc) => (
                  <li key={loc}>• {loc}</li>
                ))}
              </ul>
            </div>
          </div>

          <QuoteForm />
        </div>
      </Container>
    </div>
  );
}
