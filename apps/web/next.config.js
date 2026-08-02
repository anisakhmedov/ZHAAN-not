/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@zhaan/ui', '@zhaan/types', '@zhaan/utils', '@zhaan/api-client'],
};

module.exports = nextConfig;
