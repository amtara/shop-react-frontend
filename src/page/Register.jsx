
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
 width: 100vw;   
 height: 100vh;
 background: url("https://bassaluxury.com/wp-content/uploads/2020/11/Image-27-10-2020-à-19.49-scaled-e1605878242913.jpg") center  ;
 background-size: cover;
 display: flex;
 align-items: center;
 justify-content: center;
`

const Wrapper = styled.div`
    width: 30%;
    padding: 20px;
    background-color: white;
`
const Title = styled.h1`
     font-size: 24px;
  font-weight: 300; 
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;

`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0 5px 4px;
  padding: 10px;
`
const Agrement = styled.span`
      font-size: 12px;
  margin: 20px 0px;
`
const Button = styled.button`
      width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`
function Register() {
    return (
        <Container>
            <Wrapper>
                <Title>Create an account </Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm your password" />

                    <Agrement>
                        By creating an account, I consent to the processsing of my personal data in accordance wojt <b>PRIVACY POLICY</b>
                    </Agrement>
             
 
                    <Button>CREATE</Button>
      

        
             
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
