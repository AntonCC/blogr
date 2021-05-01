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
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-areas: 'side-a side-b';
    justify-content: center;
    align-items: center;
    padding: 12rem 0;
    .text {
      grid-area: side-b;
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
`