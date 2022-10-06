import styled from 'styled-components'
import React from 'react'
import Navbar from '../components/Navbar'
import Promotion from '../components/Promotion'
import Footer from '../components/Footer'


const Container = styled.div`
  
`
const Wrapper = styled.div`
  
`
const Title = styled.h1`
  
`

const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Promotion/>
      <Wrapper>
        <Title>Your Bag</Title>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart