import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

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
const SelectItem = styled.option``;
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
            <SelectItem>All</SelectItem>
            <SelectItem>Camping</SelectItem>
            <SelectItem>Outdoors</SelectItem>
            <SelectItem>Backpacks</SelectItem>
            <SelectItem>Tents</SelectItem>
          </Select>
          <Select>
            <SelectItem>All</SelectItem>
            <SelectItem>Camping</SelectItem>
            <SelectItem>Outdoors</SelectItem>
            <SelectItem>Backpacks</SelectItem>
            <SelectItem>Tents</SelectItem>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <SelectItem>All</SelectItem>
            <SelectItem>Camping</SelectItem>
            <SelectItem>Outdoors</SelectItem>
            <SelectItem>Backpacks</SelectItem>
            <SelectItem>Tents</SelectItem>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Footer />
      <Newsletter />
    </Container>
  );
}
