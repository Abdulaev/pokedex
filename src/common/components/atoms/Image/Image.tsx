import React from 'react'
import { StyledImage } from './Image.style'

interface IconProps {
  src: string
}

export const Image: React.FC<IconProps> = ({ src }) => {
  return <StyledImage src={src} alt='' />
}
