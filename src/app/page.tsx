import { Button, Link, Text, VStack } from '@chakra-ui/react'

import { ArtistCard } from '@/components/ArtistCard'
import { EmblaRail } from '@/components/EmblaRail'
import { GenreCategoryCard } from '@/components/GenreCategoryCard'
import { Header } from '@/components/Header'
import { HeroBanner } from '@/components/HeroBanner'
import { FESTIVAL_GENRES, MOCK_ARTISTS } from '@/data/mock'

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <EmblaRail title="Line Up">
        {MOCK_ARTISTS.map((artist) => (
          <ArtistCard
            artistName={artist.name}
            imageUrl={artist.image}
            key={artist.id}
          />
        ))}
      </EmblaRail>
      <EmblaRail>
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
          <Link
            asChild
            href="#"
            unstyled
          >
            <Button
              as={'a'}
              colorPalette="orange"
              rounded="full"
            >
              See All
            </Button>
          </Link>
        </VStack>
        {FESTIVAL_GENRES.map((item, index) => (
          <GenreCategoryCard
            href="#"
            key={index}
            {...item}
          />
        ))}
      </EmblaRail>
    </>
  )
}
