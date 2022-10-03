import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Promotion from '../components/Promotion'
import Footer from '../components/Footer'
import ShoesMen from '../components/ShoesMen'
import Newsletter from '../components/Newsletter'

const Container = styled.div`

`

const Title = styled.h1`
  
`
const FilterContainer = styled.div`
  
`

const Filter = styled.div`
  
`

const Men = () => {
  return (
    <Container>
      <Promotion/>
      <Navbar/>
      <Title>Men's Shoes</Title>
      <FilterContainer>
        <Filter> Filter 1</Filter>
        <Filter> Filter 2</Filter>
      </FilterContainer>
      <ShoesMen/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Men