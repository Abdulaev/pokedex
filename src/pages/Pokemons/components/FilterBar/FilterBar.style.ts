import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  margin-left: 4px;

  & > input {
    margin-bottom: 12px;
  }

  & .rw-multiselect .rw-input-reset {
    height: 40px;
  }

  & .rw-widget-input > div {
    display: flex;
    align-items: center;
  }

  & .rw-multiselect-tag {
    height: auto;
    background-color: transparent;
    border: none;
  }

  & .rw-select {
    display: none;
  }
`
