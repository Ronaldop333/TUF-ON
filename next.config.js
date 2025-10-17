/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      'localhost',
      'tuf-on.com',
      'images.unsplash.com',
      'cdn.nasa.gov',
      'apod.nasa.gov',
      'upload.wikimedia.org'
    ],
  },

  experimental: {
    appDir: true,
  },

  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
