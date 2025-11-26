import { Button, Text, VStack } from '@chakra-ui/react'

import { ArtistCard } from '@/components/ArtistCard'
import { EmblaGenreCategoryRail } from '@/components/EmblaGenreCategoryRail'
import { EmblaMediaRail } from '@/components/EmblaMediaRail'
import { GenreCategoryCard } from '@/components/GenreCategoryCard'
import { Header } from '@/components/Header'
import { HeroBanner } from '@/components/HeroBanner'
import { FESTIVAL_GENRES, MOCK_ARTISTS } from '@/data/mock'

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
      <EmblaGenreCategoryRail>
        <VStack
          alignItems="flex-start"
          color="white"
          gap={4}
          minW={200}
        >
          <Text
            fontSize="xl"
            fontWeight="bold"
            mt={2}
          >
            Festival for you
          </Text>
          <Text>
            Explore your favorite genres and discover new rhythms to love!
          </Text>
          <Button
            colorPalette="orange"
            rounded="full"
          >
            See All
          </Button>
        </VStack>
        {FESTIVAL_GENRES.map((item, index) => (
          <GenreCategoryCard
            href="#"
            key={index}
            {...item}
          />
        ))}
      </EmblaGenreCategoryRail>
    </>
  )
}
