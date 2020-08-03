import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 16px;
`

export const CardWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 240px;
  max-width: 320px;
  padding: 8px;
`

export const TagList = styled.div`
  display: flex;

  & > div {
    margin: 4px;
  }
`

export const Name = styled.p`
  font-size: ${p => p.theme.fontSize.medium}px;
`

export const Description = styled.h3`
  font-size: ${p => p.theme.fontSize.large}px;
`
