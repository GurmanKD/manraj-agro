import Link from "next/link";
import { sanityClient } from "@/lib/sanity/client";
import { qLocations } from "@/lib/sanity/queries";

export const revalidate = 3600;

export default async function LocationsPage() {
  const locations: any[] = await sanityClient.fetch(qLocations);

  return (
    <div className="container-shell py-10">
      <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
        Our Locations
      </h1>
      <p className="mt-2 text-sm text-zinc-600">
        Visit or contact your nearest Manraj Agro dealership.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map((loc) => (
          <div
            key={loc._id}
            className="rounded-3xl border border-zinc-200 bg-white p-5"
          >
            <div className="text-sm font-semibold">{loc.name}</div>

            <p className="mt-2 text-sm text-zinc-600 whitespace-pre-line">
              {loc.address}
            </p>

            {loc.businessHours && (
              <p className="mt-2 text-xs text-zinc-600">
                🕒 {loc.businessHours}
              </p>
            )}

            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              {loc.phone && (
                <a
                  href={`tel:${loc.phone}`}
                  className="rounded-xl border border-zinc-200 px-3 py-2 font-semibold hover:bg-zinc-50"
                >
                  Call
                </a>
              )}

              {loc.whatsapp && (
                <a
                  href={`https://wa.me/${loc.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-zinc-200 px-3 py-2 font-semibold hover:bg-zinc-50"
                >
                  WhatsApp
                </a>
              )}

              {loc.mapLink && (
                <Link
                  href={loc.mapLink}
                  target="_blank"
                  className="rounded-xl border border-zinc-200 px-3 py-2 font-semibold hover:bg-zinc-50"
                >
                  Map
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
