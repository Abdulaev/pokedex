import React from 'react'
import { useLocalStore, observer } from 'mobx-react'
import { useOutsideClick } from 'hooks/useOutsideClick'
import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg'
import {
 Container, Label, Menu, Panel 
} from './Dropdown.style'
import { createDropdownStore } from './Dropdown.store'

interface DropdownProps {
  placeholder: string
}

export const Dropdown: React.FC<DropdownProps> = observer(({ children, placeholder }) => {
  const store = useLocalStore(createDropdownStore)

  const containerRef = useOutsideClick<HTMLDivElement>(store.close)

  return (
    <Container ref={containerRef}>
      <Panel onClick={store.open} open={store.isOpened}>
        <Label>{placeholder}</Label>
        <ArrowIcon />
      </Panel>
      {store.isOpened && <Menu>{children}</Menu>}
    </Container>
  )
})
