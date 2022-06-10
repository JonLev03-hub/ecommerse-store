import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width:calc(100%-5vw);
  padding 0 5vw;
  max-width: 1600px;
  margin: 5vh auto;
`;
const Title = styled.h1`
  width: 100%;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
`;

export default function PopularProducts() {
  return (
    <Container>
      <Title>Popular Products</Title>
      {popularProducts.map((item) => (
        <Product props={item} key={item.id} />
      ))}
    </Container>
  );
}
