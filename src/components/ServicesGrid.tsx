"use client";
import React, { useState } from "react";
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
  return (
    <section className="relative overflow-hidden py-16 bg-[#030C20]  lg:px-8 ">
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[30%] bg-[#D93068] rounded-full mix-blend-screen blur-[120px] opacity-30" />

      <div className="relative px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center mb-6">
            <span className="px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            What We do
          </h2>
        </div>

        {/* SCROLLABLE GRID */}
        <div className="flex gap-6 lg:gap-8 overflow-x-auto scrollbar-hide pb-10 snap-x snap-mandatory px-4 -mx-4">
          {items.map((service, idx) => (
            <div
              key={idx}
              className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[30%] snap-center"
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
      {/* 
         1. BASE BACKGROUND (Dark Gradient) 
      */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: service.bgGradient }}
      />

      {/* 
         2. HOVER BACKGROUND (Solid Blue)
         - Duration increased to 700ms for extra smoothness
         - Easing ensures it doesn't feel linear/robotic
      */}
      <div
        className={`absolute inset-0 z-1 bg-[#007aff] transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${isHovering ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* 
         3. BIG BACKGROUND ICON
         - Subtle rotation and fade
      */}
      <div
        className={`absolute top-0 right-[-40px] h-[70%] w-[70%] pointer-events-none z-0 transition-all duration-700 ease-out
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
          width={100}
          height={100}
          className="object-contain h-full w-full"
        />
      </div>

      {/* 
         4. CONTENT CONTAINER
      */}
      <div className="relative z-10 h-full p-8 flex flex-col">
        {/* COLLAPSED STATE (Default) */}
        {!isHovering && (
          <div className="flex flex-col h-full animate-in fade-in duration-300 absolute inset-0 p-8">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-medium">
                Our Services
              </span>
            </div>

            <div className="flex-grow" />

            <div className="space-y-3 mb-8">
              <h3 className="text-4xl md:text-5xl font-bold text-[#3b82f6]">
                {service.title}
              </h3>
              <p className="text-white font-medium text-lg leading-snug">
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

        {/* EXPANDED STATE (Hover) */}
        {isHovering && (
          <div className="flex flex-col h-full">
            {/* Top Badge & Icon - Fade in quickly */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-xs font-medium">
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
            </div>

            <div className="flex-grow" />

            {/* 
               Main Text Block (Subtitle + Desc)
               - Applies the 'animate-glide-smooth' class
               - This moves both elements UP together from the bottom
            */}
            <div className="space-y-4 mb-auto animate-glide-smooth">
              <h3 className="text-3xl font-bold text-white leading-tight">
                {service.subtitle}
              </h3>
              <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium">
                {service.expandedDesc || service.desc}
              </p>
            </div>

            {/* Dark Button - Also glides up, but slightly delayed for effect */}
            <div
              className="mt-6 flex justify-center animate-glide-smooth"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-12 h-12 rounded-full bg-[#0B1221] backdrop-blur-sm border border-white/10 flex items-center justify-center text-white shadow-xl">
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
