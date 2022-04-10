/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
      styledComponents: true
  },
  images: {
    loader: 'imgix',
    path: ''
  }
}

module.exports = nextConfig
