import styled from 'styled-components'

export const Container = styled.div<{ color: string }>`
  border-radius: 6px;
  padding: ${p => `${p.theme.padding.small}px ${p.theme.padding.default}px`};
  width: fit-content;
  background-color: ${p => (p.color ? p.color : p.theme.color.black)};
  color: ${p => p.theme.color.white};
  font-size: ${p => p.theme.fontSize.small}px;
`
