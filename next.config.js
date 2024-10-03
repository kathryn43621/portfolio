/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          // Apply these headers to all routes in your application
          source: '/(.*)', // Match all routes
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable', // Caches assets for 1 year
            },
            {
              key: 'Vary',
              value: 'Accept-Encoding',
            },
          ],
        },
        {
          // Specific API routes
          source: '/api/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'no-store, no-cache, must-revalidate, proxy-revalidate',
            },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  

module.exports = nextConfig
