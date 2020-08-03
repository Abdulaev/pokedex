import React from 'react'
import { ThemeProvider } from 'styled-components'

export const theme = {
  padding: {
    default: 12,
    small: 2
  },
  colors: {
    lightPink: 'rgb(238,92,85)',
    white: 'white',
    black: 'black',
    lightGray: '#777777d1'
  },
  fontSize: {
    large: 32,
    medium: 24,
    default: 18,
    small: 16,
    thin: 14
  },
  breakPoints: {
    lg: 1200
  }
}

export const AppThemeProvider: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>{children}</>
  </ThemeProvider>
)
