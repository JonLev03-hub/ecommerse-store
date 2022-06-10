import styled from "styled-components";
import Navbar from "../components/Navbar";
import Accouncement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Title = styled.h1`
  width: 100%;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
`;
export default function Home() {
  return (
    <div>
      <Navbar />
      <Accouncement />
      <Slider />
      <Categories />
      <Title>Popular Products</Title>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}
