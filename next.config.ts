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
      {
        source: '/etsy',
        destination: 'https://etsy-calculator-fawn.vercel.app/etsy',
      },
      {
        source: '/etsy/:path*',
        destination: 'https://etsy-calculator-fawn.vercel.app/etsy/:path*',
      },
    ];
  },
};

export default nextConfig;
