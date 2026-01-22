/** @type {import('postcss-load-config').Config} */
const nextConfig = {
  /* Remote Image Optimization */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        port: '',
        pathname: '/7dzwthjw/**',
        search: '',
      },
    ],
  },
};
export default nextConfig;