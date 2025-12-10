// components/BlogPreviewGrid.tsx
import Image from "next/image";
import React from "react";

export default function BlogPreviewGrid() {
  // Data matching the text in the Figma screenshot
  const posts = [
    {
      id: 1,
      image: "/images/blog-1.png", // Replace with actual path
      title: "Successful MVP Launches That Changed the Game.",
      description:
        "Discover the secrets behind game-changing MVP launches! From lean startups to industry giants, explore how these innovative launches disrupted markets and paved the way for success. Click to uncover the strategies that revolutionized product development.",
    },
    {
      id: 2,
      image: "/images/blog-2.png", // Replace with actual path
      title: "How Our AI Product Development Company is Pioneering Innovation?",
      description:
        "Discover how our product development company pioneers innovation. From groundbreaking technologies to creative strategies, we're shaping the future. Click to explore our journey and join us in revolutionizing industries.",
    },
    {
      id: 3,
      image: "/images/blog-3.png", // Replace with actual path
      title:
        "Optimizing E-commerce Sales with AI-Driven Product Recommendations.",
      description:
        "Boost your e-commerce sales with AI-powered product recommendations. Learn how smart algorithms can enhance customer experience and drive conversions. Read our blog for actionable insights!",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#050a14]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-8 py-2 mb-6 bg-white rounded-full">
            <span className="text-[#0a1525] text-sm font-bold tracking-wide uppercase">
              Insights
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-widest uppercase">
            BLOG
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col bg-[#0f1623] rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-colors duration-300 p-5"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow px-2 pb-2">
                {/* Title Row with Arrow Button */}
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                    {post.title}
                  </h3>

                  {/* Arrow Icon Button */}
                  <button className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors group">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </button>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 line-clamp-4">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
