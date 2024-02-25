/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    BASE_URL: process.env.BASE_URL,
    TEST_URL: process.env.TEST_URL,
    ENCRYPTION_KEY: process.env.ENCRYPTION_KEY,
    PLACES_KEY: process.env.PLACES_KEY,
  },
  images: {
    loader: "default",
    domains: ["mooveit-aws-storage.s3.us-east-1.amazonaws.com", "mooveit-aws-storage.s3.amazonaws.com"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;