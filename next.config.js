/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.rioperfumes.co.za',
      },
      {
        protocol: 'https',
        hostname: 'themansionworld.com',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'thumbs.dreamstime.com',
      },
      // Add more domains as needed
    ],
  },
};

module.exports = nextConfig;