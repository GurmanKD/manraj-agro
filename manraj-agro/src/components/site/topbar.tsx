import { Container } from "@/components/ui/container";
import { MapPin, Phone, Mail } from "lucide-react";

export function TopBar() {
  return (
    <div className="border-b border-slate-200 bg-white">
      <Container className="flex flex-col gap-2 py-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            Gadarpur (UK) • Rampur (UP)
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-700">
          <a
            className="inline-flex items-center gap-1 hover:underline"
            href="tel:+91XXXXXXXXXX"
          >
            <Phone className="h-3.5 w-3.5" />
            +91 XXXXXXXXXX
          </a>
          <a
            className="inline-flex items-center gap-1 hover:underline"
            href="mailto:info@manrajagro.com"
          >
            <Mail className="h-3.5 w-3.5" />
            info@manrajagro.com
          </a>
        </div>
      </Container>
    </div>
  );
}
