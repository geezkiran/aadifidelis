import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "www.aadifidelissolutions.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
