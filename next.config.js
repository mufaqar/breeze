/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  test: /\.svg$/,
  use: ['@svgr/webpack'],
  "react/display-name": "off",
  
}

module.exports = nextConfig
