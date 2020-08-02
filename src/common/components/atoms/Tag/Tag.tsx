import React from 'react'

import { Container } from './Tag.style'

interface TagProps {
  color?: string
  children: React.ReactNode
}

export const Tag: React.FC<TagProps> = ({ color, children }: TagProps) => {
  return <Container color={color}>{children}</Container>
}
