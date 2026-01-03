"use client";

import React, { useEffect, useRef, useState } from "react";

export default function ProductFeatures() {
  const sectionRef = useRef<HTMLElement>(null);
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
      className="relative sm:py-12 overflow-hidden"
    >
      <div className="relative mx-auto px-4 sm:px-8 lg:px-16">
        {/* HEADER */}
        <div
          className={`
            relative text-center mb-20 transition-all duration-700 ease-out
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <div className="absolute h-[200px] top-0 left-0 w-full pointer-events-none flex justify-center items-center">
            <div className="w-[30%] h-full bg-[#044d9b] rounded-full mix-blend-screen blur-[120px] opacity-40" />
            <div className="w-[30%] h-full bg-[#D93068] rounded-full mix-blend-screen blur-[120px] opacity-40" />
          </div>

          <h2 className="relative z-10 text-4xl sm:text-4xl lg:text-4xl font-bold text-white tracking-tight font-syne">
            Product Features
          </h2>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[55%_40%] gap-12 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <div
            className={`
              order-2 lg:order-1 transition-all duration-700 ease-out
              ${
                inView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }
            `}
          >
            <h3 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight mb-8">
              <span className="text-[#3b82f6]">Future-Ready Solutions,</span>
              <br />
              <span className="text-[#3b82f6]">Built To Perform</span>
            </h3>

            <div className="text-gray-300/90 text-base sm:text-lg leading-relaxed mb-12 text-justify lg:text-left">
              <p>
                At SHASHONK, we create solutions designed for performance,
                intelligence, and long-term growth. Our products are built on
                scalable, future-ready architecture, delivering fast, intuitive
                user experiences. With integrated analytics and BI capabilities,
                businesses can make confident, data-driven decisions. Security
                is embedded at every layer, ensuring reliable and protected
                environments. Our digital products don’t just work today—they
                continue to deliver value as your business evolves.
              </p>
            </div>

            {/* FEATURES ROW */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 border-t border-white/10 pt-8 mt-8">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    ☁️
                  </span>
                </div>
                <span className="text-sm font-medium text-white leading-tight">
                  Innovative
                  <br />
                  Interface Design
                </span>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                    🟣
                  </span>
                </div>
                <span className="text-sm font-medium text-white leading-tight">
                  Advanced
                  <br />
                  Analytics
                </span>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl drop-shadow-[0_0_15px_rgba(251,146,60,0.5)]">
                    🟠
                  </span>
                </div>
                <span className="text-sm font-medium text-white leading-tight">
                  Tailored Support
                  <br />
                  Excellence
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div
            className={`
              order-1 lg:order-2 flex justify-center lg:justify-end
              transition-all duration-700 ease-out
              ${
                inView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }
            `}
          >
            <div className="w-full max-w-md lg:max-w-full aspect-[4/5] bg-[#020617] border border-white/5 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              {/* Placeholder intentionally left clean */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
