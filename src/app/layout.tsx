// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Header from "../components/Header";
import SiteFooter from "../components/SiteFooter";
import { getSite } from "../lib/content";
import { Syne, Poppins } from "next/font/google";

export const metadata = {
  title: "SHASHONK — Intellectual Wisdom In Technology",
  description: "We craft digital experiences and intelligent solutions.",
};

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const site = getSite();

  return (
    <html lang="en">
      <body
        className={`
          ${syne.variable}
          ${poppins.variable}
          font-poppins
          min-h-screen
          flex
          flex-col
        `}
      >
        {/* Fixed header at top */}
        <Header site={site} />
        {/* Offset for fixed header height (~96px) */}
        <main className="flex-1">{children}</main>
        <SiteFooter
          site={{
            title: site.title,
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
