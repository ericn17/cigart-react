import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Promotion from '../components/Promotion'
import Footer from '../components/Footer'
import ShoesWomen from '../components/ShoesWomen'
import Newsletter from '../components/Newsletter'
import { mobile } from "../responsive";

const Container = styled.div`
`

const Title = styled.h1`
  margin-top: 15px;
  margin: 15px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display:"flex", flexDirection:"column"})}
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`

const Select = styled.select`
  padding: 5px;
  margin-right: 20px;
`
const Option = styled.option`
  
`

const Women = () => {
  return (
    <Container>
      <Navbar/>
      <Promotion/>
      <Title>Women's Shoes</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
        </Filter>
          <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <ShoesWomen/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Women