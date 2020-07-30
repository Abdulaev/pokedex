import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as RouterProvider } from 'react-router-dom'
import { AppThemeProvider as ThemeProvider } from 'core/styles/theme'

import { App } from 'pages/App.routing'

const rootEl = document.querySelector('#root')

ReactDOM.render(
  <RouterProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </RouterProvider>,
  rootEl
)
