import React from 'react'
import styled from 'styled-components'

import { Container } from '../../styledGeneral/styledGeneral'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as Arrow } from '../../assets/icon-arrow-light.svg'
import { ReactComponent as Hamburger } from '../../assets/icon-hamburger.svg'
import Button from '../button/button'

const StyledNavbar = styled.div`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1110px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  .side-a {
    display: flex;
    align-items: center;
    .logo{
      margin-right: 3.2rem;
    }
    .nav-list ul {
      display: flex;
      list-style: none;
      li {
        margin: 3.2rem;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.colors.white};
        cursor: pointer;
        svg {
          margin-left: .5rem;
        }
      }
    }
  }
  .hamburger {
    display: none;
  }

  @media only screen and (max-width: 1000px) {
    .side-a {
      .nav-list {
        display: none;
      }
    }
    .cta-buttons {
      display: none;
    }
    .hamburger {
      display: block;
      cursor: pointer;
    }
  }
`

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="side-a">
        <div className="logo">
          <Logo />
        </div>
        <div className="nav-list">
          <ul>
            <li>Product <Arrow /></li>
            <li>Company <Arrow /></li>
            <li>Connect <Arrow /></li>
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