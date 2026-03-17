import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
// next.config.js
module.exports = {
  images: {
    // Defines a list of allowed quality values for security/control
    qualities: [25, 50, 75, 100],
        domains: ['i.pinimg.com'], // <-- Buraya əlavə et

    // Other image config options...
  },
};

export default nextConfig;
