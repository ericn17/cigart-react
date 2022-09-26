import React from 'react'
import styled from "styled-components"
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import Hero1 from '../assets/img/hero-image-2.jpg'


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`

const Arrow= styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
`

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
`

const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
`

const Image = styled.img`
  height: 80%;
`

const InfoContainer = styled.div`
  flex: 1;
  position: absolute;
`

const Title = styled.h1`
  font-size:70px
`

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`

const Btn = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`

function Slider() {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlinedIcon/>
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image src={Hero1}/>
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Desc>GET 30% OUR NEW ARRIVALS.</Desc>
            <Btn>SHOP NOW</Btn>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlinedIcon/>
      </Arrow>
    </Container>
  )
}

export default Slider