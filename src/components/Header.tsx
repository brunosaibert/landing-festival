import { Avatar, Button, Container, Flex, HStack, Link } from '@chakra-ui/react'
import Image from 'next/image'
import { AiOutlineHome, AiOutlineSound } from 'react-icons/ai'
import { GoGear } from 'react-icons/go'
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
              objectFit="contain"
              priority
              src="/logo.png"
              width={150}
            />
          </Link>
          <HStack>
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
      </HStack>
    </Flex>
  )
}

export { Header }
