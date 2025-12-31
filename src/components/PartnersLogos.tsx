"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

export default function PartnersLogos({ logos }: { logos: StaticImageData[] }) {
  const sliderLogos = [...logos, ...logos];

  return (
    <div className="relative overflow-visible py-16 lg:px-8 bg-transparent">

      {/* Main Content */}
      <div className="relative z-10 mx-auto px-6">
        {/* Quote Section */}
        <div className="text-center mb-16 md:mb-20">
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
            <span className="text-[#22d3ee]">
              “Technology is best when it brings people together.”
            </span>
          </blockquote>
          <div className="text-white text-lg md:text-xl font-bold tracking-wide">
            – Matt Mullenweg
          </div>
        </div>

        {/* Top dashed line */}
        <div className="w-full border-t border-dashed border-white/10 mb-10"></div>

        {/* Logos Slider */}
        <div className="relative w-full group overflow-hidden">
          <div className="flex w-max animate-scroll">
            {sliderLogos.map((src, index) => (
              <div
                key={`logo-${index}`}
                className="flex items-center justify-center mx-8 md:mx-12"
              >
                <div className="relative h-8 md:h-10 w-auto cursor-pointer transition-transform duration-300 ease-out hover:scale-110">
                  <div className="relative h-full w-auto opacity-90 hover:opacity-100 transition-opacity duration-300">
                    <Image
                      src={src}
                      alt={`partner-logo-${index}`}
                      className="h-full w-auto object-contain brightness-0 invert"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom dashed line */}
        <div className="w-full border-t border-dashed border-white/10 mt-10"></div>
      </div>
    </div>
  );
}
