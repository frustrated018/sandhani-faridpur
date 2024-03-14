/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "source.unsplash.com", protocol: "https" },
      { hostname: "utfs.io", protocol: "https" },
    ],
  },
};

export default nextConfig;
