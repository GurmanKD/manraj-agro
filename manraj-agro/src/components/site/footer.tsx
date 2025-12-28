import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        <div className="grid gap-8 py-10 md:grid-cols-3 text-sm">
          {/* Brand */}
          <div>
            <div className="text-base font-extrabold tracking-tight">
              Manraj Agro Industries
            </div>
            <p className="mt-2 text-slate-600">
              Dealership & supplier of agricultural machinery including tractors,
              harvesters and farm implements.
            </p>
            <p className="mt-3 text-slate-600">
              GST: <span className="font-medium">05DIBPS9043F1Z7</span>
            </p>
          </div>

          {/* Locations */}
          <div>
            <div className="font-semibold">Locations</div>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Gadarpur, Udham Singh Nagar<br />
              Uttarakhand<br /><br />
              Rampur, Uttar Pradesh
            </p>
          </div>

          {/* Contact */}
          <div>
            <div className="font-semibold">Contact</div>
            <p className="mt-2 text-slate-600">
              Phone: +91 XXXXXXXXXX<br />
              Email: info@manrajagro.com
            </p>
          </div>
        </div>

        <div className="border-t border-slate-200 py-4 text-xs text-slate-500">
          © {new Date().getFullYear()} Manraj Agro Industries. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
