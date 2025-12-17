"use client";
import React from "react";

interface HowWeWorkProps {
  data: {
    title: string;
    subtitle?: string;
    steps: { title: string; desc: string }[];
  };
}

export default function HowWeWork({ data }: HowWeWorkProps) {
  return (
    <section className="relative py-12 md:py-16 lg:py-20  overflow-hidden">
      {/* Background gradient effects (Global) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center mb-4 md:mb-6">
            <span className="px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs md:text-sm font-medium">
              Our process
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
            How We Work
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN: The Design Card (Updated based on image) */}
          <div className="relative order-1 lg:order-1 mt-8 lg:mt-0">
            {/* The Dark Card Container */}
            <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-h-[40rem] bg-[#111928] border border-white/5 rounded-[2.5rem] shadow-2xl overflow-visible">
              
              {/* The Gradient Orb (Positioned Top-Left, Overhanging) */}
              <div className="absolute -top-10 -left-6 md:-top-[-5%] md:-left-[20%] w-[85%] aspect-square rounded-full shadow-2xl overflow-hidden z-10">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-600 to-purple-900 opacity-90"></div>
                
                {/* Noise/Texture Overlay (Optional for grit) */}
                <div className="absolute inset-0 bg-white/5 mix-blend-overlay"></div>
                
                {/* Content Inside the Orb */}
                <div className="relative h-full w-full flex flex-col justify-center items-center px-8 md:px-12 pt-8">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-md">
                    SIMPLE,
                    <br />
                    TRANSPARENT,
                    <br />
                    EFFECTIVE
                  </h3>
                  <p className="text-blue-50 text-sm md:text-base leading-relaxed w-[70%] drop-shadow-sm font-medium">
                    We craft digital experiences and intelligent solutions that help businesses grow, compete, and lead in the modern world.
                  </p>
                </div>
              </div>

              {/* Decorative faint glow behind the orb on the card */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[2.5rem]">
                 <div className="absolute -top-20 -left-20 w-[80%] h-[80%] bg-blue-500/10 blur-[80px]"></div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Process Steps */}
          <div className="space-y-0 order-2 lg:order-2 pt-4">
            {data.steps.map((step, index) => (
              <div key={index} className="flex gap-6 md:gap-8 group min-h-[120px]">
                {/* Vertical Timeline Line */}
                <div className="flex flex-col items-center flex-shrink-0 relative">
                  {/* Dot */}
                  <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-white relative z-10 mt-2.5 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                  
                  {/* Dashed Line (Connects to next item) */}
                  {index < data.steps.length - 1 && (
                    <div className="absolute top-3 bottom-[-100%] w-px border-l-2 border-dashed border-white/20"></div>
                  )}
                </div>

                {/* Content */}
                <div className="pb-12">
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-400 text-base leading-relaxed max-w-lg">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
