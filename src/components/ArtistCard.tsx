import { Box, Card, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'

interface ArtistCardProps {
  artistName: string
  imageUrl: string
  href?: string
}

function ArtistCard({ artistName, imageUrl, href = '#' }: ArtistCardProps) {
  return (
    <Link
      href={href}
      passHref
    >
      <Card.Root
        _hover={{
          opacity: 0.8,
        }}
        as="a"
        bg="red"
        borderRadius="lg"
        borderWidth={0}
        h="260px"
        overflow="hidden"
        position="relative"
        transition="opacity 0.3s"
        w="200px"
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
        >
          {artistName}
        </Text>
      </Card.Root>
    </Link>
  )
}

export { ArtistCard }
