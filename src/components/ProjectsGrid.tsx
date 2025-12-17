import Image from "next/image";

interface ProjectItem {
  title: string;
  category: string;
  image: string;
}

interface ProjectsGridProps {
  items: ProjectItem[];
}

export default function ProjectsGrid({ items }: ProjectsGridProps) {
  return (
    <section className="py-16 md:py-24 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
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
            <div
              key={index}
              className="group relative flex flex-col rounded-3xl overflow-hidden bg-white transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* 'Success Stories' Badge - Top Left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white text-xs font-bold text-gray-900 shadow-sm">
                    Success Stories
                  </span>
                </div>

                {/* Arrow Icon - Top Right */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1f2937] text-white shadow-md">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content Container - Bottom White Area */}
              <div className="flex flex-col justify-center p-6 bg-white flex-1 min-h-[100px]">
                <h3 className="text-xl font-bold text-[#1c64f2] mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
