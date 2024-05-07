import React from 'react'
import Header from '../components/Home/Header'
import SliderMain from'../components/Home/SliderMain'
import CollectionNewProducts from '../components/Home/CollectionNewProducts'
import BannerOne from '../components/Home/BannerOne'
import CollectionRunProducts from '../components/Home/CollectionRunProducts'
import BannerTwo from '../components/Home/BannerTwo'
import CollectionSportProducts from '../components/Home/CollectionSportProducts'
import CollectionCategories from '../components/Home/CollectionCategories'
import Form from '../components/Home/Form'


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
      <CollectionCategories />
      <Form />
    </div>
  )
}

export default Home 