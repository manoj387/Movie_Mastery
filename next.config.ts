import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env : {
    customKey : process.env.API_KEY
  }
};

export default nextConfig;
