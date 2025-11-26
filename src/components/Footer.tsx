import {
  Container,
  HStack,
  Link,
  Separator,
  Text,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import { BsInstagram, BsTiktok, BsYoutube } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { LiaLinkedinIn } from 'react-icons/lia'
import { PiXLogo } from 'react-icons/pi'

function Footer() {
  return (
    <Container
      as="footer"
      pb={10}
    >
      <Separator opacity={0.5} />
      <HStack
        gap={20}
        justifyContent="space-between"
        mt={6}
      >
        <VStack
          alignItems="flex-start"
          flex={2}
          gap={8}
        >
          <Text
            color="gray.400"
            fontSize="xs"
            maxW={700}
          >
            heck the Parental Guidance Rating © 2024 WarnerMedia Direct Latin
            America, LLC. All rights reserved. Max is used under license.
            <br />© 2024 Globo Comunicação e Participações S.A. All rights
            reserved. Big Brother Brasil is used under license. The trademarks
            GLOBO®, TV GLOBO®, GLOBO NEWS®, CANAL BRASIL®, SPORTV®, MULTISHOW®,
            OFF®, GNT®, BIS®, GLOOBINHO®, GLOOB®, VIVA®, MODO VIAGEM®,
            PREMIERE®, and COMBATE® are properties of Globo Comunicação e
            Participações S.A.
            <br />© 2024 NBCUniversal. All rights reserved. The Universal,
            Studio Universal, and USA Network trademarks are properties of
            NBCUniversal.
            <br />© 2024 Telecine Programação De Filmes Ltda. All rights
            reserved. The registered trademarks TELECINE® and MEGAPIX® are
            properties of Telecine Programação De Filmes Ltda.
            <br />
            Paramount+ © 2024 Paramount. All rights reserved.
          </Text>
          <HStack gap={4}>
            {[
              { icon: BsYoutube, href: '#' },
              { icon: LiaLinkedinIn, href: '#' },
              { icon: BsInstagram, href: '#' },
              { icon: FaFacebookF, href: '#' },
              { icon: BsTiktok, href: '#' },
              { icon: PiXLogo, href: '#' },
            ].map(({ icon: Icon, href }, index) => (
              <Link
                color="gray.400"
                href={href}
                key={index}
              >
                <Icon size={20} />
              </Link>
            ))}
          </HStack>
          <HStack gap={6}>
            <Link
              color="gray.400"
              href="#"
            >
              About Labs Festival
            </Link>
            <Link
              color="gray.400"
              href="#"
            >
              Terms of use and privacy
            </Link>
            <Link
              color="gray.400"
              href="#"
            >
              Send feedback
            </Link>
          </HStack>
        </VStack>
        <VStack
          alignItems="flex-end"
          flex={1}
          gap={6}
        >
          <Link href="/">
            <Image
              alt="W labs Festival logo"
              height={40}
              priority
              src="/logo.png"
              width={150}
            />
          </Link>
          <Text
            color="gray.400"
            fontSize="xs"
          >
            © 2024 Watch Brasil. All rights reserved
          </Text>
          <HStack gap={4}>
            <Link href="/">
              <Image
                alt="Download on Google Play"
                height={40}
                priority
                src="/images/badge-google-play.png"
                width={150}
              />
            </Link>
            <Link href="/">
              <Image
                alt="Download on the App Store"
                height={50}
                priority
                src="/images/badge-app-store.png"
                width={150}
              />
            </Link>
          </HStack>
        </VStack>
      </HStack>
    </Container>
  )
}

export { Footer }
