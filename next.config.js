/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  assetPrefix: './',
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  }
}

module.exports = nextConfig
