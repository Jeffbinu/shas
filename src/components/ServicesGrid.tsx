"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface ServiceItem {
  title: string;
  subtitle: string;
  desc: string;
  icon: StaticImageData | string;
  bgGradient: string;
}

interface ServicesGridProps {
  items: ServiceItem[];
}

export default function ServicesGrid({ items }: ServicesGridProps) {
  return (
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
  );
}

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <div 
      className="relative group rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] cursor-pointer"
      style={{
        background: service.bgGradient,
      }}
    >
      {/* Card glow effect on hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Card content */}
      <div className="relative backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 min-h-[420px] flex flex-col">
        
        {/* Top badge */}
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/80 text-xs font-medium">
            Our Services
          </span>
        </div>

        {/* Icon */}
        <div className="mb-auto flex items-center justify-center py-8">
          {typeof service.icon === 'string' ? (
            <img
              src={service.icon}
              alt={service.title}
              className="w-40 h-40 object-contain opacity-70 group-hover:opacity-90 transition-opacity duration-500"
            />
          ) : (
            <Image
              src={service.icon}
              alt={service.title}
              width={160}
              height={160}
              className="object-contain opacity-70 group-hover:opacity-90 transition-opacity duration-500"
            />
          )}
        </div>

        {/* Text content */}
        <div className="space-y-3">
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2fa4ff] to-[#5cb8ff] bg-clip-text text-transparent">
            {service.title}
          </h3>
          <p className="text-white font-semibold text-base md:text-lg">
            {service.subtitle}
          </p>
          {service.desc && (
            <p className="text-white/60 text-sm">
              {service.desc}
            </p>
          )}
        </div>

        {/* Bottom arrow button */}
        <div className="mt-6 flex justify-center">
          <button 
            aria-label={`Learn more about ${service.title}`}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300 group-hover:scale-110"
          >
            <svg 
              className="w-5 h-5" 
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
      </div>
    </div>
  );
}