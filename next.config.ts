import { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
