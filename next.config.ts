import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
      }
    ],
    loader: 'custom',
    loaderFile: './src/components/CustomLoader.tsx',
  },
};

export default nextConfig;
