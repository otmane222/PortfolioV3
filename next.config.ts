import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    serverActions: {}, // Empty object or provide relevant configuration here
  },
};

export default nextConfig;