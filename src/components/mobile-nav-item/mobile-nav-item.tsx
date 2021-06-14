import React, { useState } from 'react'
import styled, { css } from 'styled-components'

interface Props {
  children: React.ReactNode
}

interface NavProps {
  openNavItem: boolean
}

const StyledMobileNavItem = styled.li<NavProps>`
  .name {
    width: 100%;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 600;
    color: #1F3E5A;
    margin-bottom: 2rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    svg {
      margin-left: .5rem;
    }
  }
  .inner-items {
    height: 0;
    transition: all 250ms ease-in-out;
    ${({ openNavItem }) => 
      openNavItem &&
        css`
          height: 100px;
          width: 100%;
          background: #dedede;
          margin-bottom: 2rem;
        `
    }
  }
`

const MobileNavItem: React.FC<Props> = ({ children }) => {
  const [openNavItem, setOpenNavItem] = useState(false)

  const handleNavItemClick = () => {
    setOpenNavItem(!openNavItem)
  }


  return (
    <StyledMobileNavItem openNavItem={openNavItem}>
      <div className="name" onClick={handleNavItemClick}>
        { children }
      </div>
      <div className="inner-items"></div>
    </StyledMobileNavItem>
  )
}

export default MobileNavItem;