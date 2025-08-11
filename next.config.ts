import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL,
  }
};

export default nextConfig;
