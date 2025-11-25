import { Box, Button, Heading, Text } from '@chakra-ui/react'

import { Header } from '@/components/Header'
import { HeroBanner } from '@/components/HeroBanner'

export default function Home() {
  return (
    <Box
      bg="bg.inverted"
      minH="100vh"
    >
      <Header />
      <HeroBanner />
    </Box>
  )
}
