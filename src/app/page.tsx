'use client'

import { Button, Center, Container, Link, Text, VStack } from '@chakra-ui/react'
import { useMemo } from 'react'

import { ArtistCard } from '@/components/ArtistCard'
import { EmblaRail } from '@/components/EmblaRail'
import { ExclusiveContentCard } from '@/components/ExclusiveContentCard'
import { Footer } from '@/components/Footer'
import { GenreCategoryCard } from '@/components/GenreCategoryCard'
import { Header } from '@/components/Header'
import { HeroBanner } from '@/components/HeroBanner'
import { InlineAdCard } from '@/components/InlineAdCard'
import { LiveChannelCard } from '@/components/LiveChannelCard'
import { WideAdBanner } from '@/components/WideAdBanner'
import {
  FESTIVAL_GENRES,
  MOCK_ANNOUNCEMENTS,
  MOCK_ARTISTS,
  MOCK_CHANNELS,
  MOCK_EXCLUSIVE_CONTENT,
  MOCK_WIDE_AD_BANNERS,
} from '@/data/mock'

export default function Home() {
  const LINE_UP_WITH_AD = useMemo(() => {
    const items = [...MOCK_ARTISTS]
    items.splice(4, 0, {
      id: 99,
      name: MOCK_ANNOUNCEMENTS[1].altText,
      imageUrl: MOCK_ANNOUNCEMENTS[1].imageUrl,
      genre: 'ad',
      type: 'ad',
      href: MOCK_ANNOUNCEMENTS[1].href,
    })
    return items
  }, [])

  const FESTIVAL_GENRES_WITH_AD = useMemo(() => {
    const items = [...FESTIVAL_GENRES]
    items.splice(2, 0, {
      title: MOCK_ANNOUNCEMENTS[0].altText,
      bg: MOCK_ANNOUNCEMENTS[0].imageUrl,
      href: '#',
      type: 'ad',
    })
    return items
  }, [])

  const EXCLUSIVE_CONTENT_WITH_AD = useMemo(() => {
    const items = [...MOCK_EXCLUSIVE_CONTENT]
    items.splice(2, 0, {
      title: MOCK_ANNOUNCEMENTS[2].altText,
      imageUrl: MOCK_ANNOUNCEMENTS[2].imageUrl,
      href: MOCK_ANNOUNCEMENTS[2].href,
      type: 'ad',
    })
    return items
  }, [])

  const WATCH_AGAIN_WITH_AD = useMemo(() => {
    const filtered = MOCK_ARTISTS.slice(0, 8).filter(
      (artist) => artist.id % 2 !== 0
    )
    const items = [...filtered]
    items.splice(2, 0, {
      id: 99,
      name: MOCK_ANNOUNCEMENTS[1].altText,
      imageUrl: MOCK_ANNOUNCEMENTS[1].imageUrl,
      href: MOCK_ANNOUNCEMENTS[1].href,
      genre: 'ad',
      type: 'ad',
    })
    return items
  }, [])

  const YESTERDAY_SHOWS = useMemo(() => MOCK_ARTISTS.slice(0, 8), [])

  const ROCK_SINGERS = useMemo(
    () =>
      MOCK_ARTISTS.filter(
        (item) => item.genre === 'Rock' || item.genre === 'Metal'
      ),
    []
  )

  const REVERSED_BANNERS = useMemo(
    () => MOCK_WIDE_AD_BANNERS.slice().reverse(),
    []
  )

  return (
    <>
      <Header />
      <HeroBanner />
      <EmblaRail title="Line Up">
        {LINE_UP_WITH_AD.map((item) => {
          if (item.type === 'ad') {
            return (
              <InlineAdCard
                altText={item.name}
                height="260px"
                href="#"
                imageUrl={item.imageUrl}
                key={item.id}
                width="550px"
              />
            )
          }
          return (
            <ArtistCard
              artistName={item.name}
              imageUrl={item.imageUrl}
              key={item.id}
            />
          )
        })}
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
        {FESTIVAL_GENRES_WITH_AD.map((item, index) => {
          if (item.type === 'ad') {
            return (
              <InlineAdCard
                altText={item.title}
                height="200px"
                href={item.href}
                imageUrl={item.bg}
                key={index}
                width="420px"
              />
            )
          }
          return (
            <GenreCategoryCard
              key={index}
              {...item}
            />
          )
        })}
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
          slidesToScroll: 1,
          dragFree: true,
        }}
        title="In Live"
      >
        {MOCK_CHANNELS.map((item, index) => (
          <LiveChannelCard
            key={index}
            {...item}
          />
        ))}
      </EmblaRail>
      <EmblaRail title="Yesterday Shows">
        {YESTERDAY_SHOWS.map((item) => (
          <ArtistCard
            artistName={item.name}
            imageUrl={item.imageUrl}
            key={item.id}
          />
        ))}
      </EmblaRail>
      <EmblaRail
        options={{
          align: 'start',
          slidesToScroll: 1,
          dragFree: true,
        }}
        title="Exclusive Content"
      >
        {EXCLUSIVE_CONTENT_WITH_AD.map((item, index) => {
          if (item.type === 'ad') {
            return (
              <InlineAdCard
                altText={item.title}
                height="210px"
                href={item.href}
                imageUrl={item.imageUrl}
                key={index}
                width="450px"
              />
            )
          }
          return (
            <ExclusiveContentCard
              key={index}
              {...item}
            />
          )
        })}
      </EmblaRail>
      <EmblaRail title="Rock Singers">
        {ROCK_SINGERS.map((item) => (
          <ArtistCard
            artistName={item.name}
            imageUrl={item.imageUrl}
            key={item.id}
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
          {REVERSED_BANNERS.map((item, index) => (
            <WideAdBanner
              key={index}
              {...item}
            />
          ))}
        </EmblaRail>
      </Center>
      <EmblaRail title="Watch Again">
        {WATCH_AGAIN_WITH_AD.map((item) => {
          if (item.type === 'ad') {
            return (
              <InlineAdCard
                altText={item.name}
                height="260px"
                href="#"
                imageUrl={item.imageUrl}
                key={item.id}
                width="550px"
              />
            )
          }
          return (
            <ArtistCard
              artistName={item.name}
              imageUrl={item.imageUrl}
              key={item.id}
              whatched
            />
          )
        })}
      </EmblaRail>
      <Footer />
    </>
  )
}
