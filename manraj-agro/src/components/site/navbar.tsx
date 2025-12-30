"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Tractor } from "lucide-react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/locations", label: "Locations" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand/10">
            <Tractor className="h-5 w-5 text-brand" />
          </span>
          <div className="leading-tight">
            <div className="text-sm font800 font-extrabold tracking-tight text-slate-900">
              Manraj Agro Industries
            </div>
            <div className="text-xs text-slate-600">Dealership • Supplier</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium text-slate-700 hover:text-slate-900",
                  active && "text-brand"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <ButtonLink href="/contact" className="rounded-xl px-4">
            Get Quote
          </ButtonLink>
        </nav>

        {/* Mobile button */}
        <button
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 md:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <Container className="py-4">
            <div className="flex flex-col gap-3">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)} // ✅ close menu after navigation
                    className={cn(
                      "rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50",
                      active && "bg-brand/10 text-brand"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <ButtonLink href="/contact" className="w-full justify-center">
                Get Quote
              </ButtonLink>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
