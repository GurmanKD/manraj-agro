import { Container } from "@/components/ui/container";
import Link from "next/link";

export default function Home() {
  return (
    <section className="py-20">
      <Container>
        <h1 className="text-4xl font-extrabold tracking-tight">
          Tractors & Farm Machinery You Can Trust
        </h1>

        <p className="mt-4 max-w-2xl text-slate-600">
          Manraj Agro Industries is a dealership and supplier of agricultural
          machinery — John Deere tractors, combine harvesters, seed drills,
          rotavators and more — with reliable after-sales support.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/products"
            className="rounded-xl bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            Browse Products
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold hover:bg-slate-50"
          >
            Get Quote
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border bg-white p-4">
            <div className="text-2xl font-bold">10+</div>
            <div className="text-sm text-slate-600">Years in business</div>
          </div>
          <div className="rounded-2xl border bg-white p-4">
            <div className="text-2xl font-bold">Sales</div>
            <div className="text-sm text-slate-600">Tractors & machinery</div>
          </div>
          <div className="rounded-2xl border bg-white p-4">
            <div className="text-2xl font-bold">Support</div>
            <div className="text-sm text-slate-600">After-sales & service</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
