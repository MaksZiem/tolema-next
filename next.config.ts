import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  deploymentId: Date.now().toString(36),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
