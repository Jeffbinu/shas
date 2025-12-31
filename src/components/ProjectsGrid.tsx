"use client";
import Image, { StaticImageData } from "next/image";
import sample_pic from "../../public/protfolio/sample_pic.png";

interface ProjectItem {
  title: string;
  category: string;
  image: StaticImageData | string; // Updated to accept StaticImageData
}

interface ProjectsGridProps {
  items: ProjectItem[];
}

export default function ProjectsGrid({ items }: ProjectsGridProps) {
  return (
    <section className="  lg:px-8 ">
      {/* Header Section */}
      <div className="text-center mb-12 md:mb-16 relative">
        <div className="absolute h-[200px] top-0 left-0 w-full  pointer-events-none z-0 flex justify-center items-center">
          <div className="w-[30%] h-full bg-[#044d9b] rounded-full mix-blend-screen blur-[120px] opacity-40" />
          <div className="w-[30%] h-full bg-[#D93068] rounded-full mix-blend-screen blur-[120px] opacity-40 " />
        </div>
        <div className="inline-block px-5 py-2 mb-5 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
          <span className="text-white text-sm font-semibold tracking-wide">
            Our portfolio
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          Completed Projects
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <div className="group relative flex flex-col rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20">
      <div className="relative h-[420px] w-full bg-gray-900 overflow-hidden">
        {/* 1. The Image */}
        <Image
          src={sample_pic}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* 2. Overlay (Optional, for text readability if needed, but Figma shows clean images) */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

        {/* 3. 'Success Stories' Badge - Floating Top Left */}
        <div className="absolute top-6 left-6 z-20">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-xs font-extrabold text-gray-900 shadow-lg tracking-wide transform transition-transform duration-300 group-hover:scale-105">
            Success Stories
          </span>
        </div>

        {/* 4. Arrow Icon - Floating Top Right */}
        <div className="absolute top-6 right-6 z-20">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#111827]/80 backdrop-blur-md text-white shadow-lg transition-all duration-500 group-hover:bg-[#111827] group-hover:rotate-45">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </div>
        </div>
      </div>

      {/* 
         CONTENT CONTAINER (The "Tab" Shape)
         - This sits at the bottom of the card.
         - The `rounded-tr-[2.5rem]` gives that unique "inward curve" effect 
           on the top-right of the white box if positioned correctly, 
           or `rounded-tl-[2rem]` for the tab look.
         - In Figma, it looks like a white sheet sliding up from the bottom left.
      */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        {/* The Shape Wrapper */}
        <div className="relative bg-white pt-6 pb-6 px-8 rounded-tr-[3rem] min-h-[110px] w-[90%] flex flex-col justify-center translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-[#1c64f2] mb-1.5 group-hover:text-[#2563eb] transition-colors">
            {project.title}
          </h3>

          {/* Category */}
          <p className="text-gray-500 text-xs md:text-sm font-semibold tracking-wide uppercase">
            {project.category}
          </p>
        </div>
      </div>
    </div>
  );
}
