import React from 'react'
import styled from "styled-components"
import Hero1 from '../assets/img/hero-image-1.jpg'
import Hero2 from '../assets/img/hero-image-2.jpg'



const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`

// const Wrapper = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   position: relative;
// `
const HeroSection1 = styled.div`
  width: 100%;
  position: relative;
`
const HeroSection2 = styled.div`
  width: 100%;
`

const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
`

const Image = styled.img`
  height: 90%;
  width: 100%;
  object-fit: cover;
`
const Btn = styled.button`
  display: flex;  
  outline: 0;
  text-align: center;
  padding: 17px 30px;
  border: 0;
  color: #fff;
  font-size: 17.5px;
  border: 2px solid transparent;
  border-color: #000;
  color: #000;
  font-weight: 800;
  line-height: 25px;
  transition: .1s ease-in-out;
  cursor: pointer;
  margin: 15px;

  &:hover {
    background-color: black;
    color: white;
  }
`

const InfoContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 15%;
  right: 5%;
`

const Title = styled.h1`
  font-size:70px;
  line-height: 75px;
  color: white;
`

const Desc = styled.p`
  margin: 20px 0px;
  font-size: 20px;
  
  color: white;
`



function Hero() {
  return (
    <Container>
        <HeroSection1>
          <ImgContainer>
            <Image src={Hero1}/>
          </ImgContainer>
          <InfoContainer>
            <Title>STAY AHEAD OF THE TRENDS</Title>
            <Desc>SHOES THAT PROVIDE STYLE AND COMFORT.</Desc>
            <Btn class="Shop">SHOP MEN 🠪 </Btn>
            <Btn class="Shop">SHOP WOMEN 🠪</Btn>
            <Btn class="Shop">SHOP KIDS 🠪</Btn>
          </InfoContainer>
        </HeroSection1>
        {/* <HeroSection2>
          <ImgContainer>
            <Image src={Hero2}/>
          </ImgContainer>
        </HeroSection2> */}
    </Container>
  )
}

export default Hero