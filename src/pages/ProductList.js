import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  margin: 20px;
  flex-wrap: wrap;
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
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filter, setfilter] = useState({});
  const [sort, setSort] = useState("newest");
  const handlefilter = (e) => {
    const value = e.target.value;
    setfilter({
      ...filter,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Camping Gear</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select name="category" onChange={handlefilter}>
            <SelectItem>All</SelectItem>
            <SelectItem>Camping</SelectItem>
            <SelectItem>Outdoors</SelectItem>
            <SelectItem>Backpacks</SelectItem>
            <SelectItem>Tents</SelectItem>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="asc">Price: Low-High</SelectItem>
            <SelectItem value="desc">Price: High-Low</SelectItem>
            <SelectItem value="featured">Featured</SelectItem>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filter} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
}
