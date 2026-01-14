"use client";

import React, { useEffect, useRef, useState } from "react";

interface OurStoryProps {
  videoSrc: string;
}

export default function OurStory({ videoSrc }: OurStoryProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.05,
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-12 sm:py-8 overflow-hidden"
    >
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>

      <div
        className={`
          relative z-10 px-4 sm:px-8 lg:px-16
          transition-all duration-700 ease-out
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
        `}
      >
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl  text-white font-syne font-bold sm:py-12 ">
            Our Story
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[40%_55%] gap-12 lg:gap-20 mb-24">
          {/* Left */}
          <div className="space-y-4">
            <h3 className="text-4xl sm:text-4xl lg:text-5xl font-light text-gray-400">
              Idea to impact
            </h3>

            <h3 className="text-4xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-[linear-gradient(110deg,#08183B_45%,#ffffff_50%,#08183B_55%)] bg-[length:250%_100%] animate-[shimmer_8s_linear_infinite]">
                The spark
                <br />
                that started
                <br />
                it all.
              </span>
            </h3>
          </div>

          {/* Right */}
          <div className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
            <p className="text-white font-medium">Hey there,</p>

            <p>
              SHASHONK started with a simple idea: what if building digital
              products didn’t have to feel complicated? What if businesses—big
              or small—had a team they could rely on to turn their ideas into
              something smart, clean, and genuinely impactful?
            </p>

            <p>
              We’re not here just to deliver projects—we’re here to understand
              your goals, challenge the usual, and build digital experiences
              that actually make a difference. Whether it’s crafting a slick
              website, building intelligent AI solutions, or shaping a brand
              from scratch, we bring energy, curiosity, and a “let’s make it
              happen” attitude to every project.
            </p>

            <p className="text-white font-semibold">
              And while our tools and technology keep evolving, one thing hasn’t
              changed: we’re still here to help ideas grow into something
              unforgettable.
            </p>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="relative w-full rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row min-h-[420px]">
          {/* Video */}
          <div className="w-full md:w-1/2 h-[240px] md:h-auto">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 bg-[#007aff] p-10 sm:p-14 flex flex-col justify-center text-white">
            <h3 className="text-3xl sm:text-4xl lg:text-4xl mb-4 font-syne font-bold ">
              Turning Vision
              <br />
              Into Something
              <br />
              Real
            </h3>

            <p className="text-white/90 text-sm sm:text-base font-poppins leading-relaxed">
              We believe great things happen when creativity meets technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
