import styled from 'styled-components'

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  bottom: 30px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  padding: 4px 0;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
`

export const Label = styled.span`
  background-color: transparent;
  border: none;
  font-size: ${p => p.theme.fontSize.default}px;
  cursor: pointer;
  margin-right: 8px;

  &:focus {
    outline: none;
  }
`

export const Panel = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    transform: ${p => (p.open ? 'rotate(0.5turn)' : 'rotate(0turn)')};
    width: 12px;
    height: 12px;

    transition: transform 0.2s linear;
  }
`
