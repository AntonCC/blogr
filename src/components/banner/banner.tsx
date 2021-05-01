import React from 'react'
import { StyledBanner } from './sBanner'
import { Container } from '../../styledGeneral/styledGeneral'
import { ReactComponent as Test } from '../../assets/illustration-editor-desktop.svg'

interface Props {
  bannerTitle?: string,
  textContent: { title: string, text: string }[]
}

const Banner: React.FC<Props> = ({ bannerTitle, textContent}) => {
  return (
    <StyledBanner>
      <Container>
        {
          bannerTitle && 
            <h2>{ bannerTitle }</h2>
        }
        <div className="content">
          <div className="text">
            {
              textContent.map(({ title, text}) => (
                <div className="group">
                  <h4>{ title }</h4>
                  <p>{ text }</p>
                </div>
              ))
            }
          </div>
          <div className="img-container">
            <Test />
          </div>
        </div>
      </Container>
    </StyledBanner>
  )
}

export default Banner;