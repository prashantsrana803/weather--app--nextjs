/**@format */

// next.config.mjs
export default {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.example.com',
          port: '',
          pathname: '/account123/**',
        },
        {
          protocol: 'https',
          hostname: 'openweathermap.org',
          port: '',
          pathname: '/img/wn/**',
        },
      ],
    },
  }
  