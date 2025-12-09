// components/ProjectsGrid.tsx
import Image from "next/image";
import React from "react";

export default function ProjectsGrid({
  items,
}: {
  items: { title: string; image: string }[];
}) {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="inline-block pill mb-4">Our portfolio</div>
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          Completed Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden bg-gradient-to-b from-white/3 to-transparent glass-card"
            >
              <div className="relative h-48">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white/6">
                <div className="font-semibold text-[#0f6fff]">{p.title}</div>
                <div className="text-sm text-white/75">Case study · UI/UX</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
