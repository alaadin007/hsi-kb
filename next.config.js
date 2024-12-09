/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    serverComponentsExternalPackages: ['@tremor/react'],
    largePageDataBytes: 512000, // Increased from default 128KB to 512KB
    pageDataBytes: 512000, // Increased from default 128KB to 512KB
    typedRoutes: true,
  },
};

module.exports = nextConfig;