import { ArtistCard } from '@/components/ArtistCard'
import { EmblaMediaRail } from '@/components/EmblaMediaRail'
import { Header } from '@/components/Header'
import { HeroBanner } from '@/components/HeroBanner'
import { MOCK_ARTISTS } from '@/data/mock'

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <EmblaMediaRail title="Line Up">
        {MOCK_ARTISTS.map((artist) => (
          <ArtistCard
            artistName={artist.name}
            imageUrl={artist.image}
            key={artist.id}
          />
        ))}
      </EmblaMediaRail>
    </>
  )
}
