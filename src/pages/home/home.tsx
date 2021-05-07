import React from 'react'
import { Container } from '../../styledGeneral/styledGeneral'

import Landing from '../../components/landing/landing'
import Banner from '../../components/banner/banner'
import SlimBanner from '../../components/slim-banner/slim-banner'

import { banner1Info, banner2Info } from './homeInfo'

const Home = () => {
  return (
    <div>
      <Landing />
      <Banner {...banner1Info} />
      <SlimBanner />
      <Banner {...banner2Info} />
    </div>
  )
}

export default Home;