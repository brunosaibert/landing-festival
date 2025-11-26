import { Box, Image, Link } from '@chakra-ui/react'

interface WideAdBannerProps {
  imageUrl: string
  altText: string
  targetUrl: string
}

function WideAdBanner({ imageUrl, altText, targetUrl }: WideAdBannerProps) {
  return (
    <Link
      className="embla__slide"
      href={targetUrl}
      target="_blank"
    >
      <Box
        overflow="hidden"
        w="full"
      >
        <Image
          alt={altText}
          h="100%"
          loading="lazy"
          maxH={400}
          objectFit="content"
          src={imageUrl}
          w="100%"
        />
      </Box>
    </Link>
  )
}

export { WideAdBanner }
