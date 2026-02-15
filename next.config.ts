import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/sircle-dev-site",
  assetPrefix: "/sircle-dev-site/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
