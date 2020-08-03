import styled from 'styled-components'

export const StyledInput = styled.input`
  height: 40px;
  background-color: ${p => p.theme.colors.white};
  border: #ccc 1px solid;
  border-radius: 4px;
  padding: 0 14px;
  font-size: ${p => p.theme.fontSize.small}px;
  color: rgb(51, 51, 51);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);

  &::placeholder {
    color: ${p => p.theme.colors.lightGray};
  }

  &:focus {
    outline: none;
  }
`
