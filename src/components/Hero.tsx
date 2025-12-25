"use client";

import Image from "next/image";
import WomenImage from "../../public/hero/women.png";

type CTA = { href: string; label: string };

export default function Hero({
  headline,
  subhead,
  ctaPrimary,
}: Readonly<{
  headline: string;
  subhead: string;
  ctaPrimary: CTA;
}>) {
  const title = headline || "Intellectual Wisdom In Technology";
  const description =
    subhead ||
    "We craft digital experiences and intelligent solutions that help businesses grow, compete, and lead in the modern world.";
  const link = ctaPrimary?.href || "#services";
  const label = ctaPrimary?.label || "Explore Our services";

  return (
    <section className="relative min-h-[110vh] flex items-start justify-arround overflow-hidden pb-20 lg:pb-0 bg-[#030C20]">
      {/* 
        ================================================================
        BACKGROUND SYSTEM (Figma Layer Stack)
        ================================================================ 
      */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        {/* 1. GLOBAL LIGHT WASH (The "Rotated Border" Component) 
             This matches the huge rotated gradient box you found.
             It provides the ambient diagonal lighting across the whole screen.
        */}
        <div
          className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] opacity-10 blur-[10px]"
          style={{
            background: "linear-gradient(180deg, #FF1CF7 0%, #00F0FF 100%)",
            transform: "rotate(-7.78deg)",
          }}
        />

        {/* 2. COLOR VECTORS (The "Group" Component)
             Using % positioning to match Figma relative layout.
             'mix-blend-screen' is CRITICAL here to make the colors glow against the dark bg.
        */}
        <div className="absolute inset-0">
          {/* Blue (#017BFC) - Top Left Main Blob */}
          <div className="absolute top-[-10%] left-[-10%] w-[55%] h-[55%] bg-[#044d9b] rounded-full mix-blend-screen blur-[120px] opacity-90" />

          {/* Pink (#D93068) - Bottom Right Glow */}
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] bg-[#D93068] rounded-full mix-blend-screen blur-[120px] opacity-90" />

          {/* Cyan (#00B4D8) - Center/Left Accent */}
          <div className="absolute top-[10%] left-[10%] w-[80%] h-[80%] bg-[#044d9b] rounded-full mix-blend-screen blur-[120px] opacity-50" />
        </div>

        <div
          className="absolute inset-0 opacity-80 mix-blend-soft-light z-10"
          style={{
            backgroundImage: "url('/hero/noise.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        {/* 4. FADE TO BLACK (Bottom Mask)
             Ensures the bottom of the hero fades smoothly into the next section.
        */}
        <div
          className="absolute bottom-0 left-0 w-full h-[40%] z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(3,12,32,0) 0%, #030C20 100%)",
          }}
        />
                <div
          className="absolute top-0 left-0 w-full h-[20%] z-10"
          style={{
            background:
              "linear-gradient(0deg, rgba(3,12,32,0) 0%, #030C20 100%)",
          }}
        />
      </div>

      {/* 
        ================================================================
        CONTENT 
        ================================================================ 
      */}
      <div className="relative z-20 mx-auto px-6 lg:px-12 w-full  grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-24">
        {/* LEFT: Text */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <h1 className="text-4xl sm:text-5xl lg:text-[3.8rem] font-bold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
           {title}
          </h1>
          <p className="text-lg md:text-xl text-blue-100/80 max-w-xl leading-relaxed mb-10 font-light drop-shadow-md">
            {description}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={link}
              className="px-8 py-4 bg-[#007aff] hover:bg-[#0062cc] text-white font-semibold rounded-full shadow-[0_10px_30px_rgba(0,122,255,0.4)] transition-all transform hover:-translate-y-1"
            >
              {label}
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8  border-white/10 pt-8">
            {[
              { num: "100+", label: "Completed Projects" },
              { num: "100+", label: "Satisfied Clients" },
              { num: "73%", label: "New Orders" },
              { num: "10K+", label: "Active Users" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-[#60a5fa] mb-1 drop-shadow-sm">
                  {stat.num}
                </span>
                <span className="text-xs md:text-sm text-gray-300 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Illustration */}
        <div className="order-1 lg:order-2 relative h-[450px] md:h-[650px] flex items-center justify-center lg:justify-end">
          <div className="relative w-full h-full max-w-[700px] flex items-center justify-center">
            <Image
              src={WomenImage}
              alt="3D Character Illustration"
              fill
              className="object-contain drop-shadow-2xl z-10"
              priority
            />  

            {/* CARD 1: Happy Customer */}
            <div
              className="absolute top-[28%] right-[0%] lg:right-[-20px] bg-white p-3 rounded-2xl z-20 w-[170px] animate-float-slow hidden sm:block"
              style={{
                boxShadow:
                  "0px 30px 52px 0px #4541713D, 0px 0px 0px 4px #FFFFFF3D",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-xs font-bold">
                  🍄
                </div>
                <div className="text-[10px] leading-tight">
                  <div className="font-bold text-gray-800">Happy Customer</div>
                  <div className="text-gray-400">4.8/5 Rating</div>
                </div>
              </div>
            </div>

            {/* CARD 2: All Designers */}
            <div
              className="absolute bottom-[18%] left-[0%] lg:left-[-40px] bg-white p-4 rounded-2xl z-20 w-[210px] animate-float-reverse hidden sm:block"
              style={{
                boxShadow:
                  "0px 30px 52px 0px #4541713D, 0px 0px 0px 4px #FFFFFF3D",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-gray-800 text-xs">
                  All Designers
                </span>
                <span className="text-xs">🎨</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mb-2">
                <div
                  className="h-full"
                  style={{
                    width: "62%",
                    background:
                      "linear-gradient(90deg, #FF1CF7 0%, #00F0FF 100%)",
                  }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-gray-500">
                <span>62%</span>
                <span>2M</span>
              </div>
            </div>

            {/* Ground shadow */}
            <div className="absolute bottom-[8%] w-[80%] h-[60px] bg-white/10 blur-[50px] rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
