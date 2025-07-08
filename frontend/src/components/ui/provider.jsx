'use client'

import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import React from 'react'

const config = {
  initialColorMode: 'light',    // or 'dark'
  useSystemColorMode: false,    // respect OS setting?
}

const theme = extendTheme({ config })

export function Provider({ children }) {
  return (
    <>
      {/* Injects the <script> tag to read localStorage/system mode */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </>
  )
}

