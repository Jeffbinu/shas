"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import prt2 from "../../public/partners/partner2.png";
import logo from "../../public/header/shLogo.png";

type NavItem = { label: string; href: string };

export default function Header({
  site,
}: Readonly<{ site: { title: string; nav: NavItem[] } }>) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-inherit">


      <div
        className="absolute inset-0 opacity-40 mix-blend-soft-light z-10"
        style={{
          backgroundImage: "url('/hero/noise.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
      <div className="absolute left-0  top-0 w-full h-full inset-[10%] opacity-80" />
      <div className="mx-auto px-6 lg:px-12">
        <div className="relative h-24 flex items-center justify-between">
          {/* LEFT: Logo Area */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="relative h-full w-10 sm:h-12 sm:w-12">
              <Image
                src={logo}
                alt={`${site.title} logo`}
                className="h-full w-full object-contain group-hover:rotate-6 transition-transform"
                height={100}
                width={100}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-wide text-white text-xl uppercase leading-none">
                {site.title}
              </span>
              <span className="text-[10px] text-white/80 tracking-wider uppercase leading-none mt-1">
                Intellectual wisdom in technology
              </span>
            </div>
          </Link>

          {/* RIGHT: Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {site.nav?.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-base font-medium text-white/90 hover:text-white transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* MOBILE: Burger Menu */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden p-2 text-white"
          >
            <span className="text-2xl">{open ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="absolute left-0 right-0 top-full bg-[#030C20]/95 backdrop-blur-lg border-b border-white/10 lg:hidden shadow-2xl">
            <div className="flex flex-col p-6 gap-4">
              {site.nav?.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-white/90 hover:text-blue-400"
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
