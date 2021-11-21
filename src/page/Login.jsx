import React from 'react'
import styled from 'styled-components'

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
width: 25%;
background-color:white ;
padding: 20px;
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
