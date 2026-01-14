"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Imported Icons
import facebookIcon from "../../public/footer/facebook.png";
import linkedinIcon from "../../public/footer/linkedin.png";
import instagramIcon from "../../public/footer/instagram.png";
import youtubeIcon from "../../public/footer/youtube.png";

/* ---------- UTILITY ICONS (Phone & Mail) ---------- */
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
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
    width="25"
    height="25"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="text-[#007aff]"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
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

  // Social Media Configuration
  const socialLinks = [
    {
      name: "Facebook",
      icon: facebookIcon,
      href: "#", // Placeholder
    },
    {
      name: "LinkedIn",
      icon: linkedinIcon,
      href: "https://www.linkedin.com/in/sri-c-70019435b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", // Placeholder
    },
    {
      name: "Instagram",
      icon: instagramIcon,
      href: "https://www.instagram.com/shashonk_pvt_ltd?igsh=MTI2cXJwNWt6OXhkdA%3D%3D&utm_source=qr",
    },
    {
      name: "YouTube",
      icon: youtubeIcon,
      href: "#", // Placeholder
    },
  ];

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
          <div className="flex ">
            <div className="relative h-28 w-[60%] sm:w-[20%]">
              <Image
                src="/header/logo.svg"
                alt={`${site.title} logo`}
                fill
                className="object-contain"
              />
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
          <div className="flex gap-6 pt-2">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  className="object-contain"
                  fill 
                  sizes="20px"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
