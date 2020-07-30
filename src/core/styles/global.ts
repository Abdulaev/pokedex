import { createGlobalStyle } from 'styled-components'

import { normalize } from 'core/styles/normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  * { 
    box-sizing: border-box;
  }
  
  html, body, #root {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
`
