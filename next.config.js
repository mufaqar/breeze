/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  "react/display-name": "off",

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  images: {
    domains: [
      "cdn.pixabay.com",
    ],
  },
}

module.exports = nextConfig
