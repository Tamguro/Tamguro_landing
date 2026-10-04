import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90: phone screen exports carry small UI text that blurs at the default 75.
    qualities: [75, 90],
  },
};

export default nextConfig;
