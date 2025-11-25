import { Box, Button, Heading, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      h="100vh"
      justifyContent="center"
      w="100vw"
    >
      <Heading mb={4}>Setup Concluído</Heading>
      <Text mb={6}>Next.js + Chakra UI</Text>
      <Button colorPalette="orange">Clique aqui</Button>
    </Box>
  )
}
