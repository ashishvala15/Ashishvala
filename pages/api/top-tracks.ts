import { getTopTracks } from 'lib/spotify'
import type { NextApiRequest, NextApiResponse } from 'next'

export type Artist = {
  id: string
  name: string
  type: string
  href: string
}

type Track = { artists: Artist[]; external_urls: { spotify: string }; name: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const tracks = null

  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200')

  return res.status(200).json({ tracks })
}
