import React from 'react'
import Pagination from 'rc-pagination'
import { locale } from 'core/constants/paginationLocale'
import { Dropdown } from 'common/components'
import { Container, DropdownItem } from './FooterBar.style'

interface FooterBarProps {
  pageLimit: number
  onPaginationChange: (page: number) => void
  currentPage: number
  totalPages: number
  onPageLimitChange: (newLimit: number) => void
}

const options = [
  {
    label: '10 items',
    value: 10
  },
  {
    label: '20 items',
    value: 20
  },
  {
    label: '50 items',
    value: 50
  }
]

export const FooterBar: React.FC<FooterBarProps> = ({
  totalPages,
  onPaginationChange,
  currentPage,
  pageLimit,
  onPageLimitChange
}) => {
  return (
    <Container>
      <Pagination
        locale={locale}
        total={totalPages}
        pageSize={pageLimit}
        onChange={onPaginationChange}
        current={currentPage}
      />
      <Dropdown placeholder='Items per page'>
        {options.map(i => (
          <DropdownItem key={i.label} onClick={() => onPageLimitChange(i.value)}>
            {i.label}
          </DropdownItem>
        ))}
      </Dropdown>
    </Container>
  )
}
