import React from 'react'
import Header from '../components/Home/Header'
import SliderMain from'../components/Home/SliderMain'
import CollectionNewProducts from '../components/Home/CollectionNewProducts'
import BannerOne from '../components/Home/BannerOne'
import CollectionRunProducts from '../components/Home/CollectionRunProducts'
import BannerTwo from '../components/Home/BannerTwo'
import CollectionSportProducts from '../components/Home/CollectionSportProducts'

function Home() {
  return (
    <div>
      <Header />
      <SliderMain />
      <CollectionNewProducts />
      <BannerOne />
      <CollectionRunProducts />
      <BannerTwo />
      <CollectionSportProducts />
    </div>
  )
}

export default Home 