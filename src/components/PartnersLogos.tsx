"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef } from "react";

export default function PartnersLogos({ logos }: { logos: StaticImageData[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Adjust speed here (pixels per frame)

    const animate = () => {
      if (!scrollContainer) return;

      scrollPosition += scrollSpeed;

      // Reset scroll position for infinite loop
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Duplicate logos for infinite scroll effect
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-[#0a1628] via-[#0d1d35] to-[#0a1628] overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>

      <div className="relative">
        {/* Quote Section */}
        <div className="text-center mb-12 md:mb-16">
          <blockquote className="text-[#60a5fa] font-medium text-xl md:text-2xl lg:text-3xl mb-4 leading-relaxed">
            Technology is best when it brings people together.
          </blockquote>
          <div className="text-white/70 text-base md:text-lg font-light">
            — Matt Mullenweg
          </div>
        </div>

        <div className="mb-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        {/* Logos Slider Section */}
        <div className="relative">
          {/* Scrolling container */}
          <div
            ref={scrollRef}
            className="flex items-center gap-12 md:gap-16 lg:gap-20 overflow-x-hidden py-8"
            style={{ scrollBehavior: "auto" }}
          >
            {duplicatedLogos.map((src, index) => {
              const isCenter = index === Math.floor(duplicatedLogos.length / 4);

              return (
                <div
                  key={`logo-${index}`}
                  className={`
                    flex-shrink-0 
                    transition-all 
                    duration-300 
                    ease-out
                    ${
                      isCenter
                        ? "scale-110 opacity-100 brightness-110"
                        : "opacity-60 grayscale hover:grayscale-0"
                    }
                    hover:scale-125 
                    hover:opacity-100
                    cursor-pointer
                  `}
                  style={{
                    filter: isCenter ? "none" : "grayscale(100%)",
                  }}
                >
                  <Image
                    src={src}
                    alt={`partner-logo-${index}`}
                    width={50}
                    height={50}
                    className="h-8 md:h-8 w-auto object-contain select-none"
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>
    </section>
  );
}
