import { Box, Image, Link } from '@chakra-ui/react'

interface InlineAdCardProps {
  imageUrl: string
  altText?: string
  width?: string
  height?: string
  href?: string
}

function InlineAdCard({
  imageUrl,
  altText = 'Ad Banner',
  width = '300px',
  height = '250px',
  href = '#',
}: InlineAdCardProps) {
  return (
    <Link
      href={href}
      px={2}
      textDecoration="none"
    >
      <Box
        _hover={{
          opacity: 1,
        }}
        borderRadius="xl"
        h={height}
        opacity={0.8}
        overflow="hidden"
        position="relative"
        transition="opacity 0.3s"
        w={width}
      >
        <Image
          alt={altText}
          h="100%"
          objectFit="cover"
          src={imageUrl}
          w="100%"
        />
      </Box>
    </Link>
  )
}

export { InlineAdCard }
