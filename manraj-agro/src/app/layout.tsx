import type { Metadata } from "next";
import "./globals.css";

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";

export const metadata: Metadata = {
  title: {
    default: "Manraj Agro Industries",
    template: "%s | Manraj Agro Industries",
  },
  description:
    "Authorized dealer of tractors, harvesters and farm implements. Serving Gadarpur (Uttarakhand) and Rampur (UP).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <Navbar />
        <main className="min-h-[70vh]">{children}</main>
        <WhatsAppFab />
        <Footer />
      </body>
    </html>
  );
}
