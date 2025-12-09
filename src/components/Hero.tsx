"use client";

import Image from "next/image";
import WomenImage from "../../public/hero/women.png"

type CTA = { href: string; label: string };

export default function Hero({
  headline,
  subhead,
  ctaPrimary,
  ctaSecondary,
  image,
}: Readonly<{
  headline: string;
  subhead: string;
  ctaPrimary: CTA;
  ctaSecondary: CTA;
  image: string;
}>) {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
      {/* inline styles for animations & CTA sheen */}
      <style>{`
        @keyframes heroBlueFlow { 0%{background-position:0% 0%} 50%{background-position:30% 20%} 100%{background-position:0% 40%}}
        @keyframes heroPinkFlow { 0%{background-position:77% 45%,100% 0%} 50%{background-position:73% 48%,96% 4%} 100%{background-position:79% 50%,100% 2%}}
        .headline-gradient{background:linear-gradient(90deg,#ffffff,#dbe9ff 40%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-shadow:0 0 40px rgba(0,0,0,0.12)}
        .cta-primary{position:relative;overflow:hidden}
        .cta-primary::before{content:"";position:absolute;inset:0;background:linear-gradient(45deg,transparent,rgba(255,255,255,0.12),transparent);transform:translateX(-120%);transition:transform .6s ease}
        .cta-primary:hover::before{transform:translateX(120%)}
      `}</style>

      {/* animated blue base */}
      <div
        className="absolute inset-0 -z-30"
        style={{
          background:
            "radial-gradient(circle at 12% 0%, #4fd2ff 0%, #1b8ff8 28%, #0b60cf 55%, #021024 100%)",
          backgroundSize: "140% 140%",
          animation: "heroBlueFlow 26s ease-in-out infinite alternate",
        }}
      />

      {/* pink highlight */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background: `radial-gradient(circle at 77% 45%, rgba(234,95,156,0.95) 0%, transparent 52%), radial-gradient(circle at 100% 0%, rgba(5,26,64,0.95) 0%, transparent 60%)`,
          backgroundSize: "135% 135%",
          animation: "heroPinkFlow 32s ease-in-out infinite alternate",
          mixBlendMode: "screen",
          opacity: 0.95,
        }}
      />

      {/* noise + vignette */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 15% 0%, rgba(255,255,255,0.06) 0%, transparent 55%), radial-gradient(circle at 100% 50%, rgba(255,255,255,0.04) 0%, transparent 40%), url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.26'/%3E%3C/svg%3E")`,
          backgroundBlendMode: "normal, normal, soft-light",
          filter: "contrast(140%) brightness(105%)",
        }}
      />

      {/* content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-6 sm:space-y-8">
            <h1 className="headline-gradient text-3xl sm:text-4xl md:text-5xl lg:text-[72px] leading-tight lg:leading-[0.95] font-semibold">
              {headline}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-2xl">
              {subhead}
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 items-center pt-2">
              <a
                href={ctaPrimary.href}
                className="cta-primary px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-[#0f6fff] hover:bg-[#0b5cdc] text-white font-semibold shadow-2xl transition"
              >
                {ctaPrimary.label}
              </a>

              <a
                href={ctaSecondary.href}
                className="px-4 py-2 rounded-full border border-white/20 text-white/90 hover:bg-white/6 transition"
              >
                {ctaSecondary.label}
              </a>
            </div>

            {/* stats */}
            <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                ["100+", "Completed Projects"],
                ["100+", "Satisfied Clients"],
                ["73%", "New Orders"],
                ["10K+", "Active Users"],
              ].map(([num, label]) => (
                <div key={label} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2fa4ff]">
                    {num}
                  </div>
                  <div className="text-xs sm:text-sm text-white/75">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Illustration */}
          <div className="flex items-end justify-center lg:justify-end">
            <div className="w-full max-w-[420px] sm:max-w-md md:max-w-lg relative">
              <Image
                src={WomenImage}
                alt="Hero Illustration"
                width={780}
                height={780}
                className="object-contain drop-shadow-[0_28px_60px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
