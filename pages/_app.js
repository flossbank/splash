import React from 'react'
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'

import CustomTheme from '../public/theme'

import '../styles/main.scss'

export default function Flossbank ({ Component, pageProps }) {
  return (
    <ThemeProvider theme={CustomTheme}>
      <CSSReset />
      <ColorModeProvider>
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  )
}
