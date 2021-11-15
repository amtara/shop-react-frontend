import { Search,ShoppingCart } from '@material-ui/icons'
import {Badge} from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
    height:100px;
`
const Wrapper = styled.div`
display:flex;
justify-content: space-between;
padding:10px 20px;
`

const Left = styled.div`
display: flex;
flex: 1;
justify-content: flex-start;
align-items:center;
`

const Center = styled.div`
flex: 1;
text-align:center;
`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`

const Language = styled.span`
    font-size: 14px;
    cursor:pointer;

`

const Input = styled.input`
    border: none;
    outline: none;
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 54px; 
    padding: 5px;
`

const Logo = styled.h1`
font-weight: bold;

.logo:hover {
    color:blue;
    cursor:pointer;
}
`
const MenuItem = styled.div`
    font-size:14px; 
    cursor: pointer;
    margin-left:10px;

`
function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>

                        <Input />
                        <Search style={{color:"gray", fontSize:30}} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>MAKA.  </Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                      <Badge badgeContent={4} color="primary">

                            <ShoppingCart />
                      </Badge>

              
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
