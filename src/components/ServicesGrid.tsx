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
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-8 sm:py-12"
    >
      {/* Background Glow */}
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[30%] bg-[#D93068] rounded-full mix-blend-screen blur-[140px] opacity-30 pointer-events-none" />

      <div
        className={`
          relative px-4 sm:px-8 lg:px-16
          transition-all duration-700 ease-out
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
        `}
      >
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center mb-6 bg-white/10 border border-white/10 backdrop-blur-sm rounded-full px-4 py-1.5">
            <span className="text-white text-sm font-medium font-poppins">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl sm:text-4xl lg:text-4xl font-syne font-bold text-white">
            What We Do
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
  return (
    <div className="group relative rounded-[2.5rem] overflow-hidden cursor-pointer h-[450px] lg:h-[30rem] shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 border border-white/5">
      {/* 1. Base Gradient Background */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-700"
        style={{ background: service.bgGradient }}
      />

      {/* 2. Blue Hover Background (Opacity Fade Only) */}
      <div className="absolute inset-0 z-[1] bg-[#007aff] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />

      {/* 3. Large Background Icon (Decoration) */}
      <div className="absolute top-0 right-[-40px] h-[70%] w-[70%] pointer-events-none z-[2] opacity-10 group-hover:opacity-20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-700 ease-out origin-top-right">
        <Image
          src={service.icon}
          alt=""
          width={120}
          height={120}
          className="object-contain h-full w-full grayscale group-hover:grayscale-0 brightness-200"
        />
      </div>

      {/* 4. Content Container */}
      <div className="relative z-10 h-full p-8 flex flex-col">
        {/* Top Label */}
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-medium font-poppins group-hover:bg-white/20 group-hover:border-white/30 transition-colors duration-300">
            Our Services
          </span>
        </div>

        {/* Spacer to push content down */}
        <div className="flex-grow" />

        {/* Text Content Area */}
        <div className="relative flex flex-col justify-end">
          {/* TITLE: Collapses to 0 height, causing Subtitle to move UP */}
          <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-[100px] opacity-100 group-hover:max-h-0 group-hover:opacity-0">
            <h3 className="text-2xl md:text-3xl font-bold text-[#3b82f6] font-syne leading-tight mb-3">
              {service.title}
            </h3>
          </div>

          {/* SUBTITLE: Moves Up naturally because Title collapsed */}
          <div className="transform transition-transform duration-500 ease-in-out">
            <h3 className="text-xl md:text-xl lg:text-xl font-bold text-white font-syne leading-tight group-hover:scale-105 group-hover:origin-left transition-all duration-500">
              {service.subtitle}
            </h3>
          </div>

          {/* DESCRIPTION: Expands Height & Fades In (No Translate) */}
          <div className="overflow-hidden transition-all duration-700 ease-in-out max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 group-hover:mt-4">
            <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium">
              {service.expandedDesc || service.desc}
            </p>
          </div>
        </div>

        {/* Bottom Action Area */}
        <div className="mt-8 flex justify-center lg:justify-start">
          <div className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 group-hover:bg-[#0B1221] group-hover:text-white group-hover:border-white/20 group-hover:scale-110 group-hover:shadow-xl transition-all duration-500">
            <svg
              className="w-5 h-5 transition-transform duration-500 group-hover:rotate-[-45deg]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
