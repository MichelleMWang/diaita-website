import '@fontsource/open-sans/700.css'
import '@fontsource/open-sans/400.css'

import { Button, Image, HStack, Text, Flex, Link, VStack, Heading } from "@chakra-ui/react"
import bg from '../public/landing-background.png'; 

export default function Home() {
  return (
    <>
      <Image zIndex="-1" position="absolute" width="100vw" src="landing-background.png" alt="green background color"></Image>
      <Flex padding="1.5rem" align="center" justify="space-between">
        <Image src="logo.png" alt="Diaita Logo" width="7rem"></Image>
        <HStack spacing="3rem">
          <Link>Who We Are</Link>
          <Link>Blog</Link>
          <Link>Contact</Link>
        </HStack>
      </Flex>
      
      <VStack align="left" padding="7rem" spacing="2rem">
          <Heading>Good Mood, Good Food</Heading>
          <Text>Personalized plans to help you achieve a healthy, balanced lifestyle. </Text>
          <HStack>
            <Button>Download Diaita</Button>
            <Link>Contact Us</Link>
          </HStack>
      </VStack>
    </>
  )
}
