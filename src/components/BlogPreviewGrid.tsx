"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "../lib/blog-data";

export default function BlogPreviewGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-12 sm:py-12 overflow-hidden"
    >
      <div className="relative mx-auto px-4 sm:px-8 lg:px-16">
        {/* HEADER */}
        <div
          className={`
            relative text-center mb-16 transition-all duration-700 ease-out
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <div className="absolute h-[200px] top-0 left-0 w-full pointer-events-none flex justify-center items-center">
            <div className="w-[30%] h-full bg-[#044d9b] rounded-full mix-blend-screen blur-[120px] opacity-40" />
            <div className="w-[30%] h-full bg-[#D93068] rounded-full mix-blend-screen blur-[120px] opacity-40" />
          </div>

          <div className="inline-block px-8 py-2 mb-6 bg-white rounded-full relative z-10">
            <span className="text-[#0a1525] text-sm font-bold tracking-wide">
              Insights
            </span>
          </div>

          <h2 className="relative z-10 text-3xl  sm:text-4xl lg:text-4xl font-bold text-white tracking-widest font-syne uppercase">
            Blog
          </h2>
        </div>

        {/* GRID */}
        <div
          className={`
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8
            transition-all duration-700 ease-out
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block h-full"
            >
              <article className="flex flex-col h-full bg-[#0f1623] rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 p-5 hover:-translate-y-2">
                {/* IMAGE */}
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col flex-grow px-2 pb-2">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="text-lg md:text-xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>

                    {/* ARROW */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#007aff] transition-colors">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white transform group-hover:rotate-45 transition-transform"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </div>
                  </div>

                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.description}
                  </p>

                  {/* META */}
                  <div className="mt-auto pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
