import styled from 'styled-components'

export const Container = styled.div`
  max-width: ${p => p.theme.breakPoints.lg}px;
  margin: 0 auto;

  @media (max-width: ${p => p.theme.breakPoints.lg}px) {
    margin: 0 8px;
  }
`

export const Layout = styled.div`
  width: 100%;
`
