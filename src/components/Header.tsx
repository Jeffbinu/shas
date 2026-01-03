"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import logo from "../../public/header/shLogo.png";

type NavItem = { label: string; href: string };

export default function Header({
  site,
}: {
  site: { title: string; nav: NavItem[] };
}) {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const isAutoScrolling = useRef(false);

  const pathname = usePathname();
  const router = useRouter();

  /* -------------------------------
     ROUTE CHANGE SAFETY RESET
  -------------------------------- */
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (window.scrollY < 50) {
        setIsVisible(true);
        setIsScrolled(false);
      }
      isAutoScrolling.current = false;
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname]);

  /* -------------------------------
     SCROLL SHOW / HIDE LOGIC
  -------------------------------- */
  useEffect(() => {
    const onScroll = () => {
      if (isAutoScrolling.current) return;

      const currentY = window.scrollY;

      if (currentY < 10) {
        setIsVisible(true);
        setIsScrolled(false);
      } else {
        setIsScrolled(true);

        if (currentY > lastScrollY.current && currentY > 120) {
          setIsVisible(false); // scrolling down
        } else {
          setIsVisible(true); // scrolling up
        }
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* -------------------------------
     HASH NAVIGATION (PROFESSIONAL)
  -------------------------------- */
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setOpen(false);
    setIsVisible(true); // DO NOT hide immediately

    // External route
    if (!href.startsWith("#")) {
      router.push(href);
      return;
    }

    // Same-page hash
    if (pathname === "/") {
      smoothScrollTo(href.substring(1));
      history.pushState(null, "", href);
    } else {
      isAutoScrolling.current = true;
      router.push(`/${href}`);
    }
  };

  /* -------------------------------
     SMOOTH SCROLL ENGINE
  -------------------------------- */
  const smoothScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    isAutoScrolling.current = true;

    const start = window.scrollY;
    const target = el.getBoundingClientRect().top + start;
    const distance = target - start;
    const duration = 800;
    let startTime: number | null = null;

    const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      window.scrollTo(0, start + distance * easeOutExpo(progress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        isAutoScrolling.current = false;
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <>
      {/* TOP SENSOR STRIP */}
      <div
        className="fixed top-0 left-0 right-0 h-4 z-[60]"
        onMouseEnter={() => setIsVisible(true)}
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out
        ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }
        ${
          isScrolled
            ? "bg-[#030C20]/10 backdrop-blur-xl shadow-2xl shadow-[#007aff]/10"
            : "bg-transparent"
        }`}
        onMouseEnter={() => setIsVisible(true)}
      >
        <div className="mx-auto px-6 lg:px-12">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? "h-20" : "h-24"
            }`}
          >
            {/* LOGO */}
            <Link
              href="/#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-3 group"
            >
              <div
                className={`transition-all duration-300 ${
                  isScrolled ? "w-10 h-10" : "w-12 h-12 sm:w-14 sm:h-14"
                }`}
              >
                <Image
                  src={logo}
                  alt={`${site.title} logo`}
                  className="w-full h-full object-contain group-hover:rotate-12 group-hover:scale-110 transition-all"
                />
              </div>

              <div className="flex flex-col">
                <span
                  className={`font-bold text-white uppercase transition-all ${
                    isScrolled ? "text-lg" : "text-xl"
                  }`}
                >
                  {site.title}
                </span>
                <span
                  className={`text-white/70 uppercase tracking-widest transition-all ${
                    isScrolled ? "opacity-0 h-0" : "opacity-100 text-[10px]"
                  }`}
                >
                  Intellectual wisdom in technology
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-8">
              {site.nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href.startsWith("#") ? `/${n.href}` : n.href}
                  onClick={(e) => handleNavClick(e, n.href)}
                  className="text-white/90 hover:text-[#007aff] relative group transition-colors"
                >
                  {n.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#007aff] to-[#00f0ff] transition-all group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* MOBILE TOGGLE */}
            <button
              className="lg:hidden text-2xl text-white"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "✕" : "☰"}
            </button>
          </div>

          {/* MOBILE MENU */}
          {open && (
            <div className="lg:hidden bg-[#030C20]/95 backdrop-blur-xl border-t border-white/10">
              <div className="flex flex-col gap-4 p-6">
                {site.nav.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href.startsWith("#") ? `/${n.href}` : n.href}
                    onClick={(e) => handleNavClick(e, n.href)}
                    className="text-lg text-white/90 hover:text-[#007aff] transition-all hover:translate-x-2"
                  >
                    {n.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
