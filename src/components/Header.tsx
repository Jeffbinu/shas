/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import logo from "../../public/header/logo.svg";

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
     1. ROUTE CHANGE SAFETY (FIXED)
     Pattern: Adjust state during rendering
  -------------------------------- */
  // We track the previous path to detect changes during render
  const [prevPath, setPrevPath] = useState(pathname);

  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setOpen(false); // Close menu immediately without an Effect
  }

  // Keep scroll restoration logic in Effect (since it uses window)
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
            {/* LOGO ONLY */}
            <Link
              href="/#"
              onClick={(e) => handleNavClick(e, "/#")}
              className="flex items-center group select-none relative z-[70]"
            >
              <div
                className={`relative transition-all duration-300 w-auto pe-4 ${
                  isScrolled ? "h-10" : "h-10 sm:h-17"
                }`}
              >
                <Image
                  src={logo}
                  alt={`${site.title} logo`}
                  className="w-auto h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-8">
              {site.nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href.startsWith("#") ? `/${n.href}` : n.href}
                  onClick={(e) => handleNavClick(e, n.href)}
                  className="text-white/90 hover:text-[#007aff] relative group transition-colors font-poppins"
                >
                  {n.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#007aff] to-[#00f0ff] transition-all group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* MOBILE TOGGLE (Animated Hamburger) */}
            <button
              className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center z-[70] group"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle Menu"
            >
              <span
                className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-out ${
                  open ? "rotate-45 translate-y-0.5" : "-translate-y-1"
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-out ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-out ${
                  open ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY & DRAWER */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${
          open ? "pointer-events-auto" : "pointer-events-none delay-200"
        }`}
      >
        {/* Backdrop (Fade in/out) */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Drawer (Slide from right) */}
        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-[300px] bg-[#030C20]/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-32 px-8 pb-8">
            <nav className="flex flex-col gap-6">
              {site.nav.map((n, idx) => (
                <Link
                  key={n.href}
                  href={n.href.startsWith("#") ? `/${n.href}` : n.href}
                  onClick={(e) => handleNavClick(e, n.href)}
                  className={`text-xl font-medium text-white/90 hover:text-[#007aff] transition-all duration-300 transform ${
                    open
                      ? "translate-x-0 opacity-100"
                      : "translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${100 + idx * 50}ms` }}
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto">
               <div className="w-full h-[1px] bg-white/10 mb-6"></div>
               <p className="text-gray-400 text-sm">© {site.title}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
