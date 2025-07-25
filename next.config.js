/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  trailingSlash: true,
  generateEtags: false,
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
