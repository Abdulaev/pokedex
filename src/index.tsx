import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as RouterProvider } from 'react-router-dom'
import { AppThemeProvider as ThemeProvider } from 'core/styles/theme'
import { GlobalStyle } from 'core/styles/global'
import { App } from 'pages/App.routing'

import 'mobx-react-lite/batchingForReactDom'
import 'react-widgets/dist/css/react-widgets.css'

const rootEl = document.querySelector('#root')

ReactDOM.render(
  <RouterProvider>
    <ThemeProvider>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </RouterProvider>,
  rootEl
)
