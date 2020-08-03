import React from 'react'
import SpinnerIcon from 'assets/images/spinner.png'
import { Container, StyledImage } from './Loader.style'

interface LoaderProps {
  small?: boolean
}

export const Loader: React.FC<LoaderProps> = ({ small = false }) => {
  return (
    <Container small={small}>
      <StyledImage src={SpinnerIcon} alt='' />
    </Container>
  )
}
