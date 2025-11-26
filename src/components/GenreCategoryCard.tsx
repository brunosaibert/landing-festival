import { Box, Heading, Image, Link, Text } from '@chakra-ui/react'

interface GenreCategoryCardProps {
  bg: string
  title: string
  href: string
}

function GenreCategoryCard({ bg, title, href = '#' }: GenreCategoryCardProps) {
  const bgColor = `${bg}.700`

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
        alignItems="flex-end"
        bg={bgColor}
        borderRadius="lg"
        display="flex"
        h={200}
        opacity={0.8}
        overflow="hidden"
        p={4}
        position="relative"
        transition="opacity 0.3s"
        userSelect="none"
        w={200}
      >
        <Heading
          as="h3"
          color="white"
          fontWeight="extrabold"
          mt={4}
          size="2xl"
        >
          {title}
          {'\n'}
          <Text
            fontWeight="medium"
            opacity={0.7}
          >
            Festival
          </Text>
        </Heading>
        <Image
          alt={`${title} illustration`}
          bottom={0}
          position="absolute"
          right={0}
          src="/logo-vector.png"
          w={24}
        />
      </Box>
    </Link>
  )
}

export { GenreCategoryCard }
