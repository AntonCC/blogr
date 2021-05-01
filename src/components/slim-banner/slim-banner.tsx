import React from 'react'
import Phone from '../../assets/illustration-phones.svg'
import Circles from '../../assets/bg-pattern-circles.svg'

import { Container } from '../../styledGeneral/styledGeneral'
import { StyledSlimBanner } from './sSlimBanner'

const SlimBanner = () => {
  return (
    <StyledSlimBanner>
      <div className="background">
        <div className="img-background">
          <img src={ Circles } alt=""/>
        </div>
      </div>
        <Container>
          <div className="text">
            <h2>State of the art infrastructure</h2>
            <p>
              With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
            </p>
          </div>
          <div className="img-container">
            <img src={ Phone } alt=""/>
          </div>
        </Container>
    </StyledSlimBanner>
  )
}

export default SlimBanner;