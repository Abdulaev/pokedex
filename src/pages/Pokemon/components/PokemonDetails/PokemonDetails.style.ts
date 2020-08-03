import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h5`
  font-size: ${p => p.theme.fontSize.medium}px;
  text-transform: capitalize;
  margin: 8px 0;
`

export const Description = styled.p`
  font-size: ${p => p.theme.fontSize.default}px;
  text-transform: capitalize;
`

export const HeaderContainer = styled.div`
  margin: 0 0 20px 0;
`

export const Body = styled.div`
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid #dfdfdf;

  & > div {
    margin-bottom: 16px;
  }
`

export const Group = styled.div`
  padding: 0 0 0 8px;
  border-left: 2px solid #dfdfdf;
`

export const Tags = styled.div`
  display: flex;

  & > div {
    margin-right: 8px;
  }
`
