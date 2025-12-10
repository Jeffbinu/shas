/* eslint-disable react/no-unescaped-entities */
"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface OurStoryProps {
  image?: StaticImageData | string;
}

export default function OurStory({ image }: OurStoryProps) {
  return (
    <section className="relative py-16 md:py-24 bg-[#050a14] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          
          {/* Left: Headline Text */}
          <div className="flex flex-col justify-start pt-4">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-400 mb-2 leading-tight">
              Idea to impact
            </h3>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] leading-tight">
              The spark
              <br />
              that started
              <br />
              it all.
            </h3>
          </div>

          {/* Right: Story Paragraphs */}
          <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
            <p className="text-white font-medium">Hey there,</p>
            
            <p>
              SHASHONK started with a simple idea: what if building digital
              products didn't have to feel complicated? What if businesses—big or
              small—had a team they could rely on to turn their ideas into
              something smart, clean, and genuinely impactful?
            </p>

            <p>
              We're not here just to deliver projects—we're here to understand your
              goals, challenge the usual, and build digital experiences that
              actually make a difference. Whether it's crafting a slick website,
              building intelligent AI solutions, or shaping a brand from scratch, we
              bring energy, curiosity, and a "let's make it happen" attitude to every
              project.
            </p>

            <p>
              And while our tools and technology keep evolving, one thing hasn't
              changed:
              <br />
              <span className="text-white font-semibold block mt-2">
                we're still here to help ideas grow into something unforgettable.
              </span>
            </p>
          </div>
        </div>

        {/* Bottom Section: Full Width Banner Card */}
        <div className="relative w-full rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row h-[500px] md:h-[400px]">
          
          {/* Left: Image Side (50%) */}
          <div className="w-full md:w-1/2 relative h-1/2 md:h-full">
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
                  fill
                  className="object-cover"
                />
              )
            ) : (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white/20">
                Image Placeholder
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
