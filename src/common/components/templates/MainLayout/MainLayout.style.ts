import styled from 'styled-components'

export const Container = styled.div`
  max-width: ${p => p.theme.breakPoints.lg}px;
  margin: 0 auto 12px auto;

  @media (max-width: ${p => p.theme.breakPoints.lg}px) {
    margin: 0 12px 12px 12px;
  }
`

export const Layout = styled.div`
  width: 100%;
`
