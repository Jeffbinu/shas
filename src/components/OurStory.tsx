/* eslint-disable react/no-unescaped-entities */
"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface OurStoryProps {
  image?: StaticImageData | string;
}

export default function OurStory({ image }: OurStoryProps) {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#0a1628] via-[#0d1d35] to-[#0a1628] overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="relative">
            {/* Large background text */}
            <div className="absolute -top-8 -left-4 text-[80px] md:text-[100px] lg:text-[120px] leading-[0.85] font-bold text-white/[0.03] select-none pointer-events-none hidden lg:block">
              Idea to impact
              <br />
              <span className="text-[60px] md:text-[70px] lg:text-[80px]">
                that started
              </span>
            </div>

            <div className="relative z-10 space-y-6">
              {/* About us pill */}
              <div className="inline-flex items-center">
                <span className="px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium">
                  About us
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Our Story
              </h2>

              {/* Content */}
              <div className="space-y-4 text-white/70 text-base md:text-lg leading-relaxed max-w-xl">
                <p className="text-white/80 font-medium">Hey there,</p>
                
                <p>
                  <span className="text-white font-medium">SHASHONK</span> started with a simple idea: what if building digital products didn't have to feel complicated? What if businesses—big or small—had a team they could rely on to turn their ideas into something smart, clean, and genuinely impactful?
                </p>

                <p>
                  We're not here just to deliver projects—we're here to understand your goals, challenge the usual, and build digital experiences that actually make a difference. Whether it's crafting a slick website, building intelligent AI solutions, or shaping a brand from scratch, we bring energy, curiosity, and a "let's make it happen" attitude to every project.
                </p>

                <p>
                  And while our tools and technology keep evolving, one thing hasn't changed:
                </p>

                <p className="text-white font-semibold">
                  we're still here to help ideas grow into something unforgettable.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image Card */}
          <div className="relative group">
            {/* Glow effect behind card */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-[#0f6fff] via-[#0b5cdc] to-[#0952c9] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row items-center">
                {/* Image section */}
                <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                  {image ? (
                    typeof image === 'string' ? (
                      <img
                        src={image}
                        alt="Team collaboration"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Image
                        src={image}
                        alt="Team collaboration"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    )
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
                      <div className="text-white/40 text-6xl">📋</div>
                    </div>
                  )}
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-600/30 md:to-transparent"></div>
                </div>

                {/* Text content */}
                <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-10">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 leading-tight">
                    Turning Vision Into Something Real
                  </h3>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed">
                    We believe great things happen when creativity meets technology.
                  </p>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-tr-full"></div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

