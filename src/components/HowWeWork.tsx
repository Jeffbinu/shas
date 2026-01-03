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
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative sm:py-12 overflow-hidden">
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.03); opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>

      <div className="relative px-4 sm:px-8 lg:px-16">
        {/* Background Glow */}
        <div className="absolute -top-[20%] left-[-10%] w-[45%] h-[45%] bg-[#044d9b] rounded-full mix-blend-screen blur-[140px] opacity-40 pointer-events-none" />

        {/* Header */}
        <div
          className={`
            relative text-center mb-20 transition-all duration-700 ease-out
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <div className="absolute top-0 left-0 w-full h-[200px] pointer-events-none flex justify-center items-center">
            <div className="w-[30%] h-full bg-[#044d9b] rounded-full mix-blend-screen blur-[120px] opacity-40" />
            <div className="w-[30%] h-full bg-[#D93068] rounded-full mix-blend-screen blur-[120px] opacity-40" />
          </div>

          <div className="relative z-10 inline-flex items-center mb-6 bg-white rounded-full">
            <span className="px-4 py-1.5  text-[#0a1525] text-sm font-medium font-poppins">
              Our process
            </span>
          </div>

          <h2 className="relative z-10 text-4xl sm:text-5xl lg:text-6xl  text-white font-syne font-bold">
            How We Work
          </h2>
        </div>

        {/* CONTENT GRID */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[45%_55%] items-center gap-20">
          {/* LEFT – Orb Card */}
          <div
            className={`
              flex justify-center lg:justify-end transition-all duration-700 ease-out
              ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}
            `}
          >
            <div
              className="relative w-[90vw] sm:w-[520px] lg:w-[600px] h-[75vh] sm:h-[70vh] lg:h-[90vh] rounded-[3rem] border border-white/10 shadow-2xl "
              style={{
                background:
                  "linear-gradient(180deg, rgba(40,46,108,0.2) 0%, rgba(189,213,244,0.05) 100%)",
                backdropFilter: "blur(30px)",
              }}
            >
              {/* ORB */}
              <div className="absolute -top-[-5%] -left-[20%] w-[90%] aspect-square rounded-full overflow-hidden animate-pulse-slow border border-white/5">
                <div className="absolute inset-0 bg-[#020617]" />
                <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-[#007aff] rounded-full mix-blend-screen blur-[60px] opacity-80" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-[#D93068] rounded-full mix-blend-screen blur-[60px] opacity-60" />
                <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] bg-[#22d3ee] rounded-full mix-blend-screen blur-2xl opacity-50" />

                <div
                  className="absolute inset-0 opacity-40 mix-blend-soft-light"
                  style={{ backgroundImage: "url('/hero/noise.png')" }}
                />

                <div className="relative h-full w-full flex flex-col justify-center px-8 pl-[30%]">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-6 leading-tight font-poppins">
                    SIMPLE,
                    <br />
                    TRANSPARENT,
                    <br />
                    EFFECTIVE
                  </h3>
                  <p className="text-blue-100/90 text-sm sm:text-base lg:text-lg leading-relaxed font-poppins font-light">
                    We craft digital experiences and intelligent solutions that
                    help businesses grow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT – Steps (HOVER PRESERVED) */}
          <div className="space-y-0">
            {data.steps.map((step, index) => (
              <div
                key={index}
                className={`
                  group flex gap-6 md:gap-8 min-h-[140px]
                  transition-all duration-700 ease-out
                  ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                `}
                style={{ transitionDelay: `${index * 180 + 300}ms` }}
              >
                {/* Timeline */}
                <div className="flex flex-col items-center relative w-6">
                  <div className="w-3.5 h-3.5 rounded-full bg-white mt-2.5 transition-all duration-500 group-hover:scale-125 group-hover:bg-blue-400 group-hover:shadow-[0_0_20px_rgba(96,165,250,0.8)]" />
                  {index < data.steps.length - 1 && (
                    <div className="absolute top-4 bottom-[-20px] left-[13px] w-[4px] border-l-2 border-dotted border-white/20 group-hover:border-white/40 transition-colors duration-500" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-12 w-full transition-transform duration-500 group-hover:translate-x-2">
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300  w-[80%]">
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
