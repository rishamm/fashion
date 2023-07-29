import { styled } from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://fashion-react.s3.ap-south-1.amazonaws.com/p9.jpg")
    center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
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
  margin: 10px 0;
  padding: 10px;
`;
const Wrapper = styled.div`
  width: 25%;
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
  margin-top: 20px;
  margin-bottom: 10px;
`;
const Logo = styled.h1`
  font-size: 60px;
  color: white;
  padding-bottom: 50px;
`;
const Link = styled.div`
  margin: 5px opx;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Logo>Fashion</Logo>
      <Wrapper>
        <Tittle>Login</Tittle>
        <Form>
          <Input placeholder="Email" />

          <Input placeholder="Password" />

          <Button>Login</Button>
          <Link>Forgot Password ?</Link>
          <Link>Create New Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
