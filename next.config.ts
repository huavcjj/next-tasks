import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: true,
  },
  // experimental: {
  //   ppr: "incremental",
  // },
};

export default nextConfig;
