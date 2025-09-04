import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  distDir: 'out',
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true
};

export default nextConfig;
