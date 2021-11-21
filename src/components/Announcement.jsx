import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'
const Container = styled.div`
    height:  50px;
    background-color:black; 
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
 
    font-weight: 300;
    ${mobile({textAlign:"center"})}
`

export default function Announcement() {
    return (
        <Container>
           take your 50% free shipping on your next sales with #amazingcode
        </Container>
    )
}
