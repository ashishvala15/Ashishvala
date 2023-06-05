import fetcher from 'lib/fetcher'
import useSWR from 'swr'
import { TopTracks } from 'types/Spotify'
import Track from './Track'

export default function Tracks() {
  const { data: topTracks } = useSWR<TopTracks>('/api/top-tracks', fetcher)

  if (!topTracks) {
    return null
  }

  return <div></div>
}
