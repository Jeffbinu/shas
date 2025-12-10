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
        @keyframes wave-highlight {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          30% {
            opacity: 0.8;
          }
          70% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }
        
        @keyframes slide-up {
          from {
            transform: translateY(40px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-wave-highlight {
          animation: wave-highlight 1.5s ease-out infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
      
      <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#0a1525] via-[#0d1832] to-[#0a1525] overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/5 via-transparent to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
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

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {items.map((service, idx) => (
              <ServiceCard key={idx} service={service} />
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
      className="relative group rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer"
      style={{
        background: service.bgGradient,
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Animated wave highlight effect - ALWAYS visible on hover */}
      {isHovering && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/50 via-blue-400/30 to-transparent animate-wave-highlight"></div>
        </div>
      )}
      
      {/* Card content */}
      <div className="relative backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 h-[420px] lg:h-[35rem] flex flex-col">
        
        {/* Collapsed State - Default */}
        {!isHovering && (
          <>
            {/* Top badge */}
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/80 text-xs font-medium">
                Our Services
              </span>
            </div>

            {/* Icon */}
            <div className="mb-auto flex items-center justify-center py-8">
              <Image
                src={service.icon}
                alt={service.title}
                width={160}
                height={160}
                className="object-contain opacity-70 transition-opacity duration-500"
              />
            </div>

            {/* Text content */}
            <div className="space-y-3">
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2fa4ff] to-[#5cb8ff] bg-clip-text text-transparent">
                {service.title}
              </h3>
              <p className="text-white font-semibold text-base md:text-lg">
                {service.subtitle}
              </p>
            </div>

            {/* Bottom arrow button - Down */}
            <div className="mt-6 flex justify-center">
              <button 
                aria-label={`Learn more about ${service.title}`}
                className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition-all duration-300"
              >
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
              </button>
            </div>
          </>
        )}

        {/* Expanded State - On Hover */}
        {isHovering && (
          <div className="animate-slide-up flex flex-col h-full">
            {/* Top badge */}
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/80 text-xs font-medium">
                Our Services
              </span>
            </div>

            {/* Icon - Smaller */}
            <div className="flex items-center justify-center mb-6">
              <Image
                src={service.icon}
                alt={service.title}
                width={100}
                height={100}
                className="object-contain opacity-90"
              />
            </div>

            {/* Text content */}
            <div className="space-y-4 mb-auto">
              <p className="text-white font-bold text-xl md:text-2xl">
                {service.subtitle}
              </p>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                {service.expandedDesc || service.desc}
              </p>
            </div>

            {/* Bottom arrow button - Up */}
            <div className="mt-6 flex justify-center">
              <button 
                aria-label={`Collapse ${service.title}`}
                className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition-all duration-300"
              >
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
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
