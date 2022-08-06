import styled from "styled-components";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useState } from "react";
import { slides } from "../data";
import { breakOne } from "../responsive";
import {Link} from "react-router-dom"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  ${breakOne({ display: "none" })}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slide * -100}vw);
  transition: all 1s ease-in-out;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: URL(${(props) => props.background}) no-repeat center center;
  background-size: 100%;
  flex-shrink: 0;
`;
const TextContainer = styled.div`
  flex: 1;
  padding: 50px;
  color: white;
  margin: 0 10vw;
  background-color: rgba(0, 0, 0, 0.7);
`;
const Title = styled.h1`
  font-size: 60px;
`;
const Text = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
`;
const Button = styled.button`
  background-color: transparent;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  color: white;
  border:2px solid white;
`;
export default function Slider() {
  const [slide, setSlide] = useState(1);
  const HandleClick = (direction) => {
    if (direction === "left") {
      setSlide(slide > 0 ? slide - 1 : 2);
    }
    if (direction === "right") {
      setSlide(slide < 2 ? slide + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => HandleClick("left")}>
        <ArrowBackIosNewOutlinedIcon />
      </Arrow>
      <Wrapper slide={slide}>
        {slides.map((item, index) => (
          <Slide key={index} background={item.bg}>
            <TextContainer>
              <Title>{item.title}</Title>
              <Text>{item.text}</Text>
              <Link to = "/products/all"><Button>{item.button}</Button></Link>
            </TextContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => HandleClick("right")}>
        <ArrowForwardIosOutlinedIcon />
      </Arrow>
    </Container>
  );
}
