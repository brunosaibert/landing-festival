import { Box, Heading, Image, Link, Text, VStack } from '@chakra-ui/react'

interface ArtistCardProps {
  artistName: string
  imageUrl: string
  href?: string
  whatched?: boolean
}

function ArtistCard({
  artistName,
  imageUrl,
  href = '#',
  whatched = false,
}: ArtistCardProps) {
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
        h="260px"
        opacity={0.8}
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
          bg="linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.1))"
          bottom="0"
          h="100%"
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
          lineClamp={1}
          position="absolute"
          right={0}
          textAlign="center"
          userSelect="none"
        >
          {artistName}
        </Text>
        {whatched && (
          <VStack
            alignItems="flex-start"
            gap={0}
            left={2}
            position="absolute"
            top={4}
          >
            <Heading
              as="h5"
              color="white"
              fontSize="sm"
              fontWeight="bold"
              lineHeight="1.2"
            >
              Watch Again
              {'\n'}
              <Text
                as="span"
                fontWeight="medium"
                opacity={0.7}
              >
                Festival
              </Text>
            </Heading>
          </VStack>
        )}
      </Box>
    </Link>
  )
}

export { ArtistCard }
