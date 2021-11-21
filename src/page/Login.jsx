import React from 'react'
import styled from 'styled-components'
import {mobile, tablet} from '../responsive'
const Container = styled.div`
    width:100vw; 
    height: 100vh;
    background:linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)) ,url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
  
`
const Wrapper = styled.div`
width: 20vw;
background-color:white ;
padding: 20px;
${mobile({ width:"75vw"})}
${tablet({ width:"75vw"})}
`
const Title = styled.h1`
 font-size: 24px;
  font-weight: 300;
`

const Form = styled.form`
display: flex;
flex-direction: column;

`

const Input = styled.input`
padding: 10px;
margin: 10px 0 ;
flex: 1;
min-width: 40%;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
  ${mobile({ width:"100%"})}
${tablet({ width:"100%"})}
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`



function Login() {
    return (
        <Container>
            <Wrapper>
                <Title>LOGIN</Title>
                <Form>
               
                    <Input placeholder="Your email"/>
                    <Input placeholder="Your password"/>
                    <Button>LOGIN</Button>
                    <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
