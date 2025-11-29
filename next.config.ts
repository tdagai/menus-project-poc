import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // Outputs a Single-Page Application (SPA)
  distDir: 'build', // Changes the build output directory to `build`
  images: { unoptimized: true },
  compiler: {
    styledComponents: true,
  },
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
  trailingSlash: true,
  logging: {
    fetches: {
      hmrRefreshes: true,
    },
  },
}

export default nextConfig