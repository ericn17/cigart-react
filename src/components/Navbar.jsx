import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCart from '@mui/icons-material/ShoppingCartOutlined';


const Container = styled.div`
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language = styled.span`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border:none;
`
const Center = styled.div`
flex: 1;
text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;
  font-size: 48px;
`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`

const NavbarLinks = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <NavbarLinks>Men</NavbarLinks>
          <NavbarLinks>Women</NavbarLinks>
          <NavbarLinks>Kids</NavbarLinks>
          <NavbarLinks>Sale</NavbarLinks>
        </Left>
        <Center>
         <Logo>CIGART.</Logo>
        </Center>
        <Right>
          <NavbarLinks>Sign In</NavbarLinks>
          <NavbarLinks>
            <Badge badgeContent={4} color="primary">
              <ShoppingCart color="action" />
            </Badge>
          </NavbarLinks>
          <Language>EN</Language>
          <SearchContainer>
            <Input/>
            <SearchIcon style={{color:"gray", fontSize: "20px"}}/>
          </SearchContainer>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar