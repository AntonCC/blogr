import styled from 'styled-components'

export const StyledFooter = styled.footer`
  width: 100%;
  background: #24242C;
  border-top-right-radius: 125px;
  padding: 7rem 16rem;
  display: flex;
  justify-content: space-between;
  .site-links {
    .section-title {
      font-size: 1.5rem;
      color: #fff;
      font-weight: 600;
      margin-bottom: 2.5rem;
    }
    ul {
      list-style: none;
      font-size: 1.5rem;
      color: #fff;
      opacity: .6;
      li {
        margin-bottom: 1.5rem;
      }
    }
  }
`