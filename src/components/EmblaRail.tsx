'use client'

import { Box, Flex, Heading, useBreakpointValue } from '@chakra-ui/react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { PropsWithChildren } from 'react'

import { EmblaRailDots, useDotButton } from './EmblaRailDots'

interface EmblaRailProps extends PropsWithChildren {
  title?: string
  showDots?: boolean
  options?: EmblaOptionsType
}

function EmblaRail({
  children,
  title,
  showDots = false,
  options = {
    loop: false,
    dragFree: true,
    containScroll: 'trimSnaps',
  },
}: EmblaRailProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const horizontalPadding =
    useBreakpointValue({
      base: 4,
      md: 8,
      xl: 10,
      '2xl': 24,
    }) || 0

  return (
    <Box
      overflow="hidden"
      py={10}
    >
      {title && (
        <Heading
          as="h2"
          color="white"
          fontWeight="bold"
          mb={4}
          px={horizontalPadding}
        >
          {title}
        </Heading>
      )}
      <Box
        className="embla"
        overflow="hidden"
        px={horizontalPadding}
        ref={emblaRef}
      >
        <Flex className="embla__container">{children}</Flex>
      </Box>
      {showDots && (
        <Box
          className="embla__dots"
          mt={4}
        >
          {scrollSnaps.map((_, index) => (
            <EmblaRailDots
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
              key={index}
              onClick={() => onDotButtonClick(index)}
            />
          ))}
        </Box>
      )}
    </Box>
  )
}

export { EmblaRail }
