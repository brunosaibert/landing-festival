import {
  Box,
  Button,
  Container,
  Flex,
  Group,
  Heading,
  HStack,
  IconButton,
  Text,
  VStack,
} from '@chakra-ui/react'
import { BsCameraVideo } from 'react-icons/bs'
import { GoGear } from 'react-icons/go'
import { GrVolume } from 'react-icons/gr'
import { RxDashboard, RxEnterFullScreen } from 'react-icons/rx'

function HeroBanner() {
  return (
    <Box
      backgroundPosition="center"
      bgImage="linear-gradient(to top, rgba(13, 13, 13, 0.9), rgba(13, 13, 13, 0.2)), url('/hero.jpg')"
      bgSize="cover"
      h="100vh"
      position="relative"
      w="full"
    >
      <Flex
        as={Container}
        bottom={10}
        direction="column"
        flex={1}
        gap={2}
        justifyContent="space-between"
        left={0}
        position="absolute"
        right={0}
        top={32}
      >
        <VStack
          alignItems="flex-start"
          gap={2}
        >
          <Heading
            as="h1"
            color="white"
            fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
            fontWeight="extrabold"
            lineHeight="shorter"
          >
            Avril Lavigne
          </Heading>
          <Text
            color="gray.300"
            fontSize="sm"
          >
            LIVE • Sunset • Singer Camera
          </Text>
        </VStack>
        <HStack
          alignItems="center"
          justifyContent="space-between"
        >
          <Button
            colorPalette="orange"
            rounded="full"
            size="2xs"
          >
            <BsCameraVideo />
            Choose your camera
          </Button>
          <Group>
            <IconButton
              _hover={{
                color: 'gray.800',
              }}
              aria-label="Alterar tela"
              color="gray.400"
              variant="ghost"
            >
              <RxDashboard />
            </IconButton>
            <IconButton
              _hover={{
                color: 'gray.800',
              }}
              aria-label="Alterar tela cheia"
              color="gray.400"
              variant="ghost"
            >
              <RxEnterFullScreen />
            </IconButton>
            <IconButton
              _hover={{
                color: 'gray.800',
              }}
              aria-label="Alterar volume"
              color="gray.400"
              variant="ghost"
            >
              <GrVolume />
            </IconButton>
            <IconButton
              _hover={{
                color: 'gray.800',
              }}
              aria-label="Alterar configurações"
              color="gray.400"
              variant="ghost"
            >
              <GoGear />
            </IconButton>
          </Group>
        </HStack>
      </Flex>
    </Box>
  )
}

export { HeroBanner }
