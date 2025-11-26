import { Box, Image, Link } from '@chakra-ui/react'

interface WideAdBannerProps {
  imageUrl: string
  altText: string
  href: string
}

function WideAdBanner({ imageUrl, altText, href }: WideAdBannerProps) {
  return (
    <Link
      className="embla__slide"
      href={href}
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
