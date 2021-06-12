import React from 'react'
import styled, { css } from 'styled-components'

interface Props {
  inverse?: boolean,
  orange?: boolean,
  blockHoverEffect?: boolean,
  children: React.ReactNode
}

interface ButtonProps {
  inverse?: boolean,
  orange?: boolean,
  blockHoverEffect?: boolean,
}

const StyledButton = styled.button<ButtonProps>`
  font-family: 'Ubuntu', sans-serif;
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
      `
    }
  ${({ orange }) =>
    orange &&
      css`
        color: ${({ theme }) => theme.colors.white};
        background: linear-gradient(to right, #FF8F71, #FF3E55);
      `
    }
  ${({ blockHoverEffect }) => 
    !blockHoverEffect &&
      css`
        &:hover {
          transform: scale(1.075) 
        }
      `
  }
`


const Button: React.FC<Props> = ({ inverse, orange, blockHoverEffect, children }) => {
  return (
    <StyledButton 
      inverse={inverse} 
      orange={orange}
      blockHoverEffect={blockHoverEffect}
    >
      { children }
    </StyledButton>
  )
}

export default Button;