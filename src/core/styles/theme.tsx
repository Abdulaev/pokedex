import React from 'react'
import { ThemeProvider } from 'styled-components'

export const theme = {}

export const AppThemeProvider: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>{children}</>
  </ThemeProvider>
)
