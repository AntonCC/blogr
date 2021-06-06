import styled from 'styled-components'

export const StyledNavbar = styled.div`
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
            /* height: 100px; */
            position: absolute;
            background: #fff;
            border-radius: 5px;
            display: none;
            .inner {
              display: flex;
              flex-direction: column;
              li {
                color: #111;
              }
            }
          }
          &:hover {
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