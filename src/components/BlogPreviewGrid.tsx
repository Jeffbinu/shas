// components/BlogPreviewGrid.tsx
import Image from "next/image";
import React from "react";

export default function BlogPreviewGrid() {
  const posts = [1, 2, 3, 4];
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="inline-block pill mb-4">Insights</div>
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">BLOG</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article
              key={p}
              className="rounded-2xl overflow-hidden glass-card p-4"
            >
              <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/project-2.png"
                  alt="post"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                How Our AI Product Development Company is Pioneering Innovation?
              </h3>
              <p className="text-white/80 text-sm">
                Discover how our product development company pioneers
                innovation...
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
