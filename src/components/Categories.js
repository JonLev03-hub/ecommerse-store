import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: around;
`;

export default function Categories() {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem props={item} />
      ))}
    </Container>
  );
}
