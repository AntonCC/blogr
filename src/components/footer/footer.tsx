import React from 'react'
import { Container } from '../../styledGeneral/styledGeneral'
import { StyledFooter } from './sFooter'
import { ReactComponent as Logo } from '../../assets/logo.svg'

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <div className="logo">
          <Logo />
        </div>
        <div className="site-links">
          <div className="section-title">Product</div>
          <ul>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Feature</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="site-links">
          <div className="section-title">Company</div>
          <ul>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Feature</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="site-links">
          <div className="section-title">Connect</div>
          <ul>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Feature</li>
            <li>Integrations</li>
          </ul>
        </div>
      </Container>
    </StyledFooter>
  )
}

export default Footer;