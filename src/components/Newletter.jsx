import { Send } from '@material-ui/icons'
import styled from 'styled-components'
import {mobile} from '../responsive'
const Container = styled.div`
    height:50vh;
    background-color:#fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    ${mobile({fontSize:'50px'})}
`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 200;
    margin-bottom: 20px;
    ${mobile({fontSize:'15px'})}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;

`

const Button = styled.button`
    flex: 2;
    background-color: #8f9bd1;
    border: none;
    color: white;
`

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;

`
function Newletter() {
    return (
        <Container>
            <Title>Newsletter </Title>
            <Desc>Get Updates from your favorite products</Desc>
            <InputContainer>
                <Input placeholder="your emails" />
                <Button>
                <Send />
            </Button>
            </InputContainer>
       
        </Container>
    )
}

export default Newletter
