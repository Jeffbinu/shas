"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  project: string;
  location: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  companyLogo: any;
}

interface TestimonialsGridProps {
  items: TestimonialItem[];
}

export default function TestimonialsGrid({ items }: TestimonialsGridProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative sm:pt-12 overflow-hidden">
      <div className="relative mx-auto px-4 sm:px-8 lg:px-16">
        {/* HEADER */}
        <div
          className={`
            relative text-center mb-16 transition-all duration-700 ease-out
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <div className="absolute h-[200px] top-0 left-0 w-full pointer-events-none flex justify-center items-center">
            <div className="w-[30%] h-full bg-[#044d9b] rounded-full mix-blend-screen blur-[120px] opacity-40" />
            <div className="w-[30%] h-full bg-[#D93068] rounded-full mix-blend-screen blur-[120px] opacity-40" />
          </div>

          <div className="inline-block px-6 py-1.5 mb-6 bg-white rounded-full relative z-10">
            <span className="text-[#0a1525] text-sm font-bold tracking-wide">
              Reviews
            </span>
          </div>

          <h2 className="relative z-10 text-4xl sm:text-4xl lg:text-4xl font-bold text-white tracking-tight font-syne">
            Our Happy Clients
          </h2>
        </div>

        {/* SCROLL ROW */}
        <div
          className={`
            flex overflow-x-auto gap-6 lg:gap-8 pb-12 snap-x snap-mandatory
            -mx-4 px-4 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0
            scrollbar-hide transition-all duration-700 ease-out
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          {items.map((item, index) => (
            <TestimonialCard key={index} item={item} index={index} />
          ))}
        </div>
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
  const isFirst = index === 0;

  return (
    <div
      className={`
        relative flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[30%]
        snap-center flex flex-col justify-between
        rounded-[2rem] p-6 md:p-8
        border border-white/5
        transition-all duration-500
        ${
          isHovering
            ? "bg-[#1e293b] shadow-[0_0_30px_rgba(59,130,246,0.15)]"
            : "bg-[#0B1221]"
        }
      `}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* SHIMMER */}
      {isHovering && (
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer-quick" />
        </div>
      )}

      {/* TOP */}
      <div className="relative z-20">
        <div className="text-[#22d3ee] text-4xl font-serif leading-none mb-6 opacity-80 font-black">
          “
        </div>

        <p
          className={`
            text-sm leading-relaxed font-medium mb-10 transition-colors duration-300
            text-white
          `}
        >
          {item.quote}
        </p>

        <div className="text-right mb-10">
          <div className="text-white font-bold text-xl mb-1">{item.author}</div>
          <div className="text-gray-400 text-sm font-medium">{item.role}</div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="relative z-20">
        <div className="h-px w-full bg-white/10 mb-6"></div>

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

          <div className="relative h-8 w-20 brightness-0 invert transition-all duration-300">
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
