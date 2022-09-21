/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  swcMinify: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    ENCRYPTION_KEY: process.env.ENCRYPTION_KEY,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
