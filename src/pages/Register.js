import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Container = styled.div`
  height: 100vh;
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

export default function Register() {
  return (
    <Container>
      <Navbar />
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
            <Button>Create Account</Button>
          </Form>
        </Wrapper>
      </Main>
      <Footer />
    </Container>
  );
}