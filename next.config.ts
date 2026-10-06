import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/tiktok',
        destination: 'https://tiktok-calculator-three.vercel.app/tiktok',
      },
      {
        source: '/tiktok/:path*',
        destination: 'https://tiktok-calculator-three.vercel.app/tiktok/:path*',
      },
    ];
  },
};

export default nextConfig;
