/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    BASE_URL: process.env.BASE_URL,
    ENCRYPTION_KEY: process.env.ENCRYPTION_KEY,
    PLACES_KEY: process.env.PLACES_KEY,
  },
};

module.exports = nextConfig;
