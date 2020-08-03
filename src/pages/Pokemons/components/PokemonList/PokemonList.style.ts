import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
