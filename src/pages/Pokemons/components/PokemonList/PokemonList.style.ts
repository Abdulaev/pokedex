import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const CardWrapper = styled.div`
  width: 240px;
  padding: 8px;
`

export const TagList = styled.div`
  display: flex;

  & > div {
    margin: 4px;
  }
`
