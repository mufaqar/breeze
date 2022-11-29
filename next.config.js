/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  test: /\.svg$/,
  use: ['@svgr/webpack'],
  
}

module.exports = nextConfig
