import styled from 'styled-components'
import { ArrowLeft, ArrowRight, ImportExport } from '@material-ui/icons';
import React, { useState } from 'react'
import { dataItems } from '../data'


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: white;
    position: relative;
    overflow:hidden; 
`

const Arrow = styled.div`
    width: 50px; 
    height:50px; 
    background-color: #fff7f7;
    border-radius: 50%;
    display:flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor:pointer;
    opacity: 0.5;
    z-index:2;

`
const Wrapper = styled.div`
    height: 100%;
    display:flex;
    transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const Title = styled.h1`
    font-size: 5em;
    font-weight: bold;
`
const Desc = styled.p`
    margin:30px 0px;
    font-size: 2em;
    font-weight: 300;
    letter-spacing:3px;
`
const Button = styled.button`
 padding:10px;
 font-size: 1.3em;
border-radius:1px solid black;
background-color: transparent;
`


const Slide = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    background-color:#${props => props.bg};


`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`
const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex:2; 

`


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    console.log(slideIndex)

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 :  2)
        }
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 :  0)
        }
    }
    
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeft />
            </Arrow>

            <Wrapper slideIndex={slideIndex}>
                {dataItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
           
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRight />
            </Arrow>

       

        </Container>
    )
}

export default Slider
