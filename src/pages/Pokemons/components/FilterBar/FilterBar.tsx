import React from 'react'
import { Multiselect } from 'react-widgets'

import { Input, Tag } from 'common/components'
import { TYPE_COLORS } from 'common/enums'
import { Container } from './FilterBar.style'

interface SelectItem {
  color: string
  name: string
}

interface TagItemProps {
  item: SelectItem
}

interface FilterBarProps {
  filterByName: (query: string) => void
  filterByType: (types: string[]) => void
}

const multiSelectData = Object.entries(TYPE_COLORS).map(([name, color]) => ({ name, color }))

const TagItem: React.FC<TagItemProps> = ({ item }) => {
  return <Tag color={item.color}>{item.name}</Tag>
}

export const FilterBar: React.FC<FilterBarProps> = ({ filterByType, filterByName }) => {
  const handleChange = (types: SelectItem[]) => {
    const typeNames = types.map(i => i.name)
    filterByType(typeNames)
  }

  return (
    <Container>
      <Input onChange={filterByName} placeholder='Search by name...' />
      <Multiselect
        placeholder='Select some pokemon types...'
        data={multiSelectData}
        tagComponent={TagItem}
        textField='name'
        onChange={handleChange}
      />
    </Container>
  )
}
