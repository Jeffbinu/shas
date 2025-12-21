// app/components/Hero.tsx
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
    <section className="relative min-h-[110vh] flex items-center overflow-hidden pb-20 lg:pb-0 bg-[#030C20]">
      {/* BACKGROUND LAYERS */}
      <div className="absolute h-full inset-0 z-0 pointer-events-none">
        {/* 1. Vertical gradient (Figma box) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(3,12,32,0) 0%, #030C20 100%)",
          }}
        />

        {/* 2. Color glow gradients (blue/pink corners) */}
        <div
          className="absolute -left-[20%] -top-[40%] w-[60rem] h-[60rem] opacity-70"
          style={{
            background:
              "radial-gradient(circle at center, #1d4ed8 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute -right-[10%] -bottom-[20%] w-[55rem] h-[55rem] opacity-80"
          style={{
            background:
              "radial-gradient(circle at center, #a855f7 0%, transparent 60%)",
          }}
        />

        <div
          className="absolute left-0  top-0 w-full h-full inset-[10%] opacity-80"
          style={{
            background:
              "radial-gradient(circle at 10% 0%, rgba(59,130,246,0.8) 0, transparent 55%), radial-gradient(circle at 90% 100%, rgba(168,85,247,0.9) 0, transparent 55%)",
          }}
        />

        {/* 4. Noise overlay with soft-light blend */}
        <div
          className="absolute inset-0 opacity-[0.40] mix-blend-soft-light"
          style={{
            backgroundImage: "url('/hero/noise.jpg')",
            backgroundRepeat: "repeat",
            backgroundSize: "300px 300px",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 mx-auto px-6 lg:px-12 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* LEFT: text */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <h1 className="text-4xl sm:text-3xl md:text-3xl lg:text-[3rem] font-bold text-white leading-[1.1] mb-6 tracking-tight">
            {title.includes("Technology") ? (
              <>
                Intellectual Wisdom In <br className="hidden lg:block" />
                <span className="text-white">Technology</span>
              </>
            ) : (
              title
            )}
          </h1>
          <p className="text-lg md:text-xl text-blue-100/70 max-w-xl leading-relaxed mb-10 font-light">
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
          <div className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-white/5 pt-8">
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

        {/* RIGHT: illustration */}
        <div className="order-1 lg:order-2 relative h-[450px] md:h-[600px] flex items-center justify-center lg:justify-end">
          <div className="relative w-full h-full max-w-[500px] flex items-center justify-center">
            <Image
              src={WomenImage}
              alt="3D Character Illustration"
              fill
              className="object-contain drop-shadow-2xl z-10"
              priority
            />

            {/* Happy Customer card */}
            <div className="absolute top-[25%] right-[0%] lg:right-[-20px] bg-white p-3 rounded-2xl shadow-xl z-20 w-[160px] animate-float-slow hidden sm:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-xs font-bold">
                  🍄
                </div>
                <div className="text-[10px] leading-tight">
                  <div className="font-bold text-gray-800">Happy Customer</div>
                  <div className="text-gray-400">4.8/5 Rating</div>
                </div>
              </div>
            </div>

            {/* All Designers card */}
            <div className="absolute bottom-[15%] left-[0%] lg:left-[-30px] bg-white p-4 rounded-2xl shadow-xl z-20 w-[200px] animate-float-reverse hidden sm:block">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-gray-800 text-xs">
                  All Designers
                </span>
                <span className="text-xs">🎨</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mb-2">
                <div className="bg-gradient-to-r from-blue-400 to-green-400 w-[62%] h-full" />
              </div>
              <div className="flex justify-between text-[10px] text-gray-500">
                <span>62%</span>
                <span>2M</span>
              </div>
            </div>

            {/* Ground shadow */}
            <div className="absolute bottom-[5%] w-[80%] h-[60px] bg-white/5 blur-[40px] rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
