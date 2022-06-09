import styled from "styled-components";
const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function Announcement() {
  return (
    <Container>
      Welcome to the Stores Grand Opening! Free Shipping on all orders over $25
      with the code "FREE"
    </Container>
  );
}
