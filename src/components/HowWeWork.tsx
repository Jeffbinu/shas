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
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-[#030C20]">
      {/* 
         ANIMATIONS 
      */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>

      {/* Global Background Glow (Subtle) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20 md:mb-24">
          <div className="inline-flex items-center mb-6">
            <span className="px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium">
              Our process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            How We Work
          </h2>
        </div>

        {/* 
           CONTENT GRID
           - Changed from lg:grid-cols-2 to lg:grid-cols-[40%_60%]
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-16 lg:gap-24 items-start">
          {/* LEFT COLUMN: The "Orb" Card (40%) */}
          <div className="relative order-1 lg:order-1 mt-12 lg:mt-0">
            {/* The Dark Back Card - Now w-full to fill the 40% col */}
            <div className="relative w-full h-[100vh] min-h-[600px] bg-[#0B1221] border border-white/5 rounded-[3rem] shadow-2xl">
              {/* THE ORB (Overhanging Top-Left) */}
              <div className="absolute -top-[-10%] -left-[10%] w-[90%] aspect-square rounded-full shadow-2xl overflow-hidden z-10 animate-pulse-slow">
                {/* 1. Base Dark Blue */}
                <div className="absolute inset-0 bg-[#030C20]" />

                {/* 2. Color Blobs (Hero Colors) */}
                <div className="absolute top-[-0%] right-[-10%] w-[80%] h-[80%] bg-[#017BFC] rounded-full mix-blend-screen blur-[60px] opacity-80" />
                <div className="absolute top-[-10%] left-[-5%] w-[30%] h-[50%] bg-[#D93068] rounded-full mix-blend-screen blur-[60px] opacity-80" />

                {/* 3. Noise Overlay */}
                <div
                  className="absolute inset-0 opacity-90 mix-blend-soft-light z-10"
                  style={{
                    backgroundImage: "url('/hero/noise.png')",
                    backgroundRepeat: "repeat",
                    backgroundSize: "128px 128px",
                  }}
                />

                {/* Orb Content */}
                <div className="relative h-full w-full flex flex-col justify-center px-10 md:px-14">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg text-center">
                    SIMPLE,
                    <br />
                    TRANSPARENT,
                    <br />
                    EFFECTIVE
                  </h3>
                  <p className="text-blue-100/80 text-sm md:text-base leading-relaxed font-light drop-shadow-md text-center">
                    We craft digital experiences and intelligent solutions that
                    help businesses grow, compete, and lead in the modern world.
                  </p>
                </div>
              </div>

              {/* Decorative Glow behind the Orb (on the card) */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[3rem] pointer-events-none">
                <div className="absolute -top-20 -left-20 w-[60%] h-[60%] bg-blue-500/5 blur-[80px]"></div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Process Steps (60%) */}
          <div className="order-2 lg:order-2 space-y-2 pt-8 pl-4 lg:pl-12">
            {data.steps.map((step, index) => (
              <div key={index} className="flex gap-8 relative min-h-[140px]">
                {/* Vertical Timeline Line */}
                <div className="flex flex-col items-center flex-shrink-0 relative w-6">
                  {/* Dot */}
                  <div className="w-2.5 h-2.5 rounded-full bg-white relative z-10 mt-2.5 shadow-[0_0_12px_rgba(255,255,255,0.8)]"></div>

                  {/* Dashed Line - Centered below dot */}
                  {index < data.steps.length - 1 && (
                    <div className="absolute top-4 bottom-[-20px] left-[14px] w-px border-l border-dashed border-white/20"></div>
                  )}
                </div>

                {/* Content */}
                <div className="pb-12 group cursor-default">
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl group-hover:text-gray-300 transition-colors duration-300">
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
