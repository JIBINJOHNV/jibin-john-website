const repositoryBasePath = "/jibin-john-website";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: repositoryBasePath,
  assetPrefix: repositoryBasePath,
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    root: "/workspace/sites/jibin-homepage-draft",
    rules: {
      "*.md": {
        loaders: ["./scripts/raw-loader.cjs"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
