import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript:{
    // Set to true to allow TypeScript errors during development
    ignoreBuildErrors: true,
  },
  eslint: {
    // Set to true to allow ESLint errors during development
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
