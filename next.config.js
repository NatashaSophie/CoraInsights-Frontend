const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  images: {
    domains: [
      'localhost',
      'caminho-de-cora.herokuapp.com',
      'res.cloudinary.com',
    ],
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
  },
  reactStrictMode: true,
});
