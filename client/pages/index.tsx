import '@fontsource/open-sans/700.css'
import '@fontsource/open-sans/400.css'
import { useDisclosure } from '@chakra-ui/react'

import NavBar from '@/components/naxbar'
import { SlideFade, Button, Image, HStack, Text, Flex, Link, VStack, Heading } from "@chakra-ui/react"

export default function Home() {
  const { isOpen, onToggle } = useDisclosure(); 
  return (
    <>
      <Image zIndex="-1" position="absolute" width="100vw" maxHeight="90vh" src="landing-background.png" alt="green background color"></Image>
      <NavBar></NavBar>
      <Flex p="5rem" align="center" justify="space-around" >
      
      <SlideFade in={!isOpen} offsetY='20px'>
      <VStack align="left"  spacing="2rem" maxWidth="50vw" p="2rem">
          <Heading color="brand.veryDark">Good Mood, Good Food</Heading>
          <Text color="brand.dark" fontSize="1.5rem">Personalized plans to help you achieve a healthy, balanced lifestyle. </Text>
          <HStack spacing="2rem">
            <Button bgColor="brand.dark" color="white"
              px="2rem"
              height="3.5rem" 
              fontSize="1.25rem"
              borderRadius='100px'
            _hover={{ bg: "brand.veryDark" }}
            _active={{
              bg: 'brand.medium',
              transform: 'scale(0.98)',
              borderColor: '#bec3c9',
            }}>Download Diaita</Button>
            <Link variant="underline" color="brand.medium" fontWeight="bold" fontSize="1.25rem">Contact Us</Link>
          </HStack>
      </VStack>
      </SlideFade>
      <Image pr="7rem" src="phone.png" alt="picture of phone with Diaita App opened" maxHeight="50vh"></Image>
      </Flex>
    </>
  )
}
