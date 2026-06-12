import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/voranmelden",
        destination: "/start",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
