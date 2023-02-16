import type { AppProps } from 'next/app'
import * as React from 'react'
import Home from '.'

import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  )
}
