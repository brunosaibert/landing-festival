import { Box, Image, Link, Text } from '@chakra-ui/react'

interface ArtistCardProps {
  artistName: string
  imageUrl: string
  href?: string
}

function ArtistCard({ artistName, imageUrl, href = '#' }: ArtistCardProps) {
  return (
    <Link
      href={href}
      px={2}
      textDecoration="none"
    >
      <Box
        _hover={{
          opacity: 0.8,
        }}
        borderRadius="xl"
        minH="260px"
        minW="200px"
        overflow="hidden"
        position="relative"
        transition="opacity 0.3s"
      >
        <Image
          alt={`Pôster de ${artistName}`}
          h="100%"
          objectFit="cover"
          src={imageUrl}
          w="100%"
        />
        <Box
          bg="linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))"
          bottom="0"
          h="50%"
          left="0"
          position="absolute"
          right="0"
        />
        <Text
          bottom={10}
          color="white"
          fontSize="lg"
          fontWeight="bold"
          left={0}
          position="absolute"
          right={0}
          textAlign="center"
          userSelect="none"
        >
          {artistName}
        </Text>
      </Box>
    </Link>
  )
}

export { ArtistCard }
