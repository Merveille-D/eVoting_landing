/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: unoptimized,
  images: {
    loader: "imgix",
    path: "/",
  },
};

module.exports = nextConfig;
