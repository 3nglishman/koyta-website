import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.koyta.org",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
