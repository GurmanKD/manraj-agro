import Link from "next/link";
import { sanityClient } from "@/lib/sanity/client";
import { qLocations } from "@/lib/sanity/queries";
import { siteConfig } from "@/lib/site";
import { makeWhatsAppLink } from "@/lib/whatsapp";

export const revalidate = 3600;

export default async function LocationsPage() {
  const locations = await sanityClient.fetch(qLocations);

  const fallbackWA = makeWhatsAppLink(
    siteConfig.whatsapp.number,
    siteConfig.whatsapp.defaultMessage
  );

  return (
    <div className="container-shell py-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Locations
          </h1>
          <p className="mt-2 text-sm text-zinc-600">
            Visit us or call for stock, availability and delivery timelines.
          </p>
        </div>

        <Link
          href="/contact"
          className="hidden rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800 sm:inline-block"
        >
          Get Quote
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map((l: any) => {
          const phone = l.phone || siteConfig.phone;
          const whatsapp = l.whatsapp || siteConfig.whatsapp.number;

          const wa = makeWhatsAppLink(
            whatsapp,
            `Hi! I want a quote. Location: ${l.name}.`
          );

          return (
            <div
              key={l._id}
              className="rounded-3xl border border-zinc-200 bg-white p-5"
            >
              <div className="text-sm font-semibold">{l.name}</div>

              {l.address ? (
                <p className="mt-2 text-sm text-zinc-600 whitespace-pre-line">
                  {l.address}
                </p>
              ) : null}

              {l.businessHours ? (
                <p className="mt-3 text-xs font-semibold text-zinc-700">
                  Hours: <span className="font-medium">{l.businessHours}</span>
                </p>
              ) : null}

              <div className="mt-4 grid gap-2 text-sm">
                <a
                  className="rounded-2xl border border-zinc-200 px-4 py-3 font-semibold hover:bg-zinc-50"
                  href={wa || fallbackWA}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>

                {phone ? (
                  <a
                    className="rounded-2xl border border-zinc-200 px-4 py-3 font-semibold hover:bg-zinc-50"
                    href={`tel:${phone}`}
                  >
                    Call
                  </a>
                ) : null}

                {l.mapLink ? (
                  <a
                    className="rounded-2xl border border-zinc-200 px-4 py-3 font-semibold hover:bg-zinc-50"
                    href={l.mapLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open in Maps
                  </a>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
