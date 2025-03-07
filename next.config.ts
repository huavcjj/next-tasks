import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: true,
  },
  compilerOptions: {
    skipLibCheck: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // experimental: {
  //   ppr: "incremental",
  // },
};

export default nextConfig;
