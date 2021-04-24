import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: none;
  outline: none;
  border: none;
  padding: 1.25rem 3rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  color: #FF505C;
  font-size: 1.6rem;
  margin: 0 1rem;
`
interface Props {
  children: React.ReactNode
}

const Button: React.FC<Props> = ({ children }) => {
  return (
    <StyledButton>
      { children }
    </StyledButton>
  )
}

export default Button;