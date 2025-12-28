import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-surface">
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold text-brand">
                Gadarpur • Rampur
              </p>
              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Tractors, harvesters & farm implements — with service you can
                trust.
              </h1>
              <p className="mt-4 max-w-xl text-base text-slate-600">
                Manraj Agro Industries supplies John Deere tractors, combine
                harvesters, seed drills, rotavators, threshers and more — along
                with consultation and after-sales support.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href="/products">Browse Products</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Get a Quote
                </ButtonLink>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:max-w-md">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-2xl font-extrabold text-slate-900">
                    10+
                  </div>
                  <div className="text-sm text-slate-600">Years in business</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-2xl font-extrabold text-slate-900">
                    Fast
                  </div>
                  <div className="text-sm text-slate-600">
                    Quote & support turnaround
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">
                Featured Categories
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "John Deere Tractors",
                  "Combine Harvesters",
                  "Seed Drills",
                  "Rotavators",
                  "Straw Reapers",
                  "Laser Land Levelers",
                ].map((x) => (
                  <div
                    key={x}
                    className="rounded-2xl border border-slate-200 bg-surface p-4 text-sm font-medium text-slate-800"
                  >
                    {x}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-brand/10 p-4 text-sm text-slate-700">
                Tip: We’ll connect this to a CMS soon so your team can update
                products, prices (optional), and testimonials without coding.
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
