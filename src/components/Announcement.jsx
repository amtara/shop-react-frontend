import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height:  40px;
    background-color:black; 
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 300;
`

export default function Announcement() {
    return (
        <Container>
           take your 50% free shipping on your next sales with #amazingcode
        </Container>
    )
}
