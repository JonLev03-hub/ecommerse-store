import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { useState, useEffect } from "react";
import axios from "axios"
import { DataObjectSharp } from "@mui/icons-material";

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
      ))}
    </Container>
  );
}
