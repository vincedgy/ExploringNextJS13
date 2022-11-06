/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental:{ appDir: true },
  reactStrictMode: false,
};

module.exports = nextConfig;
