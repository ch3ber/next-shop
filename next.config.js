/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: 'customValue',
  },
  basePath: '/dist',
  compress: true,
  async redirects() {
    return [
      {
        source: '/hola',
        destination: 'https://ch3ber.github.io/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
