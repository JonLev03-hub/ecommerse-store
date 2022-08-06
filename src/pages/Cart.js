import styled from "styled-components";
import Navbar from "../components/Navbar";
import Accouncement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { breakOne, breakTwo } from "../responsive";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../requestMethod";
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
const KEY = process.env.REACT_APP_STRIPE
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: lighter;
`;
const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  ${breakOne({ flexDirection: "column" })}
`;
const TopButton = styled.button`
  margin: 20px;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
  border: ${(props) =>
    props.type === "filled" ? "2px solid transparent" : "2px solid teal"};
  background-color: ${(props) =>
    props.type === "filled" ? "teal" : "transparent"};
  color: ${(props) => (props.type === "filled" ? "white" : "teal")};
  font-size: 18px;
  ${breakOne({ width: "80%" })}
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const BottomContainer = styled.div`
  display: flex;
  ${breakOne({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetails = styled.div`
  flex: 3;
  display: flex;
  ${breakTwo({ flexDirection: "column" })}
`;

const Image = styled.img`
  width: 200px;
  ${breakOne({ width: "150px" })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
`;

const ProductName = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const ProductSize = styled.span``;

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.span`
  font-size: 24px;
  margin: 5px;
`;
const Price = styled.span`
  font-size: 24px;
  font-weight: lighter;
`;

const Hr = styled.hr`
  width: 95%;
  margin: 20px 0;
  border-radius: 10px;
  opacity: 0.2;
  background-color: grey;
`;

const Summary = styled.div`
  flex: 1;
  border: 1px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  margin-top: 20px;
`;

const SummaryTitle = styled.h1`
  fontweight: lighter;
`;

const SummaryItem = styled.div`
  margin: 30px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.bold === "bold" && "bold"};
  font-size: ${(props) => props.bold === "bold" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: teal;
  color: white;
  border:none;
  cursor:pointer;
`;

export default function Cart() {
  const cart = useSelector(state=>state.cart)
  const [stripeToken,setStripeToken] = useState(null)
  const navigate = useNavigate()
  const onToken = (token)=> {
    setStripeToken(token)
  }
  useEffect(()=> {
    const makeRequest = async ()=>{
      try{

        const res = await userRequest.post("/checkout/payment",{
          tokenId:stripeToken.id,
          amount: cart.total*100,
        })
        navigate("/success",{data:res.data})
      } catch (err) {
        console.log(err)
      }
    }
    stripeToken && cart.total >= 1 && makeRequest()
  }, [stripeToken,cart.total,navigate]
  )
  return (
    <div>
      <Container>
        <Navbar />
        <Accouncement />
        <Wrapper>
          <Title>Shopping Cart</Title>
          <TopContainer>
            <Link to = "/products/all"><TopButton>Continue Shopping</TopButton></Link>
            <TopTexts>
              <TopText>Shopping Bag ({cart.quantity})</TopText>
              <TopText>Wish List (5)</TopText>
            </TopTexts>
            <StripeCheckout
              name = "Outdoor Market"
              billingAddress
              shippingAddress
              description={`Your Total is $${cart.total}`}
              total = {cart.total*100}
              token = {onToken}
              stripeKey = {KEY}
              >
              <TopButton type="filled">Checkout Now</TopButton>
            </StripeCheckout>
          </TopContainer>
          <BottomContainer>
            <Info>
              {cart.products.map((product)=>(
                <>
                <Product>
                <ProductDetails>
                  <Image src={product.img}></Image>
                  <Details>
                    <ProductName>
                      <b>Product: </b>{product.title}
                    </ProductName>
                    <ProductName>
                      <b>Id: </b>{product._id}
                    </ProductName>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size: </b>{product.size}
                    </ProductSize>
                  </Details>
                </ProductDetails>
                <PriceDetails>
                  <ProductAmountContainer>
                    <Remove />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Add />
                  </ProductAmountContainer>
                  <Price>${product.price*product.quantity}</Price>
                </PriceDetails>
              </Product>
              <Hr/>
              </>
              ))}
            </Info>
            <Summary>
              <SummaryTitle>Order Summary</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>${cart.total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$10</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Discount</SummaryItemText>
                <SummaryItemPrice>-$10</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem bold="bold">
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>${cart.total}</SummaryItemPrice>
              </SummaryItem>
              <StripeCheckout
              name = "Outdoor Market"
              billingAddress
              shippingAddress
              description={`Your Total is $${cart.total}`}
              total = {cart.total*100}
              token = {onToken}
              stripeKey = {KEY}
              >
              <SummaryButton type="filled">Checkout Now</SummaryButton>
            </StripeCheckout>
            </Summary>
          </BottomContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
      </Container>
    </div>
  );
}
