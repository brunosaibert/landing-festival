import { Button, Center, Container, Link, Text, VStack } from '@chakra-ui/react'

import { ArtistCard } from '@/components/ArtistCard'
import { EmblaRail } from '@/components/EmblaRail'
import { GenreCategoryCard } from '@/components/GenreCategoryCard'
import { Header } from '@/components/Header'
import { HeroBanner } from '@/components/HeroBanner'
import { LiveChannelCard } from '@/components/LiveChannelCard'
import { WideAdBanner } from '@/components/WideAdBanner'
import {
  FESTIVAL_GENRES,
  MOCK_ARTISTS,
  MOCK_CHANNELS,
  MOCK_WIDE_AD_BANNERS,
} from '@/data/mock'

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
          minW={250}
          px={4}
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
      <Center
        as={Container}
        bg="white"
        p={0}
      >
        <EmblaRail
          options={{
            loop: true,
            align: 'center',
            slidesToScroll: 1,
          }}
          showDots
        >
          {MOCK_WIDE_AD_BANNERS.map((item, index) => (
            <WideAdBanner
              key={index}
              {...item}
            />
          ))}
        </EmblaRail>
      </Center>
      <EmblaRail
        options={{
          loop: true,
          align: 'start',
          slidesToScroll: 2,
        }}
        title="In Live"
      >
        {MOCK_CHANNELS.map((channel, index) => (
          <LiveChannelCard
            key={index}
            {...channel}
          />
        ))}
      </EmblaRail>
    </>
  )
}
