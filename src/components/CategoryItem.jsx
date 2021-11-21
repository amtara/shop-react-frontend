import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
flex:1;
padding: 5px;
position: relative;

`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({
    height: "30vh"
})}
`

const Information = styled.div`
    position: absolute;
    width:100%;
    height:100%;
   top: 0;
   left: 0;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;  
`
const Title = styled.div`
color: white; 
font-weight: 800; 
font-size:4.5em;
text-align: center;
opacity: .5;
margin: 10px;
${mobile({fontSize:'3em'})}
`
const Button = styled.button`
 padding:10px;
 font-size: 1.3em;
background-color: white;
border: none;
font-weight: 200;
padding:10px;
`


const CategoryItem = ({ item }) => {
    return (
        <Container>

            <Image src={item.img} />
            <Information>

                <Title>{item.title}</Title>
                <Button href="#">Shop Now</Button>
            </Information>


        </Container>
    )
}

export default CategoryItem
