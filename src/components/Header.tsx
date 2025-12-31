"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import logo from "../../public/header/shLogo.png";

type NavItem = { label: string; href: string };

export default function Header({
  site,
}: Readonly<{ site: { title: string; nav: NavItem[] } }>) {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const pathname = usePathname();
  const router = useRouter();
  const isAutoScrolling = useRef(false);

  // 1. PROFESSIONAL FIX: Reset Header on Page Navigation
  // Whenever the user changes pages, check if we are at the top.
  // If we are at the top, the header MUST be visible.
  useEffect(() => {
    const handleRouteChange = () => {
      if (window.scrollY < 50) {
        setIsVisible(true);
        setIsScrolled(false);
      }
      isAutoScrolling.current = false; // Release any scroll locks
    };

    // Small delay to allow Next.js to finish its native scroll restoration
    const timer = setTimeout(handleRouteChange, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If programmatically scrolling, ignore user scroll events
      if (isAutoScrolling.current) return;

      if (currentScrollY < 10) {
        setIsScrolled(false);
        setIsVisible(true); // ALWAYS show at top
      } else {
        setIsScrolled(true);
        // Smart Hide Logic
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavigation = async (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);

    // Only hide header if we are scrolling DOWN to a section.
    // If scrolling to top (#home), keep it visible or let the animation handle it.
    if (href !== "#home" && href !== "/") {
      setIsVisible(false);
    }
    
    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      if (pathname === "/") {
        scrollToSection(targetId);
      } else {
        isAutoScrolling.current = true;
        router.push(`/${href}`);
      }
    } else {
      router.push(href);
    }
  };

  const scrollToSection = (targetId: string) => {
    document.documentElement.style.scrollBehavior = "auto";
    isAutoScrolling.current = true;

    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800; 
      let start: number | null = null;

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        } else {
          isAutoScrolling.current = false;
          document.documentElement.style.scrollBehavior = "smooth";
          
          window.scrollTo(0, targetPosition);
          
          // 2. SAFETY CHECK: If we scrolled to Top/Home, FORCE SHOW the header
          if (targetId === "home" || targetPosition < 50) {
            setIsVisible(true);
            setIsScrolled(false);
          }
        }
      };
      requestAnimationFrame(animation);
    } else {
      isAutoScrolling.current = false;
    }
  };

  return (
    <>
      {/* Sensor Strip */}
      <div 
        className="fixed top-0 left-0 right-0 h-4 z-[60]"
        onMouseEnter={() => setIsVisible(true)}
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out transform ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } ${
          isScrolled
            ? "bg-[#030C20]/90 backdrop-blur-xl shadow-2xl shadow-[#007aff]/10"
            : "bg-transparent"
        }`}
        onMouseEnter={() => setIsVisible(true)}
      >
        <div className="mx-auto px-6 lg:px-12">
          <div className={`relative flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-20" : "h-24"
          }`}>
            <Link 
              href="/" 
              onClick={(e) => handleNavigation(e, "#home")}
              className="flex items-center gap-3 group"
            >
              <div className={`relative transition-all duration-300 ease-out ${
                isScrolled ? "h-10 w-10" : "h-12 w-12 sm:h-16 sm:w-12"
              }`}>
                <Image
                  src={logo}
                  alt={`${site.title} logo`}
                  className="h-full w-full object-contain group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 ease-out"
                  height={100}
                  width={100}
                />
              </div>
              <div className="flex flex-col">
                <span className={`font-bold tracking-wide text-white uppercase leading-none transition-all duration-300 ${
                  isScrolled ? "text-lg" : "text-xl"
                }`}>
                  {site.title}
                </span>
                <span className={`text-white/80 tracking-wider uppercase leading-none mt-1 transition-all duration-300 ${
                  isScrolled ? "text-[0px] opacity-0 h-0" : "text-[10px] opacity-100 h-auto"
                }`}>
                  Intellectual wisdom in technology
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {site.nav?.map((n) => (
                <Link
                  key={n.href}
                  href={n.href.startsWith("#") ? `/${n.href}` : n.href}
                  onClick={(e) => handleNavigation(e, n.href)}
                  className="text-base font-medium text-white/90 hover:text-[#007aff] transition-all duration-300 relative group"
                >
                  {n.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#007aff] to-[#00f0ff] transition-all duration-300 group-hover:w-full rounded-full"></span>
                </Link>
              ))}
            </nav>

            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((s) => !s)}
              className="lg:hidden p-2 text-white hover:text-[#007aff] transition-colors duration-300"
            >
              <span className="text-2xl">{open ? "✕" : "☰"}</span>
            </button>
          </div>

          {open && (
            <div className="absolute left-0 right-0 top-full bg-[#030C20]/95 backdrop-blur-xl border-b border-white/10 lg:hidden shadow-2xl animate-slide-down">
              <div className="flex flex-col p-6 gap-4">
                {site.nav?.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href.startsWith("#") ? `/${n.href}` : n.href}
                    onClick={(e) => handleNavigation(e, n.href)}
                    className="text-lg font-medium text-white/90 hover:text-[#007aff] transition-all duration-300 hover:translate-x-2"
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
