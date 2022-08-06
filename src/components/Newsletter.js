import styled from "styled-components";
import { Send } from "@mui/icons-material";
import { breakOne, breakTwo } from "../responsive";

const Container = styled.div`
  height: 50vh;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  ${breakOne({ textAlign: "center" })}
  ${breakTwo({ height: "fit-content", padding: "20px 0" })}
`;
const Title = styled.h1`
  font-size: 60px;
  margin: 10px;
  color: #333;
  ${breakOne({ fontSize: "40px" })}
  ${breakTwo({ fontSize: "30px" })}
`;
const Text = styled.p`
  font-size: 24px;
  margin: 10px;
  ${breakOne({ textAlign: "center", fontSize: "20px" })}
  ${breakTwo({ fontSize: "16px" })}
`;
const Form = styled.form`
  width: 50%;
  height: 50px;
  background: white;
  display: flex;
  justify-content: space-between;
  ${breakOne({ width: "80%" })}
`;
const Input = styled.input`
  border: 1px solid lightgrey;
  flex-grow: 5;
  font-size: 20px;
  transition: all 0.2s ease-in-out;
`;
const Button = styled.button`
  border: none;
  background-color: teal;
  border-radius: 0%;
  flex-grow: 1;
  min-width: 75px;
  color: white;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export default function Newsletter() {
  const handleClick = (e)=> {
    e.preventDefault()
  }
  return (
    <Container>
      <Title>Subscribe to our Newsletter!</Title>
      <Text>
        Subscribe to our Newsletter to view over 100 new products and deals a
        month!
      </Text>
      <Form>
        <Input type="text" placeholder="Your Email" />
        <Button onclick = {handleClick}>
          <Send />
        </Button>
      </Form>
    </Container>
  );
}
