import React from 'react'
import Navbar from '../components/Navbar'
import Promotion from '../components/Promotion'
// import Slider from '../components/Slider'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div>
      <Promotion/>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default Home