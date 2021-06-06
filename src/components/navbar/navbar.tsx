import React from 'react'
import styled from 'styled-components'

import { Container } from '../../styledGeneral/styledGeneral'
import { StyledNavbar } from './sNavbar'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as Arrow } from '../../assets/icon-arrow-light.svg'
import { ReactComponent as Hamburger } from '../../assets/icon-hamburger.svg'
import Button from '../button/button'


const Navbar = () => {
  return (
    <StyledNavbar>
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
                <div className="dropdown"></div>
              </li>
            </div>
            <div className="item-dropdown">
              <li className='item'>
                Connect <Arrow />
                <div className="dropdown"></div>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="cta-buttons">
        <Button inverse>Login</Button>
        <Button>Sign Up</Button>
      </div>
      <div className="hamburger">
        <Hamburger />
      </div>
    </StyledNavbar>
  )
}

export default Navbar;