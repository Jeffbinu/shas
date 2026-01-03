import blog_sample_1 from "../../public/blog/blog-thumbnail1.jpg"; 
import blog_sample_2 from "../../public/blog/blog-thumbnail2.jpg";
import blog_sample_3 from "../../public/blog/blog-thumbnail3.jpg";



export type BlogPost = {
  id: number;
  slug: string; 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;  
  title: string;
  description: string;
  content: string; 
  date: string;
  author: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "successful-mvp-launches",
    image: blog_sample_1,
    title: "Successful MVP Launches That Changed the Game",
    description:
      "Discover the secrets behind game-changing MVP launches! From lean startups to industry giants, explore how these innovative launches disrupted markets.",
    content: `
      <p>Building a Minimum Viable Product (MVP) is the most effective way to validate your startup idea without burning through your budget. But what separates a successful MVP from a failed experiment?</p>
      <h2>The Lean Startup Approach</h2>
      <p>The core concept is simple: Build, Measure, Learn. By launching a basic version of your product, you can gather real user feedback and iterate quickly.</p>
      <h2>Case Study: Dropbox</h2>
      <p>Dropbox didn't start with a complex cloud architecture. They started with a simple video demonstrating how the product would work. This 'MVP' garnered thousands of signups overnight.</p>
      <h3>Key Takeaways</h3>
      <ul>
        <li>Focus on the core problem you are solving.</li>
        <li>Don't over-engineer features initially.</li>
        <li>Listen to your early adopters.</li>
      </ul>
    `,
    date: "Oct 24, 2024",
    author: "Sarah Jenkins",
  },
  {
    id: 2,
    slug: "ai-product-development-innovation",
    image: blog_sample_2,
    title: "How Our AI Product Development Company is Pioneering Innovation",
    description:
      "Discover how our product development company pioneers innovation. From groundbreaking technologies to creative strategies, we're shaping the future.",
    content: `
      <p>Artificial Intelligence is no longer just a buzzword; it is the backbone of modern software engineering. At our company, we don't just use AI; we build it into the DNA of our products.</p>
      <h2>Beyond Basic Algorithms</h2>
      <p>We leverage Generative AI and Large Language Models (LLMs) to create interfaces that adapt to user behavior in real-time.</p>
    `,
    date: "Nov 12, 2024",
    author: "David Chen",
  },
  {
    id: 3,
    slug: "optimizing-ecommerce-ai-recommendations",
    image: blog_sample_3,
    title: "Optimizing E-commerce Sales with AI-Driven Product Recommendations",
    description:
      "Boost your e-commerce sales with AI-powered product recommendations. Learn how smart algorithms can enhance customer experience and drive conversions.",
    content: `
      <p>Personalization is the key to winning in e-commerce. If your store treats every visitor the same, you are leaving money on the table.</p>
      <h2>The Power of Collaborative Filtering</h2>
      <p>By analyzing user behavior patterns, AI can predict what a customer wants before they even search for it.</p>
    `,
    date: "Dec 05, 2024",
    author: "Elena Rodriguez",
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
