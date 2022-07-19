import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Remove, Add } from "@mui/icons-material";
import { breakOne, breakTwo } from "../responsive";
import {useLocation} from "react-router-dom"
import {useState, useEffect} from "react"
import {publicRequest} from "../requestMethod"
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${breakOne({ flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  max-width: 650px;
  object-fit: cover;
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${breakOne({ padding: "20px 0px" })}
`;

const Title = styled.h1`
  font-weight: lighter;
`;

const Description = styled.p`
  margin: 20px 0;
  line-height: 1.3rem;
`;

const Price = styled.p`
  font-weight: lighter;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
`;
const Filter = styled.div`
  margin: 10px 0px;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  margin-right: 10px;
`;
const Select = styled.select`
  padding: 5px;
  margin-right: 7px;
  font-size: 16px;
  cursor: pointer;
`;
const SelectItem = styled.option`
  cursor: pointer;
`;

const AddContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;
const AmountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  color: teal;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;

const Button = styled.button`
  padding: 15px 60px;
  margin: 15px 0px;
  border: 2px solid teal;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: teal;
    color: white;
  }
`;

export default function Product() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({})
  useEffect(() => {
    const getProduct = async () => {
      console.log("got")
      const res = publicRequest.get(`/product/find${id}`)
      setProduct(res.data)
    }
  },[id])
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img}></Image>
        </ImgContainer>
        <TextContainer>
          <Title>Woods Hiking Backpack</Title>
          <Description>
            This is a premium quality hiking backpack produced by Woods inc. It
            can fit enough for a milti day backpacking trip and has double
            inline stitching to prevent ripping! This backpack comes with 4
            small pockets for easy to lose items and 3 large sections in the
            main body for extra storage.
          </Description>
          <Price>$100</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Select Color</FilterTitle>
              <Select>
                <SelectItem>Red</SelectItem>
                <SelectItem>Blue</SelectItem>
                <SelectItem>Green</SelectItem>
                <SelectItem>Teal</SelectItem>
                <SelectItem>Yellow</SelectItem>
              </Select>
            </Filter>
            <Filter>
              <FilterTitle>Select Size</FilterTitle>
              <Select>
                <SelectItem>Small</SelectItem>
                <SelectItem>Medium</SelectItem>
                <SelectItem>Large</SelectItem>
              </Select>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
          </AddContainer>
          <Button>Add To Cart</Button>
        </TextContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}
