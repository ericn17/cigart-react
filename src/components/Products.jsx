import styled from 'styled-components'
import React from 'react'
import { popularProducts } from '../data'

const Container = styled.div`
  padding: 20px;
  display: flex;
  
`

const Popular = () => {
  return (
    <Container>
      {popularProducts.map(item=> (
        <Product item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Popular