import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/lib/blog-data";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

/* ---------------------------------------------
   SEO METADATA
---------------------------------------------- */
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found | Shashonk Tech" };
  }

  return {
    title: `${post.title} | Shashonk Tech`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

/* ---------------------------------------------
   PAGE
---------------------------------------------- */
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="relative min-h-screen bg-[#030C20] pt-24 pb-24 overflow-hidden">
      {/* BACKGROUND GLOWS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-[45%] h-[35%] bg-[#044d9b] rounded-full blur-[160px] opacity-25" />
        <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[30%] bg-[#D93068] rounded-full blur-[160px] opacity-20" />
      </div>

      {/* FULL WIDTH WRAPPER */}
      <div className="relative z-10 w-full">
        {/* BACK LINK */}
        <div className="px-6 lg:px-20 mb-10">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            Back to Insights
          </Link>
        </div>

        {/* HEADER */}
        <header className="w-full text-center px-6 lg:px-20 mb-14 animate-fade-in">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur border border-white/10">
            <span className="text-xs uppercase tracking-widest font-semibold text-blue-300">
              {post.date} • {post.author}
            </span>
          </div>

          <h1 className="mx-auto max-w-[80vw] text-[clamp(2.2rem,5vw,3.8rem)] font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

          <p className="mx-auto max-w-[50vw] text-gray-400 text-lg md:text-xl">
            {post.description}
          </p>
        </header>

        {/* FULL WIDTH FEATURED IMAGE */}
        <div className="relative mx-auto w-[80vw] h-[60vh] lg:h-[75vh] mb-20 animate-image-reveal">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />

          {/* IMAGE OVERLAY GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030C20]/10 to-[#030C20]" />
        </div>

        {/* CONTENT AREA (READABLE WIDTH) */}
        <div className="px-6 lg:px-20">
          <div
            className="
              mx-auto 
              prose prose-lg prose-invert
              prose-headings:text-white prose-headings:font-bold
              prose-h2:mt-16 prose-h3:mt-12
              prose-p:text-gray-300 prose-p:leading-relaxed
              prose-strong:text-white
              prose-a:text-[#007aff] prose-a:no-underline hover:prose-a:underline
              prose-li:text-gray-300
              prose-blockquote:border-l-[#007aff]
              animate-content-in
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* DIVIDER */}
        <div className="mt-24 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* FOOTER CTA */}
        <div className="mt-16 text-center px-6 lg:px-20">
          <p className="text-gray-400 mb-6 text-lg">
            Want to build something impactful?
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#007aff] hover:bg-[#0062cc] text-white font-semibold transition-all hover:-translate-y-1 shadow-lg shadow-blue-500/20"
          >
            Let’s Talk
          </Link>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes image-reveal {
          from { opacity: 0; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes content-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out both;
        }

        .animate-image-reveal {
          animation: image-reveal 1s ease-out both;
        }

        .animate-content-in {
          animation: content-in 0.9s ease-out both;
        }
      `}</style>
    </article>
  );
}
