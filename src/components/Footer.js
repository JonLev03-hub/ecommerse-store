import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div``;
const Center = styled.div``;
const Right = styled.div``;

export default function Footer() {
  return (
    <Container>
      <Left></Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
}
