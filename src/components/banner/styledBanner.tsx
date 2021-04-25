import styled from 'styled-components'

export const StyledBanner = styled.div`
  width: 100%;
  padding: 16rem 0;
  .general-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: 4rem;
      margin-bottom: 9rem;
      font-weight: 600;
    }
    .content {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .text {
        max-width: 540px;
        h4 {
          font-size: 2.8rem;
          margin-bottom: 4.6rem;
          font-weight: 600;
        }
        p {
          font-size: 1.6rem;
          line-height: 2.8rem;
        }
      }
    }
  }
`