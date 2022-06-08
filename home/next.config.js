const COMPANY_URL = "http://localhost:4000";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/company",
        destination: `${COMPANY_URL}/company`,
      },
      {
        source: "/company/:path*",
        destination: `${COMPANY_URL}/company/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
