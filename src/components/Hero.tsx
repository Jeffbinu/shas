"use client";
import Image from "next/image";
import WomenImage from "../../public/hero/women.png"; // Ensure this path is correct

type CTA = { href: string; label: string };

export default function Hero({
  headline, // "Intellectual Wisdom In Technology"
  subhead,
  ctaPrimary,
}: Readonly<{
  headline: string;
  subhead: string;
  ctaPrimary: CTA;
}>) {
  return (
    <section className="relative min-h-[130vh] flex items-center pt-20 overflow-hidden bg-[#050a14]">
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-blue-600/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-900/40 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-900/20 mix-blend-overlay"></div>
        {/* Noise overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="relative z-10 mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT COLUMN: Text Content */}
        <div className="flex flex-col justify-center order-2 lg:order-1 pt-10 lg:pt-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Intellectual Wisdom In <br />
            Technology
          </h1>

          <p className="text-lg md:text-xl text-blue-100/80 max-w-xl leading-relaxed mb-10 font-light">
            We craft digital experiences and intelligent solutions that help
            businesses grow, compete, and lead in the modern world.
          </p>

          {/* CTA Button */}
          <div className="flex flex-wrap gap-4">
            <a
              href={ctaPrimary.href}
              className="px-8 py-4 bg-[#007aff] hover:bg-[#0062cc] text-white font-semibold rounded-full shadow-[0_10px_30px_rgba(0,122,255,0.4)] transition-all transform hover:-translate-y-1"
            >
              Explore Our services
            </a>
          </div>

          {/* Stats Row */}
          <div className="mt-16 sm:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { num: "100+", label: "Completed Projects" },
              { num: "100+", label: "Satisfied Clients" },
              { num: "73%", label: "New Orders" },
              { num: "10K+", label: "Active Users" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-[#3b82f6] mb-1">
                  {stat.num}
                </span>
                <span className="text-xs md:text-sm text-gray-400 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: 3D Illustration */}
        <div className="order-1 lg:order-2 relative h-[400px] md:h-[500px] lg:h-[700px] flex items-center justify-center lg:justify-end">
          {/* Main Character Image */}
          <div className="relative w-full h-full">
            <Image
              src={WomenImage}
              alt="3D Character Illustration"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
