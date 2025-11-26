import {
  Avatar,
  Button,
  CloseButton,
  Container,
  Drawer,
  Flex,
  HStack,
  IconButton,
  Link,
  Portal,
  Stack,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import { AiOutlineHome, AiOutlineSound } from 'react-icons/ai'
import { GoGear } from 'react-icons/go'
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoSparkles } from 'react-icons/io5'
import { MdOutlinePodcasts } from 'react-icons/md'

const NAV_ITEMS = [
  { icon: AiOutlineHome, label: 'Home', href: '#', isActive: true },
  { icon: MdOutlinePodcasts, label: 'LIVE', href: '#' },
  { icon: AiOutlineSound, label: 'Musical Styles', href: '#' },
  { icon: IoSparkles, label: 'Exclusive Content', href: '#' },
]

function Header() {
  return (
    <Flex
      as="header"
      backdropFilter="blur(8px)"
      bg="rgba(13, 13, 13, 0.8)"
      position="fixed"
      top={0}
      w="100%"
      zIndex={10}
    >
      <HStack
        alignItems="flex-end"
        as={Container}
        justifyContent="space-between"
        mx="auto"
        py={4}
      >
        <HStack alignItems="flex-end">
          <Link href="/">
            <Image
              alt="W labs Festival logo"
              height={50}
              priority
              src="/logo.png"
              width={150}
            />
          </Link>
          <HStack
            as="nav"
            display={{ base: 'none', lg: 'flex' }}
          >
            {NAV_ITEMS.map(({ icon: Icon, label, href, isActive }) => (
              <Link
                color={{
                  base: isActive ? 'orange.400' : 'gray.200',
                  _hover: 'orange.400',
                }}
                href={href}
                key={label}
                mx={2}
                textDecoration="none"
              >
                <Icon />
                {label}
              </Link>
            ))}
          </HStack>
        </HStack>
        <Button
          _hover={{
            color: 'gray.800',
          }}
          color="gray.200"
          display={{ base: 'none', lg: 'flex' }}
          px={2}
          variant="ghost"
        >
          <Avatar.Root size="xs">
            <Avatar.Fallback name="Peter Parker" />
            <Avatar.Image src="https://avatar.iran.liara.run/public" />
          </Avatar.Root>
          Peter Parker
          <GoGear />
        </Button>
        <Drawer.Root>
          <Drawer.Trigger asChild>
            <IconButton
              aria-label="Open menu"
              color={{ base: 'gray.200', _hover: 'gray.500' }}
              display={{ base: 'flex', lg: 'none' }}
              variant="outline"
            >
              <HiMenuAlt3 size={24} />
            </IconButton>
          </Drawer.Trigger>
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content bg="gray.900">
                <Drawer.Header>
                  <Drawer.Title color="white">Menu</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                  <VStack
                    align="stretch"
                    gap={4}
                    mt={8}
                  >
                    <Button
                      _hover={{
                        color: 'gray.800',
                      }}
                      color="gray.200"
                      justifyContent="flex-start"
                      px={2}
                      variant="ghost"
                    >
                      <Avatar.Root size="xs">
                        <Avatar.Fallback name="Peter Parker" />
                        <Avatar.Image src="https://avatar.iran.liara.run/public" />
                      </Avatar.Root>
                      Peter Parker
                      <GoGear />
                    </Button>
                    <Stack
                      as="nav"
                      gap={2}
                    >
                      {NAV_ITEMS.map(
                        ({ icon: Icon, label, href, isActive }) => (
                          <Link
                            _hover={{ color: 'orange.400', bg: 'gray.800' }}
                            alignItems="center"
                            borderRadius="md"
                            color={isActive ? 'orange.400' : 'gray.200'}
                            display="flex"
                            gap={3}
                            href={href}
                            key={label}
                            p={3}
                            textDecoration="none"
                          >
                            <Icon size={20} />
                            {label}
                          </Link>
                        )
                      )}
                    </Stack>
                  </VStack>
                </Drawer.Body>
                <Drawer.CloseTrigger asChild>
                  <CloseButton
                    color={{ base: 'white', _hover: 'gray.500' }}
                    size="sm"
                  />
                </Drawer.CloseTrigger>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      </HStack>
    </Flex>
  )
}

export { Header }
