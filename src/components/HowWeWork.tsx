"use client";
import React, { useEffect, useRef, useState } from "react";

interface HowWeWorkProps {
  data: {
    title: string;
    subtitle?: string;
    steps: { title: string; desc: string }[];
  };
}

export default function HowWeWork({ data }: HowWeWorkProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Trigger animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 lg:px-8 ">
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.03); opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>

      <div className="relative ">
        <div className=" absolute  h-[40%] w-[40%] left-[0] top-[-20%] h-full bg-[#044d9b] rounded-full mix-blend-screen blur-[120px] opacity-40" />

        {/* Header */}
        <div className="relative text-center mb-16 md:mb-20">
          <div className="absolute h-[200px] top-0 left-0 w-full  pointer-events-none z-0 flex justify-center items-center">
            <div className="w-[30%] h-full bg-[#044d9b] rounded-full mix-blend-screen blur-[120px] opacity-40" />
            <div className="w-[30%] h-full bg-[#D93068] rounded-full mix-blend-screen blur-[120px] opacity-40 " />
          </div>

          <div className="relative z-10 inline-flex items-center mb-6">
            <span className="px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium">
              Our process
            </span>
          </div>
          <h2 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            How We Work
          </h2>
        </div>

        {/* 
           CONTENT GRID
        */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[45%_55%]  items-center justify-center ">
          {/* LEFT COLUMN: The "Orb" Card */}
          <div
            className={`relative order-1 lg:order-1 flex justify-center lg:justify-end pr-0 lg:pr-8 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* The Glassy Card Container */}
            <div
              className="relative w-[600px] h-[90vh] rounded-[3rem] shadow-2xl z-10 border border-white/10"
              style={{
                background:
                  "linear-gradient(180deg, rgba(40, 46, 108, 0.2) 0%, rgba(189, 213, 244, 0.05) 100%)",
                backdropFilter: "blur(30px)",
              }}
            >
              {/* THE ORB */}
              <div className="absolute -top-[-5%] -left-[20%] w-[90%] aspect-square rounded-full shadow-2xl overflow-hidden z-20 animate-pulse-slow border border-white/5">
                {/* Base Dark */}
                <div className="absolute inset-0 bg-[#020617]" />

                {/* Gradients */}
                <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-[#007aff] rounded-full mix-blend-screen blur-[60px] opacity-80" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-[#D93068] rounded-full mix-blend-screen blur-[60px] opacity-60" />
                <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] bg-[#22d3ee] rounded-full mix-blend-screen blur-2xl opacity-50" />

                {/* Noise */}
                <div
                  className="absolute inset-0 opacity-40 mix-blend-soft-light z-10"
                  style={{
                    backgroundImage: "url('/hero/noise.png')",
                  }}
                />

                {/* Content */}
                <div className="relative h-full w-full flex flex-col justify-center items-start px-8 pl-[30%]">
                  <h3 className="text-3xl md:text-4xl lg:text-[2rem] font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
                    SIMPLE,
                    <br />
                    TRANSPARENT,
                    <br />
                    EFFECTIVE
                  </h3>
                  <p className="text-blue-100/90 text-sm lg:text-[1.5rem] md:text-base leading-relaxed font-medium drop-shadow-md">
                    We craft digital experiences and intelligent solutions that
                    help businesses grow.
                  </p>
                </div>
              </div>

              {/* Back Glow */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[3rem] pointer-events-none z-0">
                <div className="absolute -top-20 -left-20 w-[60%] h-[60%] bg-blue-500/10 blur-[80px]"></div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Process Steps */}
          <div className="order-2 lg:order-2 space-y-0 pt-4 ">
            {data.steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-6 md:gap-8 relative min-h-[140px] group transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                style={{
                  // Staggered Animation Logic
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${index * 200 + 400}ms`, // Delay based on index (starts after 300ms)
                }}
              >
                {/* Vertical Timeline */}
                <div className="flex flex-col items-center flex-shrink-0 relative w-6">
                  {/* Dot */}
                  <div className="w-3.5 h-3.5 rounded-full bg-white relative z-20 mt-2.5  group-hover:scale-125 group-hover:bg-blue-400 group-hover:shadow-[0_0_20px_rgba(96,165,250,0.8)] transition-all duration-500"></div>

                  {/* Dotted Line Connection */}
                  {index < data.steps.length - 1 && (
                    <div className="absolute top-4 bottom-[-20px] left-[13px] w-[4px] border-l-2 border-dotted border-white/20 group-hover:border-white/40 transition-colors duration-500"></div>
                  )}
                </div>

                {/* Content */}
                <div className="pb-12 w-full cursor-default transform transition-transform duration-500 group-hover:translate-x-2">
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-gray-400 w-full text-base md:text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
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
