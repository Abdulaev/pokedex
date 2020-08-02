import React from 'react'
import { Image } from 'common/components'
import SpinnerIcon from 'assets/images/spinner.png'
import { Container } from './Loader.style'

export const Loader = () => {
  return (
    <Container>
      <Image src={SpinnerIcon} />
    </Container>
  )
}
