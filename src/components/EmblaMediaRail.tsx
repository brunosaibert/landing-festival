'use client'

import { Box, Flex, Heading, useBreakpointValue } from '@chakra-ui/react'
import useEmblaCarousel from 'embla-carousel-react'
import { PropsWithChildren } from 'react'

interface EmblaMediaRailProps extends PropsWithChildren {
  title: string
}

const EmblaMediaRail = ({ children, title }: EmblaMediaRailProps) => {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    containScroll: 'trimSnaps',
  })

  const horizontalPadding =
    useBreakpointValue({
      base: 4,
      md: 8,
      xl: 10,
      '2xl': 24,
    }) || 0

  return (
    <Box
      overflow="auto"
      pb={6}
      pt={10}
    >
      <Heading
        as="h2"
        color="white"
        fontWeight="bold"
        mb={4}
        px={horizontalPadding}
      >
        {title}
      </Heading>
      <Box
        className="embla"
        overflow="hidden"
        px={horizontalPadding}
        ref={emblaRef}
      >
        <Flex
          align="flex-start"
          className="embla__container"
          gap={4}
          pb={4}
        >
          {children}
        </Flex>
      </Box>
    </Box>
  )
}

export { EmblaMediaRail }
