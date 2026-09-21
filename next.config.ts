import type { NextConfig } from "next";
const devOriginsFromEnv = process.env.ALLOWED_DEV_ORIGINS
  ? process.env.ALLOWED_DEV_ORIGINS.split(",").map((origin) => origin.trim()).filter(Boolean)
  : [];
const allowedDevOrigins = Array.from(
  new Set(["localhost:3000", ...devOriginsFromEnv])
);
const nextConfig: NextConfig = {
  allowedDevOrigins,
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "didstxzqjqqgyjxr.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
      }
    ],
  },
};
export default nextConfig;
