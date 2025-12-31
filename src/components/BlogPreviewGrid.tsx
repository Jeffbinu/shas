import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "../lib/blog-data";

export default function BlogPreviewGrid() {
  return (
    <section className="py-16 lg:px-8">
      {/* Header Section (Same as before) */}
      <div className="text-center relative mb-16">
        <div className="absolute h-[200px] top-0 left-0 w-full pointer-events-none z-0 flex justify-center items-center">
          <div className="w-[30%] h-full bg-[#044d9b] rounded-full mix-blend-screen blur-[120px] opacity-40" />
          <div className="w-[30%] h-full bg-[#D93068] rounded-full mix-blend-screen blur-[120px] opacity-40" />
        </div>
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
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`} // Dynamic Link
            className="group block h-full"
          >
            <article className="flex flex-col h-full bg-[#0f1623] rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 p-5 hover:-translate-y-2">
              {/* Image Container */}
              <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow px-2 pb-2">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-lg md:text-xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  {/* Arrow Icon */}
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

                {/* Meta info (Optional) */}
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
    </section>
  );
}
