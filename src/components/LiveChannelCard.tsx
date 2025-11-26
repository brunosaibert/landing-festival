import { Badge, Card, HStack, Image, Link, Text } from '@chakra-ui/react'
import { GoDotFill } from 'react-icons/go'

interface LiveChannelCardProps {
  href?: string
  stageName: string
  artistName: string
  imageUrl: string
  timeRemaining: string
}

function LiveChannelCard({
  stageName,
  artistName,
  imageUrl,
  timeRemaining,
  href = '#',
}: LiveChannelCardProps) {
  return (
    <Link
      href={href}
      px={2}
      textDecoration="none"
    >
      <Card.Root
        _hover={{
          opacity: 1,
        }}
        bg="gray.900"
        border="none"
        minW="450px"
        opacity={0.8}
        overflow="hidden"
        rounded="2xl"
        size="sm"
        transition="opacity 0.3s"
      >
        <Image
          alt={`Live: ${artistName}`}
          src={imageUrl}
        />
        <Card.Body gap="2">
          <HStack
            justifyContent="space-between"
            w="100%"
          >
            <Text
              color="orange.500"
              fontSize="md"
              fontWeight="bold"
            >
              {artistName}
            </Text>
            <Badge
              borderRadius="md"
              colorPalette="red"
              px={2}
              textTransform="uppercase"
              variant="solid"
            >
              <GoDotFill />
              Live
            </Badge>
          </HStack>
          <HStack
            justifyContent="space-between"
            w="100%"
          >
            <Text
              color="whiteAlpha.700"
              fontSize="xs"
            >
              {stageName}
            </Text>

            <Text
              color="whiteAlpha.700"
              fontSize="xs"
            >
              {timeRemaining}
            </Text>
          </HStack>
        </Card.Body>
      </Card.Root>
    </Link>
  )
}

export { LiveChannelCard }
