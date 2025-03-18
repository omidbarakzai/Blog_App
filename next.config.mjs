/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog.ararat.in',
        port: '5963',
        pathname: '/uploads/coverImage/**',
      },
    ],
  },
  experimental: {
    workerThreads: false,
  },
};