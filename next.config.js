/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    myAccessKey: '641273a35bbfdc101b67935df4611bb5',
    NOVU_API_KEY: '7fbd08c27ee12d23a823bc962c688d6a',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.coinlayer.com',
        port: '',
        pathname: '/icons/**',
      },
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/subscribers',
  //       destination: 'https://api.novu.co/v1/subscribers',
  //     },
  //   ];
  // },
  experimental: {
    serverActions: true
  },
}

module.exports = nextConfig

