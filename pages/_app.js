import React from 'react'
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'

import CustomTheme from '../public/theme'
// import FbHead from '../components/common/head'

import '../styles/main.scss'

export default function Flossbank ({ Component, pageProps }) {
  return (
    <ThemeProvider theme={CustomTheme}>
      <CSSReset />
      <ColorModeProvider>
        {/* <FbHead /> */}
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  )
}
