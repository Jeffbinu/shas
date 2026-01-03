"use client";

import React, { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";

interface ServiceItem {
  title: string;
  subtitle: string;
  desc: string;
  icon: StaticImageData | string;
  bgGradient: string;
  expandedDesc?: string;
}

interface ServicesGridProps {
  items: ServiceItem[];
}

export default function ServicesGrid({ items }: ServicesGridProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden  sm:py-12 "
    >
      {/* Background Glow */}
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[30%] bg-[#D93068] rounded-full mix-blend-screen blur-[140px] opacity-30" />

      <div
        className={`
          relative px-4 sm:px-8 lg:px-16
          transition-all duration-700 ease-out
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
        `}
      >
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center mb-6 bg-white rounded-full ">
            <span className="px-4 py-1.5  text-[#0a1525] text-sm font-medium font-poppins">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-syne font-bold text-white">
            What We do
          </h2>
        </div>

        {/* Scrollable Cards */}
        <div className="flex gap-6 lg:gap-8 overflow-x-auto scrollbar-hide pb-10 snap-x snap-mandatory px-2 -mx-2">
          {items.map((service, idx) => (
            <div
              key={idx}
              className="min-w-[88vw] sm:min-w-[70vw] md:min-w-[48vw] lg:min-w-[30%] snap-center"
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: ServiceItem }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="relative group rounded-[2rem] overflow-hidden cursor-pointer h-[420px] lg:h-[35rem] shadow-lg hover:shadow-blue-500/30 transition-shadow duration-700"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Base Background */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: service.bgGradient }}
      />

      {/* Hover Background */}
      <div
        className={`
          absolute inset-0 z-[1] bg-[#007aff]
          transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${isHovering ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Large Background Icon */}
      <div
        className={`
          absolute top-0 right-[-40px] h-[70%] w-[70%]
          pointer-events-none z-0
          transition-all duration-700 ease-out
          ${
            isHovering
              ? "opacity-20 scale-105 rotate-6"
              : "opacity-10 scale-100 rotate-0"
          }
        `}
      >
        <Image
          src={service.icon}
          alt=""
          width={120}
          height={120}
          className="object-contain h-full w-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full p-8 flex flex-col">
        {/* Collapsed */}
        {!isHovering && (
          <div className="absolute inset-0 p-8 flex flex-col transition-opacity duration-300">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-medium font-poppins">
                Our Services
              </span>
            </div>

            <div className="flex-grow" />

            <div className="space-y-3 mb-8">
              <h3 className="text-4xl md:text-5xl font-bold text-[#3b82f6] font-syne leading-tight">
                {service.title}
              </h3>
              <p className="text-white font-medium text-lg lg:text-2xl leading-snug font-poppins">
                {service.subtitle}
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/50">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Expanded */}
        {isHovering && (
          <div className="flex flex-col h-full">
            <div className="mb-6 transition-all duration-500">
              <span className="inline-block px-3 py-1 bg-white/20 border border-white/30 rounded-full text-white text-xs font-medium">
                Our Services
              </span>
            </div>

            <div className="mb-6">
              <Image
                src={service.icon}
                alt={service.title}
                width={60}
                height={60}
                className="object-contain brightness-0 invert"
              />
            </div>

            <div className="flex-grow" />

            <div className="space-y-4 mb-auto">
              <h3 className="text-3xl font-bold text-white leading-tight">
                {service.subtitle}
              </h3>
              <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium">
                {service.expandedDesc || service.desc}
              </p>
            </div>

            <div className="mt-6 flex justify-center">
              <div className="w-12 h-12 rounded-full bg-[#0B1221] border border-white/10 flex items-center justify-center text-white shadow-xl">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
