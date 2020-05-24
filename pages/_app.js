import React from "react"
import { 
  ThemeProvider, 
  CSSReset, 
  ColorModeProvider 
} from "@chakra-ui/core"

import FbHead from '../components/common/head'
import '../public/styles/main.scss'

export default function Flossbank ({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CSSReset />
      <ColorModeProvider>
        <FbHead />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  )
}