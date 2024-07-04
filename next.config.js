/** @type {import('next').NextConfig} */
const nextConfig = {
    // Correct options
  // Example: if you had `assetPrefix: '/foo'` which is deprecated, change it to `basePath: '/foo'`
  basePath: '/foo',
  experimental: {
    appDir: true,
  },
  optimizeFonts: false,
  images: {
    domains: ["user-images.githubusercontent.com", "cdn.hashnode.com"],
  },
  fontLoaders: [
    {
      loader: "@next/font/google",
      options: {
        subsets: ["latin"],
        weight: ["400", "500", "600", "700", "800"],
      },
    },
  ],
};

module.exports = nextConfig;
