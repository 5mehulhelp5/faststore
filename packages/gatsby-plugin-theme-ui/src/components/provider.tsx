import React, { FC } from 'react'
import { ThemeProvider as ThemeUIProvider } from 'theme-ui'

import theme from '../index'

export const ThemeProvider: FC = ({ children }) => (
  <ThemeUIProvider theme={theme}>{children}</ThemeUIProvider>
)
