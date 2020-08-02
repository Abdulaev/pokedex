import styled from 'styled-components'

export const Container = styled.div`
  padding: ${p => p.theme.padding.default}px;
  margin: 0 0 12px 0;
  width: 100%;
  background-color: ${p => p.theme.color.lightPink};
`

export const Title = styled.h3`
  display: inline;
  color: ${p => p.theme.color.white};
  font-size: ${p => p.theme.fontSize.large}px;
  cursor: pointer;
`
