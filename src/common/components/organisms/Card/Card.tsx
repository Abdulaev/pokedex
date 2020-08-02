import React from 'react'
import { BodyContainer, Container } from './Card.style'

interface CardProps {
  onClick?: () => void
  header?: React.ReactNode
  children: React.ReactNode
}

export const Card: React.FC<CardProps> = ({ onClick, header, children }: CardProps) => {
  return (
    <Container onClick={onClick}>
      {header && header}
      <BodyContainer>{children}</BodyContainer>
    </Container>
  )
}
