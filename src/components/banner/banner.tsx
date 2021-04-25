import React from 'react'
import { StyledBanner } from './styledBanner'
import { Container } from '../../styledGeneral/styledGeneral'

const Banner = () => {
  return (
    <StyledBanner>
      <Container>
        <h2>Designed for the future</h2>
        <div className="content">
          <div className="text">
            <h4>Introducing an extensible editor</h4>
            <p>
              Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
            </p>
          </div>
          <div className="img-container">

          </div>
        </div>
      </Container>
    </StyledBanner>
  )
}

export default Banner;