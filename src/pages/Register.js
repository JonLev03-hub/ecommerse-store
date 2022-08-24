import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { breakOne, breakTwo } from "../responsive";
import { useState } from "react";
const Container = styled.div`
  height: 100vh;
`;
const Disapear = styled.div`
  ${breakTwo({ display: "none" })}
`;
const Main = styled.main`
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("./images/HikingBackground.jpg"), rgba(0, 0, 0, 0.5);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
  width: 40%;
  ${breakOne({ width: "90%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: lighter;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
const Agreement = styled.div`
  font-size: 12px;
  margin: 20px 0;
  width: 100%;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background: teal;
  color: white;
  cursor: pointer;
`;
const Error = styled.span`
color:red;
width:100%;
margin:10px 0px;
`;
export default function Register() {
  const [disabled,setDisabled] = useState(false)
  const handleClick = (e)=> {
    e.preventDefault()
    setDisabled(true)
  }
  return (
    <Container>
      <Disapear>
        <Navbar />
      </Disapear>
      <Main>
        <Wrapper>
          <Title>Create Your Account</Title>
          <Form>
            <Input type="text" placeholder="First Name" />
            <Input type="text" placeholder="Last Name" />
            <Input type="text" placeholder="Username" />
            <Input type="text" placeholder="Email" />
            <Input type="text" placeholder="Password" />
            <Input type="text" placeholder="Confirm Password" />
            <Agreement>
              By clicking Register, you agree to our{" "}
              <a>Terms and Conditions.</a>
            </Agreement>
            {disabled && <Error>This Feature is currently Disabled since this is not a production build</Error>}
            <Button onClick = {handleClick} >Create Account</Button>
          </Form>
        </Wrapper>
      </Main>
      <Disapear>
        <Footer />
      </Disapear>
    </Container>
  );
}
