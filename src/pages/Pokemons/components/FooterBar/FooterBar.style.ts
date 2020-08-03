import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const DropdownItem = styled.span`
  width: 100%;
  padding: 12px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.16);
  }
`
