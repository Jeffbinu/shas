import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/lib/blog-data";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

// 1. Generate Metadata (Fixed)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params; 
  const post = getPostBySlug(resolvedParams.slug);
  
  if (!post) return { title: "Post Not Found" };
  
  return {
    title: `${post.title} | Shashonk Tech`,
    description: post.description,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// 3. Page Component (Fixed)
export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params; 
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen w-full bg-[#030C20] pt-32 pb-20 px-6 lg:px-12">


      <div className="relative z-10 lg:max-w-7xl mx-auto">
        {/* Back Button */}
        <Link 
          href="/#blog" 
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group"
        >
          <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          Back to Insights
        </Link>

        {/* Header */}
        <header className="mb-12 text-center">
          <div className="inline-block px-4 py-1 mb-6 bg-white/10 rounded-full border border-white/10 backdrop-blur-sm">
            <span className="text-blue-300 text-xs font-bold tracking-wider uppercase">
              {post.date} • {post.author}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            {post.title}
          </h1>
        </header>

        {/* Featured Image */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Article Body */}
        <div 
          className="prose prose-lg prose-invert mx-auto
            prose-headings:text-white prose-headings:font-bold 
            prose-p:text-gray-300 prose-p:leading-relaxed
            prose-a:text-[#007aff] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white
            prose-li:text-gray-300 text-2xl"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

      </div>
    </article>
  );
}
