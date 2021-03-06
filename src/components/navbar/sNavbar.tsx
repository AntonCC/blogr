import styled, { css } from 'styled-components'

interface Props {
  hamburgerClicked: boolean,
}

export const StyledNavbar = styled.div<Props>`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1110px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 15;
  .side-a {
    display: flex;
    align-items: center;
    .logo {
      margin-right: 3.2rem;
    }
    .nav-list ul {
      display: flex;
      list-style: none;
      font-family: 'Ubuntu', sans-serif;
      .item-dropdown {
        position: relative;
        .item {
          margin: 3.2rem;
          font-size: 1.6rem;
          color: ${({ theme }) => theme.colors.white};
          cursor: pointer;
          svg {
            margin-left: .5rem;
          }
          .dropdown {
            width: 90%;
            padding: 2rem;
            margin-top: 1rem;
            position: absolute;
            background: #fff;
            border-radius: 5px;
            display: none;
            .inner {
              display: flex;
              flex-direction: column;
              li {
                color: #111;
                &:not(:last-child) {
                 margin-bottom: 1.5rem; 
                }
                &:hover {
                  font-weight: 700;
                }
              }
            }
          }
        }
        &:hover {
          .item {
            text-decoration: underline;
            .dropdown {
              display: block;
            }
          }
        }
      }
    }
  }
  .hamburger {
    display: none;
  }
  .slide-out {
    position: absolute;
    width: 100%;
    top: 100px;
    left: 0;
    filter: drop-shadow(0 .5rem 2.75rem #222);
    transition: all 250ms ease-in-out;
    opacity: 0;
    visibility: none;
    pointer-events: none;
    ${({ hamburgerClicked }) => 
      hamburgerClicked && 
        css`
          opacity: 1;
          background: #fff;
          border-radius: 5px;
          visibility: block;
          pointer-events: unset;
        `
      }

      .mobile-nav-list {
          width: 100%;
          padding: 2rem;
          ul {
            list-style: none;
          }
          .line {
            height: 1px;
            width: 100%;
            background: #dedede;
            margin-bottom: 2rem;
          }
          .cta {
            display: flex;
            flex-direction: column;
            align-items: center;
            p {
              font-size: 1.8rem;
              font-weight: 600;
              color: #1F3E5A;
              cursor: pointer;
              margin-bottom: 2rem;
            }
          }
        }
      }
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