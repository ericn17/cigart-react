import styled from "styled-components"
import Navbar from '../components/Navbar'
import Promotion from '../components/Promotion'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from "../responsive";


const Container = styled.div`
  
`
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`
const ImgContainer = styled.div`
  flex: 1;
`
const Image= styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`
const Title = styled.h1`
  font-weight: 200;
`

const Description = styled.p`
  margin: 20px 0px;
`
const Price = styled.span`
font-weight: 100;
font-size: 40px;
`
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%"})}
`
const Filter = styled.div`
  display: flex;
  align-items: center;
`
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
  margin: 0px 5px;
  cursor: pointer;
`
const FilterSize = styled.select`
  margin: 10px;
  padding: 5px;
`
const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%"})}
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #008080;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`
const Button = styled.button`
  padding: 15px;
  border: 2px solid #008080;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
    background-color: #f8f4f4;
  }
`

const SingleProduct = () => {
  return (
    <Container>
      <Navbar/>
      <Promotion/>
      <Wrapper>
        <ImgContainer>
          <Image src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4d0427f9-5ffd-4b6d-b305-5584bd1e274b/react-pegasus-trail-4-gore-tex-mens-waterproof-trail-running-shoes-Rd3hwh.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>React Pegasus Trail 4 GORE-TEX</Title>
          <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Description>
          <Price>$160</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="gray"/>
              <FilterColor color="orange"/>
              <FilterColor color="green"/>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>6</FilterSizeOption>
                <FilterSizeOption>6.5</FilterSizeOption>
                <FilterSizeOption>7</FilterSizeOption>
                <FilterSizeOption>7.5</FilterSizeOption>
                <FilterSizeOption>8</FilterSizeOption>
                <FilterSizeOption>8.5</FilterSizeOption>
                <FilterSizeOption>9</FilterSizeOption>
                <FilterSizeOption>9.5</FilterSizeOption>
                <FilterSizeOption>10</FilterSizeOption>
                <FilterSizeOption>10.5</FilterSizeOption>
                <FilterSizeOption>11</FilterSizeOption>
                <FilterSizeOption>11.5</FilterSizeOption>
                <FilterSizeOption>12.5</FilterSizeOption>
                <FilterSizeOption>13</FilterSizeOption>
                <FilterSizeOption>13.5</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon/>
              <Amount>1</Amount>
              <AddIcon/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default SingleProduct