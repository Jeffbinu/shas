"use client";

import React, { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import sample_pic from "../../public/protfolio/sample_pic.png";

interface ProjectItem {
  title: string;
  category: string;
  image: StaticImageData | string;
}

interface ProjectsGridProps {
  items: ProjectItem[];
}

export default function ProjectsGrid({ items }: ProjectsGridProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-12 overflow-hidden"
    >
      <div className="relative mx-auto px-4 sm:px-8 lg:px-16">
        {/* HEADER */}
        <div
          className={`
            relative text-center mb-16 sm:mb-20 transition-all duration-700 ease-out
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <div className="absolute h-[200px] top-0 left-0 w-full pointer-events-none flex justify-center items-center">
            <div className="w-[30%] h-full bg-[#044d9b] rounded-full mix-blend-screen blur-[120px] opacity-40" />
            <div className="w-[30%] h-full bg-[#D93068] rounded-full mix-blend-screen blur-[120px] opacity-40" />
          </div>

          <h2 className="relative z-10 text-3xl sm:py-12  sm:text-4xl lg:text-4xl font-bold text-white tracking-tight font-syne">
            Completed Projects
          </h2>
        </div>

        {/* GRID */}
        <div
          className={`
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
            transition-all duration-700 ease-out
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          {items.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <div className="group relative flex flex-col rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20">
      {/* IMAGE */}
      <div className="relative h-[380px] sm:h-[420px] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0  group-hover:bg-black/0 transition-colors duration-500" />

        {/* Badge */}
        <div className="absolute top-6 left-6 z-20 ">
          <span className="inline-flex items-center font-poppins px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-xs lg:text-xs font-extrabold text-gray-900 shadow-lg tracking-wide transition-transform duration-300 group-hover:scale-105">
            Success Stories
          </span>
        </div>

        {/* Arrow */}
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

      {/* BOTTOM TAB */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <div className="relative bg-white pt-6 pb-6 px-8 rounded-tr-[3rem] min-h-[110px] w-[90%] flex flex-col justify-center translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-xl md:text-lg lg:text-xl font-bold text-[#1c64f2] mb-1.5 group-hover:text-[#2563eb] transition-colors font-syne">
            {project.title}
          </h3>

          <p className="text-gray-500 text-xs lg:text-xs font-semibold tracking-wide font-poppins">
            {project.category}
          </p>
        </div>
      </div>
    </div>
  );
}
