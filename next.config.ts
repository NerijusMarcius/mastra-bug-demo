import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  serverExternalPackages: ["@mastra/*"],
  typescript: {
    ignoreBuildErrors: true,
}
};

export default nextConfig;
