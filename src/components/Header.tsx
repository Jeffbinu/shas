"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type NavItem = { label: string; href: string };

export default function Header({
  site,
}: Readonly<{ site: { title: string; logo: string; nav: NavItem[] } }>) {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute w-full top-0 z-50">
      <div className=" border-b border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="relative h-20 flex items-center">
            <div className="w-full grid grid-cols-3 items-center">
              {/* LEFT: Logo */}
              <div className="col-start-1 flex items-center">
                <Link href="/" className="flex items-center gap-3">
                  <div className="relative h-10 w-10 sm:h-12 sm:w-12">
                    <Image
                      src={site.logo}
                      alt={site.title}
                      fill
                      sizes="(max-width: 640px) 36px, 48px"
                      className="object-contain"
                    />
                  </div>
                  <span className="hidden sm:inline-block font-semibold tracking-wide text-white text-lg">
                    {site.title}
                  </span>
                </Link>
              </div>

              {/* CENTER: Nav (desktop) */}
              <nav className="col-start-2 justify-self-center hidden md:flex items-center gap-8">
                {site.nav?.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    className="text-sm text-white/85 hover:text-white transition px-2 py-1"
                  >
                    {n.label}
                  </a>
                ))}
              </nav>

              {/* RIGHT: CTA + burger */}
              <div className="col-start-3 flex items-center justify-end gap-4">
                <a
                  href="#contact"
                  className="hidden md:inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#0f6fff] to-[#0b5cdc] text-white text-sm shadow-lg"
                >
                  Contact Us
                </a>

                <button
                  aria-label="Toggle menu"
                  onClick={() => setOpen((s) => !s)}
                  className="md:hidden p-2 rounded bg-white/6 text-white/95"
                >
                  <span className="text-xl">{open ? "✕" : "☰"}</span>
                </button>
              </div>
            </div>

            {/* MOBILE MENU */}
            {open && (
              <div className="absolute left-0 right-0 top-full mt-2 md:hidden">
                <div className="mx-4 rounded-xl bg-black/60 backdrop-blur-sm border border-white/6 overflow-hidden shadow-lg">
                  <div className="flex flex-col px-4 py-4 gap-2 ">
                    {site.nav?.map((n) => (
                      <a
                        key={n.href}
                        href={n.href}
                        onClick={() => setOpen(false)}
                        className="py-3 text-white/90 hover:bg-white/3 rounded px-2 "
                      >
                        {n.label}
                      </a>
                    ))}
                    <a
                      href="#contact"
                      onClick={() => setOpen(false)}
                      className="mt-2 inline-block px-4 py-3 rounded-full bg-gradient-to-r from-[#0f6fff] to-[#0b5cdc] text-white text-center"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
