
import { styled } from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://fashion-react.s3.ap-south-1.amazonaws.com/10.jpg")
    center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Tittle = styled.h1`
  font-size: 24px;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({width:"75%"})}
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Logo = styled.h1`
  font-size: 60px;
  color: white;
  padding-bottom: 50px;
`;

const Register = () => {
  return (


    <Container>
    <Logo>Fashion</Logo>
      <Wrapper>
        <Tittle>CREATE AN ACCOUNT</Tittle>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email" />
          <Input placeholder="Phone" />
          <Input placeholder="Password" />
          <Input placeholder="Re-enter Password" />
          <Agreement>By Creating An Anccount ,I Agree To The <b>Terms&Conditions</b></Agreement>
        <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register