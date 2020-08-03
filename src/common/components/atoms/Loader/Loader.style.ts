import styled, { keyframes, css } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const StyledImage = styled.img`
  max-width: 100%;
`

export const Container = styled.div`
  width: ${p => (p.small ? 32 : 150)}px;
  height: ${p => (p.small ? 32 : 150)}px;

  ${p =>
    !p.small &&
    css`
      position: fixed;
      z-index: 999;
      overflow: visible;
      margin: auto;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    `};

  animation: ${rotate} 1.2s linear infinite;

  img {
    width: 100%;
  }
`
