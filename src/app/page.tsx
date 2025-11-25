import { Box, Button, Heading, Text } from '@chakra-ui/react'

import { Header } from '@/components/Header'

export default function Home() {
  return (
    <Box
      bg="bg.inverted"
      minH="100vh"
    >
     <Header />
    </Box>
  )
}
