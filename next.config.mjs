/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Enable static exports for GitHub Pages deployment
   */
  output: 'export',
  
  /**
   * Disable server-based image optimization as it's not compatible
   * with static exports
   */
  images: {
    unoptimized: true,
  },
  
  /**
   * Configure other Next.js options
   */
  reactStrictMode: true,
  swcMinify: true,
  
  /**
   * Configure trailing slash for better compatibility with GitHub Pages
   */
  trailingSlash: true,
};

export default nextConfig;
