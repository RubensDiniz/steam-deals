import type { NextConfig } from 'next'

// TODO! Review remotePatterns
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/**'),
      new URL('https://cdn2.steamgriddb.com/thumb/**'),
    ],
  },
}

export default nextConfig
