import React from 'react'
import { BodyContainer, Container, HeaderWrapper } from './Card.style'

interface CardProps {
  onClick?: () => void
  header?: React.ReactNode
  children: React.ReactNode
}

export const Card: React.FC<CardProps> = ({ onClick, header, children }: CardProps) => {
  return (
    <Container onClick={onClick}>
      {header && <HeaderWrapper>{header}</HeaderWrapper>}
      <BodyContainer>{children}</BodyContainer>
    </Container>
  )
}
