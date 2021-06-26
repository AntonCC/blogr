import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Container } from '../../styledGeneral/styledGeneral'
import { StyledNavbar } from './sNavbar'
import Button from '../button/button' 
import MobileNavItem from '../mobile-nav-item/mobile-nav-item'
import debounce from '../../helperFuncs/debounce'

import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as Arrow } from '../../assets/icon-arrow-light.svg'
import { ReactComponent as ArrowDark } from '../../assets/icon-arrow-dark.svg'
import { ReactComponent as Hamburger } from '../../assets/icon-hamburger.svg'
import { ReactComponent as Close } from '../../assets/icon-close.svg'

const mobileNavInfo = [
  {
    itemName: 'Product',
    innerItems: ['Overview', 'Pricing', 'Marketplace', 'Features', 'Inegration'],
    sectionHeight: 200
  },
  {
    itemName: 'Company',
    innerItems: ['About', 'Team', 'Blog', 'Careers'],
    sectionHeight: 175
  },
  {
    itemName: 'Connect',
    innerItems: ['Contact', 'Newsletter', 'Linkedin'],
    sectionHeight: 150
  }
]

const Navbar: React.FC = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false)


  const handleHamburgerClick = () => {
    setHamburgerClicked(!hamburgerClicked)
  }

  const handleResize = () => {
    if(window.innerWidth > 1000) {
      setHamburgerClicked(false)
    }
    console.log('Event fired!')
  }

  const debouncedHandleResize = debounce(handleResize, 50)

  useEffect(() => {
    window.addEventListener('resize', debouncedHandleResize)

    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [])

  return (
    <StyledNavbar hamburgerClicked={hamburgerClicked}>
      <div className="side-a">
        <div className="logo">
          <Logo />
        </div>
        <div className="nav-list">
          <ul>
            <div className="item-dropdown">
              <li className='item'>
                Product <Arrow />
                <div className="dropdown">
                  <ul className="inner">
                    <li className='inner-item'>Overview</li>
                    <li className='inner-item'>Pricing</li>
                    <li className='inner-item'>Marketplace</li>
                    <li className='inner-item'>Features</li>
                    <li className='inner-item'>Integrations</li>
                  </ul>
                </div>
              </li>
            </div>
            <div className="item-dropdown">
              <li className='item'>
                Company <Arrow />
                <div className="dropdown">
                  <ul className="inner">
                    <li className='inner-item'>About</li>
                    <li className='inner-item'>Team</li>
                    <li className='inner-item'>Blog</li>
                    <li className='inner-item'>Careers</li>
                  </ul>
                </div>
              </li>
            </div>
            <div className="item-dropdown">
              <li className='item'>
                Connect <Arrow />
                <div className="dropdown">
                  <ul className="inner">
                    <li className="inner-item">Contact</li>
                    <li className="inner-item">Newsletter</li>
                    <li className="inner-item">Linkedin</li>
                  </ul>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="cta-buttons">
        <Button inverse>Login</Button>
        <Button>Sign Up</Button>
      </div>
      <div className="hamburger" onClick={handleHamburgerClick}>
        {
          hamburgerClicked 
            ? <Close />
            : <Hamburger />
        }
      </div>
      <div className="slide-out">
        <div className="mobile-nav-list">
          <ul>
            {
              mobileNavInfo.map(({ itemName, innerItems, sectionHeight }) => (
                <MobileNavItem innerItems={innerItems} sectionHeight={sectionHeight}>
                  { itemName } <ArrowDark />
                </MobileNavItem>
              ))
            }
          </ul>
          <div className="line" />
          <div className="cta">
            <p>Login</p>
            <Button orange blockHoverEffect>Sign Up</Button>
          </div>
        </div>
      </div>
    </StyledNavbar>
  )
}

export default Navbar;