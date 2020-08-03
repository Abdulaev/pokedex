import React from 'react'

import { StyledInput } from './Input.style'

interface InputProps {
  onChange: (query: string) => void
  placeholder?: string
}

export const Input: React.FC<InputProps> = ({ onChange, placeholder = '' }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return <StyledInput onChange={handleChange} placeholder={placeholder} />
}
