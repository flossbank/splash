import React, { useState } from 'react'
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'

import CustomTheme from '../public/theme'
import { UserContext } from '../utils/userContext'

import '../styles/main.scss'

export default function Flossbank ({ Component, pageProps }) {
  const [user, setUser] = useState(undefined)

  return (
    <ThemeProvider theme={CustomTheme}>
      <CSSReset />
      <ColorModeProvider>
        <UserContext.Provider value={{ user, setUser }}>
          <Component {...pageProps} />
        </UserContext.Provider>
      </ColorModeProvider>
    </ThemeProvider>
  )
}
