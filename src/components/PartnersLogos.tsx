"use client";

import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function PartnersLogos({ logos }: { logos: StaticImageData[] }) {
  const sliderLogos = [...logos, ...logos];
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-12 sm:py-12 overflow-hidden"
    >
      <div
        className={`
          relative z-10 px-4 sm:px-8 lg:px-16
          transition-all duration-700 ease-out
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        {/* Quote */}
        <div className="text-center mb-16">
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
            <span className="text-[#22d3ee]">
              “Technology is best when it brings people together.”
            </span>
          </blockquote>
          <div className="text-white/80 text-base sm:text-lg font-medium">
            – Matt Mullenweg
          </div>
        </div>

        <div className="w-full border-t border-dashed border-white/5 mb-10" />

        {/* Logos */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-scroll">
            {sliderLogos.map((src, index) => (
              <div
                key={index}
                className="mx-4 sm:mx-12 flex items-center justify-center   "
              >
                <Image
                  src={src}
                  alt={`partner-${index}`}
                  draggable={false}
                  className="h-8 sm:h-10 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full border-t border-dashed border-white/5 mt-10" />
      </div>
    </section>
  );
}
