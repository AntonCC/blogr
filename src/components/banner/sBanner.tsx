import styled from 'styled-components'

export const StyledBanner = styled.div`
  width: 100%;
  padding: 16rem 0;
  .general-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #1F3E5A;
    h2 {
      font-size: 4rem;
      /* margin-bottom: 9rem; */
      font-weight: 600;
    }
    .content {
      width: 100%;
      display: grid;
      grid-template-columns: 50% 50%;
      justify-content: center;
      align-items: center;
      .text {
        max-width: 540px;
        .group {
          margin-bottom: 6.4rem;
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
      .img-container {

      }
    }
  }
`