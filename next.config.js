const nextConfig = {
  // Enable static exports for GitHub Pages deployment
  output: 'export',

  // Set assetPrefix to "" for custom domain deployment. If you're using a repository subpath, set it to "/<repo-name>/"
  assetPrefix: "",

  // Disable server-based image optimization as it's not compatible with static exports
  images: {
    unoptimized: true,
  },

  // Other Next.js options
  reactStrictMode: true,
  swcMinify: true,

  // Configure trailing slash for better compatibility with GitHub Pages
  trailingSlash: true,
};

module.exports = nextConfig; 