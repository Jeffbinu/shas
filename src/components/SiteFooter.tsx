"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ---------- ICONS ---------- */
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="text-[#007aff]"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="text-[#007aff]"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

/* ---------- FOOTER ---------- */
export default function SiteFooter({
  site,
}: {
  site: {
    title: string;
    contact?: { email?: string; phone?: string };
  };
}) {
  const footerRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#030C20] border-t border-white/5 py-20"
    >
      <div
        className={`
          mx-auto max-w-8xl px-6 lg:px-16
          transition-all duration-700
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <div className="flex flex-col gap-10">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/header/sLogo.png"
                alt={`${site.title} logo`}
                fill
                className="object-contain"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#00aaff] tracking-wide leading-none">
                {site.title.toUpperCase()}
              </span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">
                Intellectual wisdom in technology
              </span>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl">
            Shashonk is a technology-driven company specializing in web and
            mobile app development, BI visualization, and machine learning
            solutions. We turn ideas into innovative digital experiences.
          </p>

          {/* CONTACT */}
          <div className="flex flex-col gap-4">
            {site.contact?.phone && (
              <div className="flex items-center gap-3 group">
                <PhoneIcon />
                <span className="text-white hover:text-[#007aff] transition-colors">
                  {site.contact.phone}
                </span>
              </div>
            )}

            {site.contact?.email && (
              <div className="flex items-center gap-3 group">
                <MailIcon />
                <span className="text-white hover:text-[#007aff] transition-colors">
                  {site.contact.email}
                </span>
              </div>
            )}
          </div>

          {/* SOCIALS */}
          <div className="flex gap-4 pt-2">
            {[FacebookIcon, LinkedInIcon, InstagramIcon, YoutubeIcon].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#007aff] text-white flex items-center justify-center hover:bg-[#0062cc] hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-500/20"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
