// components/TestimonialsGrid.tsx
import React from "react";
import Image from "next/image";

// Updated interface to match all the data shown in the design card
interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  project: string;
  location: string;
  companyLogo: string; // URL path to the logo image
}

interface TestimonialsGridProps {
  items: TestimonialItem[];
}

export default function TestimonialsGrid({ items }: TestimonialsGridProps) {
  return (
    <section className="py-16 md:py-24 bg-[#050a14]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-1.5 mb-6 bg-white rounded-full">
            <span className="text-[#0a1525] text-sm font-bold tracking-wide uppercase">
              Reviews
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Our Happy Clients
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, index) => {
            // The first card in the design has Cyan text, others are White
            const isFirst = index === 0;
            const quoteColor = isFirst ? "text-[#22d3ee]" : "text-white";

            return (
              <div
                key={index}
                className="flex flex-col justify-between bg-[#0f1623] rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-colors duration-300"
              >
                {/* Top Section: Quote & Content */}
                <div>
                  {/* Quote Icon */}
                  <div className="text-[#22d3ee] text-6xl font-serif leading-none mb-4 opacity-80">
                    “
                  </div>

                  {/* Testimonial Text */}
                  <p className={`${quoteColor} text-lg leading-relaxed font-medium mb-8`}>
                    {item.quote}
                  </p>

                  {/* Author Info - Right Aligned */}
                  <div className="text-right mb-8">
                    <div className="text-white font-bold text-lg">
                      {item.author}
                    </div>
                    <div className="text-gray-500 text-sm font-medium">
                      {item.role}
                    </div>
                  </div>
                </div>

                {/* Separator Line */}
                <div className="h-px w-full bg-white/10 mb-6"></div>

                {/* Bottom Section: Details & Logo */}
                <div className="flex items-end justify-between">
                  {/* Project Details */}
                  <div className="space-y-1">
                    <div className="text-gray-500 text-xs font-medium">
                      Star Rating - 5/5
                    </div>
                    <div className="text-gray-500 text-xs font-medium">
                      Project - {item.project}
                    </div>
                    <div className="text-gray-500 text-xs font-medium">
                      {item.location}
                    </div>
                  </div>

                  {/* Company Logo */}
                  <div className="relative h-8 w-24 opacity-80 grayscale hover:grayscale-0 transition-all">
                    {/* Using Next/Image for optimization, ensure width/height match your actual logo aspect ratios */}
                    <Image 
                      src={item.companyLogo} 
                      alt="Company Logo" 
                      fill
                      className="object-contain object-right-bottom"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
