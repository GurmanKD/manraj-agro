import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-lg font-extrabold tracking-tight text-slate-900">
              Manraj Agro Industries
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Dealership & supplier of agricultural machinery — tractors,
              harvesters, seed drills and implements with strong after-sales
              support.
            </p>
            <div className="mt-4 text-sm text-slate-700">
              <div>GST: 05DIBPS9043F1Z7</div>
              <div className="mt-1">Established: ~2017</div>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900">
              Quick Links
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link className="text-slate-600 hover:underline" href="/products">
                  Products
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:underline" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:underline" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900">Contact</div>
            <div className="mt-3 space-y-2 text-sm text-slate-600">
              <div>Gadarpur, Udham Singh Nagar, Uttarakhand</div>
              <div>Rampur, Uttar Pradesh</div>
              <a className="block hover:underline" href="tel:+91XXXXXXXXXX">
                +91 XXXXXXXXXX
              </a>
              <a className="block hover:underline" href="mailto:info@manrajagro.com">
                info@manrajagro.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Manraj Agro Industries.</div>
          <div className="flex gap-4">
            <Link className="hover:underline" href="/privacy">
              Privacy
            </Link>
            <Link className="hover:underline" href="/terms">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
