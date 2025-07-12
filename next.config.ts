import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/**'),
    ],
  },
}

export default nextConfig
