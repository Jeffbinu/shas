"use client";
import React from "react";

interface OurStoryProps {
  videoSrc: string;
}

export default function OurStory({ videoSrc }: OurStoryProps) {
  return (
    <section className="relative overflow-hidden bg-[#030C20] py-6">
      {/* 
        1. LOCAL ANIMATION DEFINITION
        We use a wider range (300% to -300%) to ensure the light starts 
        completely off-screen and exits completely off-screen.
      */}
      <style>{`
        @keyframes shimmer-move {
          0% { background-position: 300% center; }
          100% { background-position: -300% center; }
        }
      `}</style>

      <div className="relative mx-auto px-6">
        {/* Top Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block px-6 py-1.5 mb-6 bg-white rounded-full">
            <span className="text-[#0a1525] text-sm font-bold tracking-wide uppercase">
              About us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Our Story
          </h2>
        </div>

        {/* Middle Section: Split Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 lg:px-[2rem] ">
          {/* Left: Headline Text with ANIMATION */}
          <div className="flex flex-col justify-start pt-4">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-400 mb-2 leading-tight">
              Idea to impact
            </h3>

            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="inline-block text-transparent bg-clip-text bg-[linear-gradient(110deg,#08183B_45%,#ffffff_50%,#08183B_55%)] bg-[length:250%_90%] animate-[shimmer-move_9s_linear_infinite] pb-2">
                The spark
                <br />
                that started
                <br />
                it all.
              </span>
            </h3>
          </div>

          {/* Right: Story Paragraphs */}
          <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed font-light">
            <p className="text-white font-medium">Hey there,</p>

            <p>
              SHASHONK started with a simple idea: what if building digital
              products didn&apos;t have to feel complicated? What if
              businesses—big or small—had a team they could rely on to turn
              their ideas into something smart, clean, and genuinely impactful?
            </p>

            <p>
              We&apos;re not here just to deliver projects—we&apos;re here to
              understand your goals, challenge the usual, and build digital
              experiences that actually make a difference. Whether it&apos;s
              crafting a slick website, building intelligent AI solutions, or
              shaping a brand from scratch, we bring energy, curiosity, and a
              &quot;let&apos;s make it happen&quot; attitude to every project.
            </p>

            <p>
              And while our tools and technology keep evolving, one thing
              hasn&apos;t changed:
              <br />
              <span className="text-white font-semibold block mt-2">
                we&apos;re still here to help ideas grow into something
                unforgettable.
              </span>
            </p>
          </div>
        </div>

        {/* Bottom Section: Full Width Banner Card */}
        <div className="relative w-full rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row h-[500px] md:h-[400px]">
          {/* Left: Video Side (50%) */}
          <div className="w-full md:w-1/2 relative h-1/2 md:h-full">
            {videoSrc ? (
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-900 text-white/20">
                Video Placeholder
              </div>
            )}
          </div>

          {/* Right: Blue Content Side (50%) */}
          <div className="w-full md:w-1/2 bg-[#007aff] p-8 md:p-12 lg:p-16 flex flex-col justify-center h-1/2 md:h-full text-white">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Turning Vision
              <br />
              Into Something
              <br />
              Real
            </h3>
            <p className="text-white/90 text-sm md:text-base font-medium">
              We believe great things happen when creativity
              <br className="hidden md:block" />
              meets technology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
