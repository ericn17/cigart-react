import styled from 'styled-components'
import React from 'react'
import Navbar from '../components/Navbar'
import Promotion from '../components/Promotion'
import Footer from '../components/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from "../responsive";


const Container = styled.div`
  
`
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px"})}
`
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props=>props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black": "transparent"};
  color: ${props=>props.type === "filled" && "white"};
`
const TopTexts = styled.div`
  ${mobile({ display: "none"})}
`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`
const Info = styled.div`
  flex: 3;
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`
const Image = styled.img`
  width: 200px;
`
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
`
const ProductSize = styled.span`

`
const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "15px 15px" })}
`
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`
const SummaryTitle = styled.h1`
  font-weight: 200;
`
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=>props.type === "total" && "5"};
  font-size: ${props=>props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`

const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Promotion/>
      <Wrapper>
        <Title>Shopping Cart</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4d0427f9-5ffd-4b6d-b305-5584bd1e274b/react-pegasus-trail-4-gore-tex-mens-waterproof-trail-running-shoes-Rd3hwh.png"/>
                <Details>
                  <ProductName><b>Product:</b> React Pegasus Trail 4 GORE-TEX</ProductName>
                  <ProductId><b>ID:</b> 92137812</ProductId>
                  <ProductColor color="gray"/>
                  <ProductSize><b>Size:</b> 10.5</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon/>
                  <ProductAmount>1</ProductAmount>
                  <RemoveIcon/>
                </ProductAmountContainer>
                <ProductPrice>$160</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr/>
            <Product>
              <ProductDetail>
                <Image src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8a27b127-8a9f-4c06-bd34-fa9ded6e81f4/air-max-97-og-mens-shoes-zV9FQs.png"/>
                <Details>
                  <ProductName><b>Product:</b> Air Max 97 OG</ProductName>
                  <ProductId><b>ID:</b> 96354353</ProductId>
                  <ProductColor color="navy"/>
                  <ProductSize><b>Size:</b> 10.5</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon/>
                  <ProductAmount>1</ProductAmount>
                  <RemoveIcon/>
                </ProductAmountContainer>
                <ProductPrice>$185</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$345</SummaryItemPrice>
            </SummaryItem>
             <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$5.99</SummaryItemPrice>
            </SummaryItem>
             <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>- $5.99</SummaryItemPrice>
            </SummaryItem>
            <Hr/>
             <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$345</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart