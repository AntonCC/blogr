import styled, { css } from 'styled-components'

interface BannerProps {
  reverseSide?: boolean 
}

export const StyledBanner= styled.div<BannerProps>`
  width: 100%;
  padding: 16rem 0;
  .general-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #1F3E5A;
    .title {
      font-size: 4rem;
      margin-bottom: 9rem;
      font-weight: 600;
    }
    .content {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 4rem;
      align-items: center;
      position: relative;
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
        object-fit: cover;
        img {
          width: 100%;
        }
      }

      ${({ reverseSide }) =>
        reverseSide &&
          css`
            .text {
              order: 2;
            }
            .img-container {
              order: 1;
            }
          `
      }
    }
  }

  @media only screen and (max-width: 1160px) {
    .general-container {
      .title {
        font-size: 3.2rem;
        margin-bottom: 4rem;
      }
      .content {
        grid-template-columns: 1fr;
        justify-content: center;
        align-items: center;
        .text {
          order: 2;
          text-align: center;
          margin: 0 auto;
        }
        .img-container {
          order: 1;
          margin: 0 auto 2rem auto;
          img {
            max-width: 700px;
          }
        }
      }
    }
  }
`