import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width:100%;
  padding 0, 5vw;
  max-width: 1600px;
  margin: 0 auto;
`;

export default function PopularProducts() {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product props={item} key={item.id} />
      ))}
    </Container>
  );
}
