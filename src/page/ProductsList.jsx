import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Newletter from '../components/Newletter'
import {mobile} from '../responsive'
const Container = styled.div`
`

const Title = styled.h1`
margin: 20px;
`

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;

`

const Filter = styled.div`
    margin: 20px;
    ${mobile({width:"0px 20px",  display:"flex", flexDirection:"column", flexWrap:"wrap"})}
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    ${mobile({ marginBottom:"20px"})}
`


const Select = styled.select`
   padding: 10px;
   ${mobile({ margin:"0px", marginBottom:"5px"})}
   margin-left: 20px;

`

const Option = styled.option`

`

function ProductsList() {
    return (
        <Container>
            <Navbar/>
        <Announcement/>
        <Title>Dress</Title>
        <FilterContainer >
            <Filter>
                <FilterText>Filter Products</FilterText>
                <Select>
                    <Option>White </Option>
                    <Option>Black </Option>
                    <Option>Red </Option>
                    <Option>Blue </Option>
                    <Option>Yellow </Option>
                    <Option>Green </Option>
                </Select>

                <Select>
            
                    <Option>M </Option>
                    <Option>L </Option>
                    <Option>S </Option>
                    <Option>XL </Option>
                    <Option>XXL </Option>
                    
                </Select>
            </Filter>

            <Filter>
            <FilterText>Sort Products</FilterText>
            <Select>
                    <Option selected>Newest </Option>
                    <Option>Price(asc) </Option>
                    <Option>Price(desc) </Option>
                   
                </Select>
            </Filter>
        </FilterContainer>
        <FilterContainer />
        <Products/>
        <Newletter/>
        <Footer/>
        </Container>
    )
}

export default ProductsList
