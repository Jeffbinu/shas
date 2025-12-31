// app/page.tsx
import Hero from "../components/Hero";
import PartnersLogos from "../components/PartnersLogos";
import OurStory from "../components/OurStory";
import ServicesGrid from "../components/ServicesGrid";
import ProductFeatures from "../components/ProductFeatures";
import BlogPreviewGrid from "../components/BlogPreviewGrid";
import HowWeWork from "@/components/HowWeWork";
import ProjectsGrid from "@/components/ProjectsGrid";
import TestimonialsGrid from "@/components/TestimonialsGrid";

import {
  getHero,
  getServices,
  getHow,
  getProjects,
  getTestimonials,
} from "../lib/content";

import prt1 from "../../public/partners/partner1.png";
import prt2 from "../../public/partners/partner2.png";
import prt3 from "../../public/partners/partner3.png";
import prt4 from "../../public/partners/partner4.png";
import prt5 from "../../public/partners/partner5.png";
import prt6 from "../../public/partners/partner6.png";
import prt7 from "../../public/partners/partner7.png";

import experience from "../../public/services/experience.png";
import intellegence from "../../public/services/intellegence.png";
import scalability from "../../public/services/scalability.png";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  const hero = getHero();
  const how = getHow();
  const projects = getProjects();
  const testimonials = getTestimonials();
  const logos = [prt1, prt2, prt3, prt4, prt5, prt6, prt7];

  const services = [
    {
      title: "Experience",
      subtitle: "Web, App Design & Development",
      desc: "Creating seamless digital experiences",
      expandedDesc:
        "We create stunning, responsive, and user-friendly websites and mobile apps that deliver seamless experiences. From pixel-perfect UI/UX design to full-stack development we bring your ideas to life on every device.",
      icon: experience,
      bgGradient: "linear-gradient(135deg, #0a1830 0%, #0d1f3d 100%)",
    },
    {
      title: "Intelligence",
      subtitle: "AI & Machine Learning",
      desc: "Smart solutions powered by AI",
      expandedDesc:
        "We build intelligent systems that automate processes, predict outcomes, and unlock hidden insights. From custom ML models to smart AI integrations we help your business operate smarter and scale faster.",
      icon: intellegence,
      bgGradient: "linear-gradient(135deg, #0d1a35 0%, #0f1e3f 100%)",
    },
    {
      title: "Scalability",
      subtitle: "Cloud Solutions",
      desc: "Scalable infrastructure for growth",
      expandedDesc:
        "We design secure, scalable, and high-performance cloud infrastructures tailored to your needs. Whether migrating, optimizing, or building cloud-native products—we ensure reliability, speed, and effortless growth.",
      icon: scalability,
      bgGradient: "linear-gradient(135deg, #1a0d2e 0%, #2d1547 100%)",
    },
    {
      title: "Scalability",
      subtitle: "Cloud Solutions",
      desc: "Scalable infrastructure for growth",
      expandedDesc:
        "We design secure, scalable, and high-performance cloud infrastructures tailored to your needs. Whether migrating, optimizing, or building cloud-native products—we ensure reliability, speed, and effortless growth.",
      icon: scalability,
      bgGradient: "linear-gradient(135deg, #1a0d2e 0%, #2d1547 100%)",
    },
  ];

  return (
    <div className="bg-[#030C20] min-h-screen text-white overflow-hidden">
      {/* Home / Hero */}
      <Hero {...hero} />

      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none z-0 flex justify-center items-center">
          <div className="w-[30%] h-[60%] bg-[#D93068] rounded-full mix-blend-screen blur-[140px] opacity-30 translate-x-[20%]" />
          <div className="w-[30%] h-[60%] bg-[#044d9b] rounded-full mix-blend-screen blur-[140px] opacity-30 translate-x-[-20%]" />
        </div>

        {/* Our clients / partners */}
        <section id="our-clients" className="relative z-10 ">
          <PartnersLogos logos={logos} />
        </section>

        {/* About us */}
        <section id="about-us" className="relative z-10 ">
          <OurStory videoSrc="/ourstory/ourstory_clip.mp4" />
        </section>
      </div>

      {/* Our service */}
      <section id="our-service" className="">
        <ServicesGrid items={services} />
      </section>

      {/* How we work */}
      <section id="how-we-work" className="">
        <HowWeWork data={how} />
      </section>

      {/* Features */}
      <section id="features" className="">
        <ProductFeatures />
      </section>

      {/* Our projects */}
      <section id="our-projects" className="">
        <ProjectsGrid items={projects} />
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="">
        <TestimonialsGrid items={testimonials} />
      </section>

      {/* Blog */}
      <section id="blog" className="">
        <BlogPreviewGrid />
      </section>

      <section id="contact" className="">
        <ContactSection />
      </section>
    </div>
  );
}
