import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [25, 50, 75, 100],
    domains: ["i.pinimg.com", "images.unsplash.com"],
  },
};

export default nextConfig;