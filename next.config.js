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
        hostname: 'thehoughtonhotel.com',
      },

      {
        protocol: 'https',
        hostname: 'in.ajmal.com',
      },
{
        protocol: 'https',
        hostname: 'media.self.com',
      },

{protocol: 'https',
  hostname: 'faunwalk.com',
},


{protocol: 'https',
  hostname: 'm.media-amazon.com',
},

{protocol: 'https',
  hostname: 'www.glamourmagazine.co.uk',
},

      {
        protocol: 'https',
        hostname: 'thumbs.dreamstime.com',
      },

{
        protocol: 'https',
        hostname: 'thumbs.dreamstime.com',
      },

      {
        protocol: 'https',
        hostname: 'urbanscents.co.za',
      },

{
        protocol: 'https',
        hostname: 'amiiraa.co.za',
},

{
  protocol: 'https',
  hostname: 'www.amazon.co.za',
},


      // Add more domains as needed
    ],
  },
};

module.exports = nextConfig;