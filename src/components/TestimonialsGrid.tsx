// components/TestimonialsGrid.tsx
import React from "react";

export default function TestimonialsGrid({
  items,
}: {
  items: { quote: string; author: string; role?: string }[];
}) {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="inline-block pill mb-4">Reviews</div>
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          Our Happy Clients
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="rounded-2xl p-6 glass-card text-left">
              <div className="text-white/80 mb-4">“{t.quote}”</div>
              <div className="mt-4">
                <div className="font-semibold">{t.author}</div>
                <div className="text-sm text-white/60">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
