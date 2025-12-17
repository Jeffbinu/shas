"use client";
import React from "react";

export default function ProductFeatures() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Ambience (Optional to match dark theme) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Centered Top Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Product Features
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
              <span className="text-[#3b82f6]">Future-Ready Solutions,</span>
              <br />
              <span className="text-[#3b82f6]">Built To Perform</span>
            </h3>

            <div className="prose prose-lg prose-invert text-gray-300/90 leading-relaxed mb-12 max-w-none text-justify lg:text-left">
              <p>
                At SHASHONK, we create solutions designed for performance,
                intelligence, and long-term growth. Our products are built on
                scalable, future-ready architecture, delivering fast, intuitive user
                experiences. With integrated analytics and BI capabilities,
                businesses can make confident, data-driven decisions. Security is
                embedded at every layer, ensuring reliable and protected
                environments. Our digital products don&lsquo;t just work today—they
                continue to deliver value as your business evolves.
              </p>
            </div>

            {/* Feature Icons Row */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 border-t border-white/10 pt-8 mt-8">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 mb-4 flex items-center justify-center relative">
                   {/* Replace with actual 3D cloud icon image if available. Using emoji/placeholder for now */}
                   <span className="text-3xl md:text-4xl drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">☁️</span>
                </div>
                <span className="text-sm font-medium text-white leading-tight">
                  Innovative
                  <br />
                  Interface Design
                </span>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 mb-4 flex items-center justify-center relative">
                   <span className="text-3xl md:text-4xl drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">🟣</span>
                </div>
                <span className="text-sm font-medium text-white leading-tight">
                  Advanced
                  <br />
                  Analytics
                </span>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 mb-4 flex items-center justify-center relative">
                   <span className="text-3xl md:text-4xl drop-shadow-[0_0_15px_rgba(251,146,60,0.5)]">🟠</span>
                </div>
                <span className="text-sm font-medium text-white leading-tight">
                  Tailored Support
                  <br />
                  Excellence
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Dark Card Placeholder */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-full aspect-[4/5] bg-[#111827] border border-white/5 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              {/* Inner Gradient/Glow Effect for "Screen" feel */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-50"></div>
              
              {/* Optional: Add content or image inside this card later */}
              <div className="absolute inset-0 flex items-center justify-center">
                 {/* Placeholder for content inside the dark card */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
