import React from 'react'
import { StyledBanner } from './sBanner'
import { Container } from '../../styledGeneral/styledGeneral'

interface Props {
  bannerTitle?: string,
  image: string,
  imageMobile: string,
  textContent: { title: string, text: string }[],
  reverseSide?: boolean
}

const Banner: React.FC<Props> = ({ bannerTitle, image, imageMobile, textContent, reverseSide}) => {
  return (
    <StyledBanner reverseSide={reverseSide}>
      <Container>
        {
          bannerTitle && 
            <h2 className='title'>{ bannerTitle }</h2>
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
            <picture>
              <source media='(max-width: 1160px)' srcSet={ imageMobile } />
              <img src={ image } alt="" />
            </picture>
          </div>
        </div>
      </Container>
    </StyledBanner>
  )
}

export default Banner;