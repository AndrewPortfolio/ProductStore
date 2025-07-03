'use client'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode' 
//import { ColorModeScript, extendTheme } from "@chakra-ui/react" 
import React from 'react'

// // 1) Configure your default mode
// const config = {
//   initialColorMode: 'light',    // or 'dark'
//   useSystemColorMode: false,
// }

// // 2) Build a theme with that config
// const theme = extendTheme({ config })


// // 3) Export a real provider
// export function Provider({ children }) {
//   return (
//     <>
//       {/* inject the correct <html> class BEFORE React */}
//       <ColorModeScript initialColorMode={theme.config.initialColorMode} />
//       {/* make Chakra’s context (including color-mode) available */}
//       <ChakraProvider theme={theme}>
//         {children}
//       </ChakraProvider>
//     </>
//   )
// }

export function Provider(props) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
