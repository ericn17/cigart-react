import React from 'react'
import Navbar from '../components/Navbar'
import Promotion from '../components/Promotion'
// import Slider from '../components/Slider'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
      <Promotion/>
      <Navbar/>
      <Hero/>
      <Categories/>
      <Products/>
    </div>
  )
}

export default Home