import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: "out",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
