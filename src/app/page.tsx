import { Box, Button, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box w="100vw" h="100vh"display="flex" alignItems="center" justifyContent="center" flexDirection="column">
      <Heading mb={4}>Setup Concluído</Heading>
      <Text mb={6}>Next.js + Chakra UI</Text>
      <Button colorPalette="orange">Clique aqui</Button>
    </Box>
  );
}
