"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import WomenImage from "../../public/hero/hero_main.svg";

type CTA = { href: string; label: string };

const AnimatedCounter = ({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let start: number | null = null;

    const step = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setCount(Math.floor(eased * end));
      if (p < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [visible, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export default function Hero({
  headline,
  subhead,
  ctaPrimary,
}: {
  headline: string;
  subhead: string;
  ctaPrimary: CTA;
}) {
  const title = headline || "Intellectual Wisdom In Technology";
  const description =
    subhead ||
    "We craft digital experiences and intelligent solutions that help businesses grow, compete, and lead in the modern world.";

  const statsData = [
    { value: 100, suffix: "+", label: "Completed Projects" },
    { value: 100, suffix: "+", label: "Satisfied Clients" },
    { value: 73, suffix: "%", label: "New Orders" },
    { value: 10, suffix: "K+", label: "Active Users" },
  ];

  return (
    <section className="relative min-h-[100svh] lg:min-h-[130vh] bg-[#030C20] overflow-hidden">
      {/* ================= BACKGROUND ================= */}
      <style>{`
        @keyframes move-blob-1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30%,20%) scale(1.1); }
          66% { transform: translate(10%,40%) scale(0.9); }
        }
        @keyframes move-blob-2 {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(-20%,-30%) scale(1.2); }
          66% { transform: translate(-40%,-10%) scale(0.95); }
        }
        @keyframes move-blob-3 {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(20%,-20%) scale(0.9); }
          66% { transform: translate(-10%,20%) scale(1.1); }
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] opacity-10 blur-[10px]"
          style={{
            background: "linear-gradient(180deg,#FF1CF7 0%,#00F0FF 100%)",
            transform: "rotate(-7.78deg)",
          }}
        />

        <div className="absolute inset-0">
          <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-[#002B5B] rounded-full blur-[120px] mix-blend-screen animate-[move-blob-1_6s_ease-in-out_infinite]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-[#D93068] rounded-full blur-[120px] mix-blend-screen animate-[move-blob-2_5s_ease-in-out_infinite]" />
          <div className="absolute top-[10%] left-[10%] w-[80%] h-[80%] bg-[#003875] rounded-full blur-[120px] mix-blend-screen animate-[move-blob-3_7s_ease-in-out_infinite]" />
        </div>

        <div
          className="absolute inset-0 opacity-70 mix-blend-soft-light"
          style={{
            backgroundImage: "url('/hero/noise.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "90% 90%",
          }}
        />

        <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-b from-transparent to-[#030C20]" />
      </div>

      {/* ================= CONTENT CANVAS ================= */}
      <div className="relative z-20 w-full px-4 sm:px-8 lg:px-16 pt-28 xl:pt-48  ">
        {/* This canvas stabilizes layout across all screen heights */}
        <div className="relative min-h-[78vh] flex items-center">
          {/* TEXT */}
          <div className="relative z-20 w-full lg:max-w-[80rem] text-center lg:text-left">
            <h1 className="text-white font-syne font-bold tracking-tight leading-[1.05] text-[clamp(2rem,5vw,6rem)] mb-6 lg:w-[80%]">
              {title}
            </h1>

            <p className=" font-poppins font-normal text-blue-100/80 text-[clamp(1rem,2.3vw,1.25rem)] mb-10 lg:w-[60%] mx-auto lg:mx-0">
              {description}
            </p>

            <div className="flex justify-center lg:justify-start mb-10 lg:w-[60%] mx-auto lg:mx-0 text-sm sm:text-xl">
              <a
                href={ctaPrimary?.href || "#services"}
                className="sm:px-8 sm:py-4 px-4 py-2 bg-[#007aff] hover:bg-[#0062cc] text-white font-semibold rounded-full shadow-[0_10px_30px_rgba(0,122,255,0.4)] transition-all hover:-translate-y-1"
              >
                {ctaPrimary?.label || "Explore Our Services"}
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6  pt-8 lg:w-[60%] mx-auto lg:mx-0">
              {statsData.map((stat, i) => (
                <div key={i}>
                  <div className="text-[#60a5fa] font-bold text-[clamp(1.4rem,3vw,2rem)]">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-300 text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WOMAN IMAGE — STABLE & SCREEN-INDEPENDENT */}
          <div
            className="hidden sm:block absolute right-[-4%] top-1/2 xl:top-[20rem] -translate-y-1/2 pointer-events-none"
            style={{
              width: "clamp(22rem, 42vw, 65rem)",
            }}
          >
            <Image
              src={WomenImage}
              alt="Hero Illustration"
              priority
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
