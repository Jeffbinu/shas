"use client";
import Image from "next/image";

// Simple SVG Icons for Phone/Email/Socials
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
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
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
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
    viewBox="0 0 24 24"
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
    viewBox="0 0 24 24"
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
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
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
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

export default function SiteFooter({
  site,
}: Readonly<{
  site: {
    title: string;
    contact?: { email?: string; phone?: string };
  };
}>) {
  return (
    <footer className="py-16 lg:px-16 bg-[#030C20] border-t border-white/5">
      <div className="  flex flex-col items-start gap-10">
        {/* 1. LOGO SECTION */}
        <div>
          <div className="flex items-center gap-3 mb-1">
            {/* Logo Icon */}
            <div className="relative w-10 h-10">
              <Image
                src="/header/sLogo.png"
                alt={`${site.title} logo`}
                fill
                className="object-contain"
              />
            </div>

            {/* Logo Text Stack */}
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#00aaff] tracking-wide leading-none">
                {site.title.toUpperCase()}
              </span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">
                Intellectual wisdom in technology
              </span>
            </div>
          </div>
        </div>

        {/* 2. DESCRIPTION */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl font-light">
          Shashonk is a technology-driven company specializing in web and mobile
          app development, BI visualization, and machine learning solutions. We
          turn ideas into innovative digital experiences.
        </p>

        {/* 3. CONTACT INFO */}
        <div className="flex flex-col gap-4">
          {site.contact?.phone && (
            <div className="flex items-center gap-3 group cursor-pointer">
              <PhoneIcon />
              <span className="text-white text-base hover:text-[#007aff] transition-colors">
                {site.contact.phone}
              </span>
            </div>
          )}
          {site.contact?.email && (
            <div className="flex items-center gap-3 group cursor-pointer">
              <MailIcon />
              <span className="text-white text-base hover:text-[#007aff] transition-colors">
                {site.contact.email}
              </span>
            </div>
          )}
        </div>

        {/* 4. SOCIAL ICONS */}
        <div className="flex gap-4 pt-2">
          {[
            { Icon: FacebookIcon, href: "#" },
            { Icon: LinkedInIcon, href: "#" },
            { Icon: InstagramIcon, href: "#" },
            { Icon: YoutubeIcon, href: "#" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="w-10 h-10 rounded-full bg-[#007aff] text-white flex items-center justify-center hover:bg-[#0062cc] hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-500/20"
            >
              <social.Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
