import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  margin: 20px;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  margin: 10px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 7px;
  font-size: 16px;
`;
const SelectOption = styled.option``;
export default function ProductList() {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Camping Gear</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select>
            <SelectOption>All</SelectOption>
            <SelectOption>Camping</SelectOption>
            <SelectOption>Outdoors</SelectOption>
            <SelectOption>Backpacks</SelectOption>
            <SelectOption>Tents</SelectOption>
          </Select>
          <Select>
            <SelectOption>All</SelectOption>
            <SelectOption>Camping</SelectOption>
            <SelectOption>Outdoors</SelectOption>
            <SelectOption>Backpacks</SelectOption>
            <SelectOption>Tents</SelectOption>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <SelectOption>All</SelectOption>
            <SelectOption>Camping</SelectOption>
            <SelectOption>Outdoors</SelectOption>
            <SelectOption>Backpacks</SelectOption>
            <SelectOption>Tents</SelectOption>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
    </Container>
  );
}
