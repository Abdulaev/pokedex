import { css } from 'styled-components'

export const normalize = css`
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  main {
    display: block;
  }

  h1,
  h2,
  h3,
  p,
  span {
    margin: 0;
  }

  a {
    background-color: transparent;
    text-decoration: none;
  }

  img {
    border-style: none;
  }

  textarea {
    overflow: auto;
  }
`
