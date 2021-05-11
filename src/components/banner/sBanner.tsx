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
      display: flex;
      justify-content: flex-start;
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
        /* width: 200px; */
        width: 50%;
      }

      ${({ reverseSide}) =>
        reverseSide &&
          css`
            .text {
              
            }
            .img-container {

            }
          `
      }
    }
  }
`