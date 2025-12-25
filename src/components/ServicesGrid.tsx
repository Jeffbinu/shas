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
    <>
      <style jsx global>{`
        @keyframes shimmer-sweep-quick {
          0% { transform: translateX(-150%) skewX(-20deg); }
          100% { transform: translateX(250%) skewX(-20deg); }
        }

        .animate-shimmer-quick {
          animation: shimmer-sweep-quick 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }
        
        /* HIDE SCROLLBAR UTILITY */
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      <section className="relative overflow-hidden bg-[#030C20]">
        <div className="relative  mx-auto px-6 lg:px-8">
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

          <div className="flex gap-6 lg:gap-8 overflow-x-auto scrollbar-hide pb-10 snap-x snap-mandatory px-4 -mx-4">
            {items.map((service, idx) => (
              <div key={idx} className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[30%] snap-center">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ service }: { service: ServiceItem }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="relative group rounded-[2rem] overflow-hidden transition-all duration-500 cursor-pointer h-[420px] lg:h-[35rem]"
      style={{ background: service.bgGradient }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* 
          1. SHIMMER LAYER 
      */}
      {isHovering && (
        <div className="absolute inset-0 z-30 pointer-events-none">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer-quick" />
        </div>
      )}

      {/* 
          2. BIG ICON (Figma Style) 
      */}
      <div className="absolute top-0 right-[-40px] h-[70%] w-[70%] opacity-10 pointer-events-none z-0 transition-transform duration-700 group-hover:scale-105 group-hover:rotate-6">
        <Image
          src={service.icon}
          alt=""
          width={100}
          height={100}
          className="object-contain h-full w-full rotate-12"
        />
      </div>

      {/* 
          3. CONTENT LAYER 
      */}
      <div className="relative z-10 bg-white/[0.02] border border-white/5 h-full p-8 flex flex-col rounded-[2rem]">
        {/* COLLAPSED STATE (Default) */}
        {!isHovering && (
          <>
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-medium">
                Our Services
              </span>
            </div>

            {/* Middle Spacer */}
            <div className="flex-grow" />

            <div className="space-y-3 mb-8">
              <h3 className="text-4xl md:text-5xl font-bold text-[#3b82f6]">
                {service.title}
              </h3>
              <p className="text-white font-medium text-lg leading-snug">
                {service.subtitle}
              </p>
            </div>

            {/* Down Arrow */}
            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white transition-colors">
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
          </>
        )}

        {/* EXPANDED STATE (Hover) */}
        {isHovering && (
          <div className="animate-slide-up flex flex-col h-full">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/80 text-xs font-medium">
                Our Services
              </span>
            </div>

            {/* Small Icon */}
            <div className="mb-6">
              <Image
                src={service.icon}
                alt={service.title}
                width={60}
                height={60}
                className="object-contain opacity-100"
              />
            </div>

            <div className="space-y-4 mb-auto">
              <h3 className="text-2xl font-bold text-white">
                {service.subtitle}
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {service.expandedDesc || service.desc}
              </p>
            </div>

            {/* Up Arrow */}
            <div className="mt-6 flex justify-center">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
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
