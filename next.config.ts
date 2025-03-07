import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // experimental: {
  //   ppr: "incremental",
  // },
};

export default nextConfig;
