import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { breakOne } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: around;
  ${breakOne({ flexDirection: "column", padding: "10px 0" })}
`;

export default function Categories() {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem props={item} key={item.id} />
      ))}
    </Container>
  );
}
