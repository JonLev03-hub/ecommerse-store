import styled from "styled-components";
import { Send } from "@mui/icons-material";

const Container = styled.div`
  height: 50vh;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;
const Title = styled.h1`
  font-size: 60px;
  margin: 10px;
  color: #333;
`;
const Text = styled.p`
  font-size: 24px;
  margin: 10px;
`;
const Form = styled.form`
  width: 50%;
  height: 50px;
  background: white;
  display: flex;
  justify-content: space-between;
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
  color: white;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export default function Newsletter() {
  return (
    <Container>
      <Title>Subscribe to our Newsletter!</Title>
      <Text>
        Subscribe to our Newsletter to view over 100 new products and deals a
        month!
      </Text>
      <Form>
        <Input type="text" placeholder="Your Email" />
        <Button>
          <Send />
        </Button>
      </Form>
    </Container>
  );
}
