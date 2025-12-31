"use client";
import React, { useState } from "react";
import Image from "next/image";

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  project: string;
  location: string;
  companyLogo: string;
}

interface TestimonialsGridProps {
  items: TestimonialItem[];
}

export default function TestimonialsGrid({ items }: TestimonialsGridProps) {
  return (
    <section className="pt-16  lg:px-8  overflow-hidden">
      {/* Header Section */}
      <div className="text-center relative mb-16">
        <div className="absolute h-[200px] top-0 left-0 w-full  pointer-events-none z-0 flex justify-center items-center">
          <div className="w-[30%] h-full bg-[#044d9b] rounded-full mix-blend-screen blur-[120px] opacity-40" />
          <div className="w-[30%] h-full bg-[#D93068] rounded-full mix-blend-screen blur-[120px] opacity-40 " />
        </div>
        <div className="inline-block px-6 py-1.5 mb-6 bg-white rounded-full">
          <span className="text-[#0a1525] text-sm font-bold tracking-wide uppercase">
            Reviews
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          Our Happy Clients
        </h2>
      </div>

      {/* Scrollable Grid Layout */}
      <div className="flex overflow-x-auto gap-6 lg:gap-8 pb-12 snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
        {items.map((item, index) => (
          <TestimonialCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({
  item,
  index,
}: {
  item: TestimonialItem;
  index: number;
}) {
  const [isHovering, setIsHovering] = useState(false);

  const cardClasses = `
    flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[30%] snap-center
    flex flex-col justify-between 
    rounded-[2rem] p-8 md:p-10
    border border-white/5 
    transition-all duration-500
    ${
      isHovering
        ? "bg-[#1e293b] shadow-[0_0_30px_rgba(59,130,246,0.15)] -translate-y-0"
        : "bg-[#0B1221]"
    }
  `;
  const isFirst = index === 0;
  const quoteTextColor = isFirst ? "text-[#22d3ee]" : "text-white";

  return (
    <div
      className={`relative overflow-hidden ${cardClasses}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* 
         1. GLOSSY SHIMMER (One-time on Hover) 
      */}
      {isHovering && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* A wide, soft white gradient sweeping across */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer-quick" />
        </div>
      )}

      {/* Top Section */}
      <div className="relative z-20">
        <div className="text-[#22d3ee] text-6xl font-serif leading-none mb-6 opacity-80 font-black">
          “
        </div>
        <p
          className={`${quoteTextColor} text-lg leading-relaxed font-medium mb-10 transition-colors duration-300`}
        >
          {item.quote}
        </p>
        <div className="text-right mb-10">
          <div className="text-white font-bold text-xl mb-1">{item.author}</div>
          <div className="text-gray-400 text-sm font-medium">{item.role}</div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-20">
        <div className="h-px w-full bg-white/10 mb-6 transition-colors duration-300 group-hover:bg-white/20"></div>
        <div className="flex items-end justify-between">
          <div className="space-y-1.5">
            <div className="text-gray-500 text-[11px] md:text-xs font-medium uppercase tracking-wider">
              Star Rating - 5/5
            </div>
            <div className="text-gray-400 text-xs font-medium">
              Project - {item.project}
            </div>
            <div className="text-gray-500 text-xs font-medium">
              {item.location}
            </div>
          </div>

          <div className="relative h-8 w-28 opacity-90 grayscale hover:grayscale-0 transition-all duration-300">
            <Image
              src={item.companyLogo}
              alt="Company Logo"
              fill
              className="object-contain object-right-bottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
