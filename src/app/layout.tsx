// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Header from "../components/Header";
import SiteFooter from "../components/SiteFooter";
import { getSite } from "../lib/content";

export const metadata = {
  title: "SHASHONK — Intellectual Wisdom In Technology",
  description: "We craft digital experiences and intelligent solutions.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const site = getSite();

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#030C20]">
        {/* Fixed header at top */}
        <Header site={site} />
        {/* Offset for fixed header height (~96px) */}
        <main className="flex-1 pt-24">{children}</main>
        <SiteFooter
          site={{
            title: site.title,
            logo: site.logo,
            contact: {
              email: site.contact?.email,
              phone: site.contact?.phone,
            },
          }}
        />
      </body>
    </html>
  );
}
