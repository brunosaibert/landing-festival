import { Box, Image, Link, Text } from '@chakra-ui/react'

interface ExclusiveContentCard {
  title: string
  imageUrl: string
  href?: string
}

function ExclusiveContentCard({ title, imageUrl, href }: ExclusiveContentCard) {
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
        minW="450px"
        opacity={0.8}
        overflow="hidden"
        position="relative"
        transition="opacity 0.3s"
      >
        <Image
          alt={`Pôster de ${title}`}
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
          bottom={4}
          color="white"
          fontSize="2xl"
          fontWeight="bold"
          left={4}
          position="absolute"
          userSelect="none"
        >
          {title}
          {'\n'}
          <Text
            fontWeight="medium"
            opacity={0.7}
          >
            Festival
          </Text>
        </Text>
      </Box>
    </Link>
  )
}

export { ExclusiveContentCard }
