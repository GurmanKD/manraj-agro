import type { Metadata } from "next";
import "./globals.css";
import { TopBar } from "@/components/site/topbar";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";

export const metadata: Metadata = {
  title: "Manraj Agro Industries",
  description:
    "Dealership & supplier of agricultural machinery — tractors, harvesters, seed drills and implements.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-surface text-slate-900 antialiased">
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
