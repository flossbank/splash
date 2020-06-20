/* global jest */
import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'
import CustomTheme from '../public/theme'
import '@testing-library/jest-dom/extend-expect'

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={CustomTheme}>
      <CSSReset />
      <ColorModeProvider>
        {children}
      </ColorModeProvider>
    </ThemeProvider>
  )
}

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }

const useRouter = jest.spyOn(require('next/router'), 'useRouter')
export function mockNextUseRouter ({ route, pathname, query, asPath }) {
  useRouter.mockImplementation(() => ({ route, pathname, query, asPath }))
}
