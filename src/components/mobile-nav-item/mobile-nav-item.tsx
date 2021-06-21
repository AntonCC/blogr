import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'

interface Props {
  innerItems: string[],
  sectionHeight: number,
  children: React.ReactNode
}

interface NavProps {
  openNavItem: boolean,
  sectionHeight: number
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
    overflow: hidden;
    .inner-items-list {
      opacity: 0;
      text-align: center;
      font-size: 1.6rem;
      font-weight: 600;
      color: #1F3E5A;
    }
    ${({ openNavItem, sectionHeight }) => 
      openNavItem &&
        css`
          height: ${sectionHeight}px;
          width: 100%;
          background: #dedede;
          margin-bottom: 2rem;
          .inner-items-list {
            opacity: 1;
          }
        `
    }
  }
`

const MobileNavItem: React.FC<Props> = ({ innerItems, sectionHeight, children }) => {
  const [openNavItem, setOpenNavItem] = useState(false)

  const handleNavItemClick = () => {
    setOpenNavItem(!openNavItem)
  }

  return (
    <StyledMobileNavItem openNavItem={openNavItem} sectionHeight={sectionHeight}>
      <div className="name" onClick={handleNavItemClick}>
        { children }
      </div>
      <div className="inner-items">
        <ul className="inner-items-list">
          {
            innerItems.map((item) => (
              <li>{ item }</li>
            ))
          }
        </ul>
      </div>
    </StyledMobileNavItem>
  )
}

export default MobileNavItem;