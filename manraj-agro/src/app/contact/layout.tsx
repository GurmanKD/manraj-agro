import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Manraj Agro Industries for tractors, harvesters and farm implements. Get a fast quote on WhatsApp.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // IMPORTANT: do NOT include <html> or <body> here (only in root layout)
  return <>{children}</>;
}
