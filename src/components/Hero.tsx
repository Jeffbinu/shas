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
    <section className="relative h-[120vh] flex items-start justify-around overflow-hidden pb-20 lg:pb-0 bg-[#030C20]">
      {/* 
        ANIMATION DEFINITIONS 
        - move-blob-1: Top-Left <-> Center-Right
        - move-blob-2: Bottom-Right <-> Top-Center
        - move-blob-3: Circular/Elliptical drift
      */}
      <style>{`
        @keyframes move-blob-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30%, 20%) scale(1.1); }
          66% { transform: translate(10%, 40%) scale(0.9); }
        }
        @keyframes move-blob-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-20%, -30%) scale(1.2); }
          66% { transform: translate(-40%, -10%) scale(0.95); }
        }
        @keyframes move-blob-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20%, -20%) scale(0.9); }
          66% { transform: translate(-10%, 20%) scale(1.1); }
        }
      `}</style>

      {/* BACKGROUND LAYERS */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden bg-[#030C20]">
        {/* Rotated Gradient Line (Static) */}
        <div
          className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] opacity-10 blur-[10px]"
          style={{
            background: "linear-gradient(180deg, #FF1CF7 0%, #00F0FF 100%)",
            transform: "rotate(-7.78deg)",
          }}
        />

        {/* 
            ANIMATED BLOBS CONTAINER 
        */}
        <div className="absolute inset-0">
          {/* Blue (#002B5B) - Top Left Main Blob (10s) */}
          <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-[#002B5B] rounded-full mix-blend-screen blur-[120px] opacity-100 animate-[move-blob-1_5s_ease-in-out_infinite]" />

          {/* Pink (#D93068) - Bottom Right Glow (12s) */}
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-[#D93068] rounded-full mix-blend-screen blur-[120px] opacity-90 animate-[move-blob-2_4s_ease-in-out_infinite]" />

          {/* Dark Blue Accent (#003875) - Center/Left (11s) */}
          <div className="absolute top-[10%] left-[10%] w-[80%] h-[80%] bg-[#002B5B] rounded-full mix-blend-screen blur-[120px] opacity-60 animate-[move-blob-3_7s_ease-in-out_infinite]" />
        </div>

        {/* Noise Texture */}
        <div
          className="absolute inset-0 opacity-80 mix-blend-soft-light z-10"
          style={{
            backgroundImage: "url('/hero/noise.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        {/* Bottom Fade Mask */}
        <div
          className="absolute bottom-0 left-0 w-full h-[40%] z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(3,12,32,0) 0%, #030C20 100%)",
          }}
        />
      </div>

      {/* HERO CONTENT */}
      <div className="relative h-full w-full z-20 mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-8 items-center pt-24">
        <div className="flex flex-col justify-center order-2 lg:order-1 h-full w-[70%] text-center lg:text-left lg:pl-10">
          <h1 className="text-4xl sm:text-5xl lg:text-[6rem] font-bold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
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
          <div className=" sm:w-[70%] grid grid-cols-2 sm:grid-cols-4  border-white/10 pt-8">
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
        <div className="order-1 lg:order-2 relative h-full w-[30%] flex items-center justify-center lg:justify-end ">
          <div className=" w-full h-full flex items-center justify-center">
            <div className="lg:h-[115vh] lg:w-[45vw] lg:left-[-55%] lg:top-0 absolute">
              <Image
                src={WomenImage}
                alt="3D Character Illustration"
                fill
                className=" drop-shadow-2xl z-10 !lg:absolute h-full w-full object-cover"
              />
            </div>

            {/* CARD 1: Happy Customer */}
            <div
              className="absolute top-[28%] right-[0%] lg:right-[-20px] bg-white lg:p-4 rounded-2xl z-20 w-[18rem] animate-float-slow hidden sm:block"
              style={{
                boxShadow:
                  "0px 30px 52px 0px #4541713D, 0px 0px 0px 4px #FFFFFF3D",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 lg:w-16 lg:h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-xs lg:text-[2rem] font-bold">
                  🍄
                </div>
                <div className="text-[10px] lg:text-[1rem] leading-tight flex flex-col gap-4">
                  <div className="font-bold text-gray-800">Happy Customer</div>
                  <div className="text-gray-400">4.8/5 Rating</div>
                </div>
              </div>
            </div>

            {/* CARD 2: All Designers */}
            <div
              className="absolute bottom-[18%] left-[0%] lg:left-[-40px] bg-white lg:p-4 rounded-2xl z-20 w-[18rem]  animate-float-reverse hidden sm:block"
              style={{
                boxShadow:
                  "0px 30px 52px 0px #4541713D, 0px 0px 0px 4px #FFFFFF3D",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="flex justify-between items-center mb-2 ">
                <span className="font-bold text-gray-800 text-xs lg:text-[1rem] ">
                  All Designers
                </span>
                <span className="text-xs lg:text-[2rem] ">🎨</span>
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
              <div className="flex justify-between text-[10px] text-gray-500 lg:text-[1rem] ">
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
