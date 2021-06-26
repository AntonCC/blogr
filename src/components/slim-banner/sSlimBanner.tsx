import styled from 'styled-components'
import theme from '../../theme/theme'

export const StyledSlimBanner = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  background: linear-gradient(to right, #2D2E40, #3F4164);
  position: relative;
  .background {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    .img-background {
      position: absolute;
      top: -120%;
    }
  }
  .general-container {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 12rem 0;
    .text {
      max-width: 540px;
      z-index: 15;
      h2 {
        font-size: 4rem;
        margin-bottom: .5rem;
      }
      p {
        font-size:  1.6rem;
        line-height: 2.8rem;
      }
    }
    .img-container {
      position: absolute;
      left: -30px;
    }
  }

  @media only screen and (max-width: 1160px) {
    margin-top: 10rem;
    .background {
      .img-background {
        top: -80%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .general-container {
      justify-content: center;
      .text {
        padding-top: 25rem;
        text-align: center;
        h2 {
          margin-bottom: 2rem;
        }
      }
      .img-container {
        top: -30%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .general-container {
      .img-container {
        top: 0;
        img {
          max-width: 300px;
        }
      }
    }
  }
`