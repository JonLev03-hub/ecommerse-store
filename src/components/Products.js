import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { useState, useEffect } from "react";

const Container = styled.div`

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width:calc(100%-5vw);
  padding 0 5vw;
  max-width: 1600px;
  margin: 5vh auto;
`;

export default function Products({ cat, filters, sort }) {
  const [products, setProducts] = useState([]);
  const [silteredproducts, setFilteredProducts] = useState([]);
  useEffect(() => {}, [cat]);

  return (
    <Container>
      {popularProducts.map((item) => (
        <Product props={item} key={item.id} />
      ))}
    </Container>
  );
}
