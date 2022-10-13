/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    ENCRYPTION_KEY: process.env.ENCRYPTION_KEY,
  },
};

module.exports = nextConfig;
