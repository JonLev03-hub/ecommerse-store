import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { useState, useEffect } from "react";
<<<<<<< HEAD
import axios from "axios";
=======
import axios from "axios"
import { DataObjectSharp } from "@mui/icons-material";
>>>>>>> 76bef3e4b60b2e40a5341270fb5a9f423b6da64f

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
<<<<<<< HEAD
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          cat
            ? `http://localhost:5000/api/product/products?category=${cat}`
            : "http://localhost:5000/api/product/products"
        );
        setProducts(response.data);
        console.log(response.data);
      } catch (err) {
        console.log("oops");
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);
  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);
  return (
    <Container>
      {filteredProducts.map((item) => (
        <Product props={item} key={item.id} />
=======
  const [filteredproducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = async ()=> {

      try{
        if (cat && cat != "All") {
 
        }
        const res = await axios.get(cat ?  `http://localhost:5000/api/product/products?category=${cat}`:`http://localhost:5000/api/product/products` )
        setProducts(res.data)
      }catch(err){
        console.log(err)
      }
    }
    getProducts()
  }, [cat]);
  useEffect(() => {
    cat && setFilteredProducts(
      products.filter(item=> Object.entries(filters).every(([key,value]) => item[key].includes(value)))
    )
  },[products,cat,filters])
  useEffect(() => {
    if(sort==="newest"){
      setFilteredProducts(prev=> [...prev].sort((a,b) => a.createdAt - b.createdAt))
    } else if(sort==="asc"){
      setFilteredProducts(prev=> [...prev].sort((a,b) => b.price - a.price))
    } else if(sort==="desc"){
      setFilteredProducts(prev=> [...prev].sort((a,b) => a.price - b.price))
    }
  },[sort])
  return (
    <Container>
      {cat ? filteredproducts.map((item) => (
        <Product props={item} key={item._id} />
      )):products.slice(0,3).map((item) => (
        <Product props={item} key={item._id} />
>>>>>>> 76bef3e4b60b2e40a5341270fb5a9f423b6da64f
      ))}
    </Container>
  );
}
