'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={customTheme}>
        <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}