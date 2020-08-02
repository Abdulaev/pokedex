import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  position: fixed;
  z-index: 999;
  overflow: visible;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 150px;
  height: 150px;

  animation: ${rotate} 1.2s linear infinite;

  img {
    width: 100%;
  }
`
