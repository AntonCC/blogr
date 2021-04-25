import React from 'react'
import styled, { css } from 'styled-components'

interface Props {
  inverse?: boolean,
  children: React.ReactNode
}

interface ButtonProps {
  inverse?: boolean
}

const StyledButton = styled.button<ButtonProps>`
  background: none;
  outline: none;
  border: none;
  padding: 1.25rem 3rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  color: #FF505C;
  font-size: 1.6rem;
  margin: 0 1rem;
  cursor: pointer;
  transition: transform 65ms ease-in; 
  ${({ inverse }) => 
    inverse && 
      css`
        border: 1px solid ${({ theme }) => theme.colors.white};
        background: none;
        color: ${({ theme }) => theme.colors.white};
      `}
  &:hover {
    transform: scale(1.075) 
  }
`


const Button: React.FC<Props> = ({ inverse, children }) => {
  return (
    <StyledButton inverse={inverse}>
      { children }
    </StyledButton>
  )
}

export default Button;