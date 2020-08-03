import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: ${p => p.theme.padding.default}px;
  margin: 0 0 12px 0;
  width: 100%;
  background-color: ${p => p.theme.colors.lightPink};
`

export const Title = styled.h3`
  display: inline;
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSize.large}px;
  cursor: pointer;
`

export const Content = styled.div`
  max-width: ${p => p.theme.breakPoints.lg}px;
  width: 100%;
`
