import React from 'react'
import styled from 'styled-components'

import Button from '../button/button'

import { ReactComponent as Shapes } from '../../assets/bg-pattern-intro.svg'


const StyledLanding = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #FF8F71, #FF3E55);
  border-bottom-left-radius: 125px;
  overflow: hidden;
  .shapes-container {
    position: absolute;
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 8rem;
    z-index: 5; 
    h1 {
      font-size: 6.4rem;
      color: ${({ theme }) => theme.colors.white};
      margin-bottom: 2.4rem;
    }
    p {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.white};
      margin-bottom: 4.8rem;
    }
  }

  @media only screen and (max-width: 1000px) {
    .text {
      text-align: center;
      h1 {
        font-size: 3.6rem;
      }
      p {
        font-size: 1.8rem;
      }
    }
  }
`

const Landing = () => {
  return (
    <StyledLanding>
      <div className="shapes-container">
        <Shapes />
      </div>
      <div className="text">
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className="button-cta">
          <Button>Start for Free</Button>
          <Button inverse>Learn More</Button>
        </div>
      </div>
    </StyledLanding>
  )
}

export default Landing;